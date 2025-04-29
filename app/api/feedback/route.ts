// pages/api/feedback.ts (for Pages Router)

import { createClient } from "next-sanity";
import { NextResponse } from "next/server";

const sanity = createClient({
  projectId: "a45hjv9w",
  dataset: "production",
  apiVersion: "2024-04-28",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});
export async function POST(request: Request) {
  try {
    const { slug, type, title } = await request.json();

    if (!slug || !type) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Find existing feedback document
    const existing = await sanity.fetch(
      `*[_type == "feedback" && slug == $slug][0]`,
      { slug }
    );

    if (existing) {
      // Update counts
      const field = type === "helpful" ? "helpfulCount" : "notHelpfulCount";
      await sanity
        .patch(existing._id)
        .inc({ [field]: 1 })
        .commit();
    } else {
      // Create new document
      await sanity.create({
        _type: "feedback",
        slug,
        title,
        helpfulCount: type === "helpful" ? 1 : 0,
        notHelpfulCount: type === "notHelpful" ? 1 : 0,
      });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Feedback API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

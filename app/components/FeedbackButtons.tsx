"use client";

import { useState } from "react";

export default function FeedbackButtons({
  slug,
  title,
}: {
  slug: string;
  title: string;
}) {
  const [status, setStatus] = useState("idle");

  const handleFeedback = async (type: string) => {
    if (status !== "idle") return;

    setStatus("loading");
    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, type, title }),
      });

      if (response.ok) {
        setStatus("submitted");
      } else {
        setStatus("idle");
      }
    } catch (error) {
      console.error("Feedback error:", error);
      setStatus("idle");
    }
  };

  return (
    <div className="flex justify-center items-center relative h-16 my-6">
      <div
        className={`transition-all duration-500 ease-in-out absolute transform ${
          status === "idle"
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="flex gap-6">
          <button
            onClick={() => handleFeedback("helpful")}
            className="flex flex-col items-center transition-all duration-300 gap-3 group"
          >
            <div className="flex p-3 border border-gray-300 group-hover:border-green-500 group-hover:bg-gray-100 text-green-700 text-xl aspect-square font-medium rounded-full transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-md overflow-hidden relative">
              <span className="transition-transform duration-300 group-hover:scale-110">
                😊
              </span>
              <div className="absolute inset-0 bg-green-100 opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-300"></div>
            </div>
            <span className="mb-2 transition-all duration-300 group-hover:text-green-600 group-hover:font-medium">
              Helpful
            </span>
          </button>

          <button
            onClick={() => handleFeedback("notHelpful")}
            className="flex flex-col items-center transition-all duration-300 gap-3 group"
          >
            <div className="flex p-3 border border-gray-300 group-hover:border-red-500 group-hover:bg-gray-100 text-xl aspect-square font-medium rounded-full transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-md overflow-hidden relative">
              <span className="transition-transform duration-300 group-hover:scale-110">
                😔
              </span>
              <div className="absolute inset-0 bg-red-100 opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-300"></div>
            </div>
            <span className="mb-2 transition-all duration-300 group-hover:text-red-600 group-hover:font-medium">
              Not Helpful
            </span>
          </button>
        </div>
      </div>

      <div
        className={`transition-all duration-500 ease-in-out absolute transform ${
          status !== "idle"
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {status === "loading" && (
          <div className="text-gray-600 text-sm font-medium">Loading...</div>
        )}
        {status === "submitted" && (
          <div className="text-green-600 text-sm font-medium">
            ✅ Thanks for your feedback!
          </div>
        )}
      </div>
    </div>
  );
}

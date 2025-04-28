import { client } from '@/lib/sanity'
import { NextRequest, NextResponse } from 'next/server'

async function updateFeedbackCount(slug: string, type: 'helpful' | 'notHelpful', title: string) {
  try {
    const query = `*[_type == "productGuide" && Slug == $slug]`;
    const params = { slug };
    const docs = await client.fetch(query, params);

    if (docs.length > 0) {
      // Document exists, increment the count
      const doc = docs[0];
      const docId = doc._id;
      const fieldToUpdate = type === 'helpful' ? 'helpfulCount' : 'notHelpfulCount';
      const newValue = (doc[fieldToUpdate] || 0) + 1;

      await client.patch(docId).set({ [fieldToUpdate]: newValue }).commit();
      return true;
    } else {
      // Document does not exist, create a new one
      await client.create({
        _type: 'productGuide',
        title,
        Slug: slug,
        helpfulCount: type === 'helpful' ? 1 : 0,
        notHelpfulCount: type === 'notHelpful' ? 1 : 0,
      });
      return true;
    }
  } catch (error) {
    console.error('Error updating/creating feedback:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const { slug, type, title } = await request.json();

    if (!slug || !type || !['helpful', 'notHelpful'].includes(type)) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    const success = await updateFeedbackCount(slug, type, title);

    if (success) {
      return NextResponse.json({ message: 'Feedback recorded' }, { status: 200 });
    } else {
      return NextResponse.json({ error: 'Failed to update feedback' }, { status: 500 });
    }
  } catch (error) {
    console.log('Error in feedback API:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

import {client} from '@/lib/sanity'
import {NextResponse} from 'next/server'

export async function POST(req: Request) {
  const {slug, type} = await req.json()
  
  try {
    const doc = await client
      .patch({query: `*[_type == "documentation" && slug.current == "${slug}"][0]`})
      .inc({[type === 'helpful' ? 'helpfulCount' : 'notHelpfulCount']: 1})
      .commit()

    return NextResponse.json({success: true, doc})
  } catch (error) {
    return NextResponse.json(
      {success: false, error: 'Failed to update feedback'},
      {status: 500}
    )
  }
}

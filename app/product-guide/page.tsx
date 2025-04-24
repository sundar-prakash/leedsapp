import { getDocumentationBySlug } from "@/lib/documentation"
import DocContent from "@/app/components/doc-content"

export default function ProductGuideHome() {
  const doc = getDocumentationBySlug("introduction")

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Product Guide</h1>
      <p className="text-gray-600 mb-8">
        Welcome to the LeedsApp product guide. Here you'll find everything you need to know about using our platform
        effectively.
      </p>

      {doc ? <DocContent content={doc.content} /> : <p>Loading documentation...</p>}
    </div>
  )
}

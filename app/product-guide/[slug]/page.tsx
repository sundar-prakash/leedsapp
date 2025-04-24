import { getDocumentationBySlug, getAllDocumentationRoutes } from "@/lib/documentation"
import DocContent from "@/app/components/doc-content"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const routes = getAllDocumentationRoutes()
  return routes.map((route) => ({
    slug: route.slug,
  }))
}

export default function DocumentationPage({ params }: { params: { slug: string } }) {
  const doc = getDocumentationBySlug(params.slug)

  if (!doc) {
    notFound()
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">{doc.title}</h1>
      {doc.description && <p className="text-gray-600 mb-8">{doc.description}</p>}

      <DocContent content={doc.content} />
    </div>
  )
}

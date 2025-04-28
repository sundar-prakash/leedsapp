import documentationData from "./docs-data-2"

export interface DocRoute {
    title: string
    slug: string
    order: number
  }
  
  export type DocContentBlock =
    | { type: "heading"; content: string; level: 2 | 3 | 4; id: string }
    | { type: "paragraph"; content: string }
    | { type: "image"; src: string; alt?: string; width?: number; height?: number; caption?: string }
    | { type: "video"; src: string; title?: string; isMobile: boolean }
    | { type: "list"; items: string[]; style: "ordered" | "unordered" }
    | { type: "code"; content: string; language?: string }
    | { type: "note"; content: string; variant?: "info" | "warning" | "error" }
    | {type: "carousel"; id: string; items: { src: string; alt: string }[];}
  
  export interface Documentation {
    title: string
    slug: string
    description?: string
    category?: string
    order: number
    content: DocContentBlock[]
  }
  

  
  export function getAllDocumentationRoutes(): DocRoute[] {
    return documentationData
      .map((doc) => ({
        title: doc.title,
        slug: doc.slug,
        order: doc.order,
      }))
      .sort((a, b) => {
 
        return a.order - b.order
      })
  }
  
  export function getDocumentationBySlug(slug: string): Documentation | undefined {
    return documentationData.find((doc) => doc.slug === slug)
  }
  

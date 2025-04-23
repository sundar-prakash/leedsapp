// lib/queries.js
export const allBlogsQuery = `
  *[_type == "post"] {
    _id,
    title,
    slug,
    body,
    mainImage,
    author-> {
      name,
      image
    },
    categories[]-> {
      title
    },
    publishedAt
  }
`;

export const allCategoriesQuery = `
  *[_type == "category"] {
    _id,
    title
  }
`;
export const fullBlogQuery = (slug: string) => `
    *[_type == "post" && slug.current == '${slug}'] {
        "currentSlug": slug.current,
        title,
        "content":body,
         author-> {
      name,
      image,
      "slug": slug.current
    },
        categories[]-> {
      title
    },
        "titleImage":mainImage,
        publishedAt
    }[0]`;

export const relatedBlogsQuery = (category: string, currentSlug: string) => `
  *[_type == "post" &&
  "${category}" in categories[]->title &&
  slug.current != '${currentSlug}']
  {
    _id,
    title,
    slug,
    body,
    author-> {
      name,
      image
    },
    categories[]-> {
      title
    },
    publishedAt,
    mainImage
  } | order(publishedAt desc) [0..2]
`;


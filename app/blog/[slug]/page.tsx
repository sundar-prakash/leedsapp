import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { Metadata, ResolvingMetadata } from "next";
import { BlogPost, client, urlFor } from "@/lib/sanity";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import BlogArticle from "@/app/components/BlogArticle";
import { fullBlogQuery, relatedBlogsQuery } from "@/lib/queries";
import { RichTextComponents } from "@/app/components/RichTextBuilder";

export const revalidate = 60;

export interface FullBlog {
  currentSlug: string;
  title: string;
  content: any;
  titleImage: any;
  publishedAt: string;
  author?: { name?: string; image?: string; slug?: string; shortdescription?: string };
  categories?: { title?: string }[];
}

async function getData(slug: string) {
  const query = fullBlogQuery(slug);
  const data = await client.fetch(query);
  return data || null;
}

async function getRelatedPosts(category: string | undefined, currentSlug: string) {
  if (!category) return [];
  const query = relatedBlogsQuery(category, currentSlug);
  return (await client.fetch(query)) || [];
}
type Params = Promise<{ slug: string }>;
export async function generateMetadata(
  { params }: { params:Params },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentMetadata = await parent;

  const { slug } = await params;
  const data: FullBlog | null = await getData(slug);

  if (!data) {
    return {
      title: "Blog Post Not Found - Leedsapp Blog",
      description: "The requested blog post could not be found.",
      openGraph: {
        title: "Blog Post Not Found",
        description: "The requested blog post could not be found.",
        images: [],
        type: "article",
        locale: "en_US",
      },
    };
  }

  const title = data.title || "Untitled Blog";
  const authorName = data.author?.name || "Unknown Author";
  const desc = data.content?.[0]?.children?.[0]?.text || "No description available.";
  const previousImages = parentMetadata?.openGraph?.images || [];

  const imageUrl = data.titleImage
    ? urlFor(data.titleImage).width(800).height(600).url()
    : "";

  return {
    title: `${title} - Leedsapp Blog`,
    description: desc,
    openGraph: {
      title,
      description: desc,
      images: imageUrl ? [imageUrl, ...previousImages] : previousImages,
      type: "article",
      locale: "en_US",
      authors: [authorName], // Ensure it's an array
    },
  };
}


export default async function FullBlogArticle({ params }: { params: Params }) {
  const { slug } = await params;
  const data: FullBlog | null = await getData(slug);
  if (!data) return <div>Blog post not found.</div>;

  const { title, content, titleImage, publishedAt, categories, author } = data;
  const relatedPosts: BlogPost[] = await getRelatedPosts(categories?.[0]?.title, slug);

  return (
    <div className="bg-gradient-to-b from-[#f1f1f1] from-[200px] lg:from-[400px] to-[#ffffff] to-[450px] justify-items-center">
      <div className="w-[90%] max-w-6xl mx-auto">
        <div className="justify-items-center max-w-full pt-10 pb-[130px]">
          <div className="grid grid-cols-1">
            <div className="flex pt-[20px] gap-[5px] md:gap-[5px] lg:gap-[10px]">
              {categories?.map((e, i) => (
                <Link
                  key={i}
                  href={`/category/${e.title || "uncategorized"}`}
                  className="text-[#555555] text-[8px] md:text-[8px] lg:text-[12px] font-[400] text-center place-content-center px-1 md:px-1 lg:px-2 border-[1px] border-[#ACACAC] px-4 h-[26px] rounded-[56px]"
                >
                  {e.title || "Uncategorized"}
                </Link>
              ))}
              <div className=" text-[#555555] font-[400] text-[12px] place-content-center  h-[27px]">
                {formatDate(publishedAt) || "Unknown Date"}
              </div>
            </div>
            <div className="pt-2">
              <p className="text-[#555555] text-[15px] md:text-[20px] lg:text-3xl font-[400] pb-5">
                {title || "Untitled"}
              </p>
            </div>
            {/* <Link href={`/about/${author?.slug || "unknown"}`} className="flex pb-5">
              {author?.image ? (
                <Image
                  className="rounded-full"
                  src={urlFor(author.image).url()}
                  alt={author.name || "Anonymous"}
                  width={35}
                  height={35}
                />
              ) : (
                <div className="w-[35px] h-[35px] bg-[#D9D9D9] rounded-full" />
              )}
              <div className="font-[600] text-[16px] text-[#555555] pl-[15px] text-center place-content-center">
                {author?.name || "Anonymous"}
              </div>
            </Link> */}

            {titleImage && (
              <Image
                className="rounded-[20px]"
                src={urlFor(titleImage).width(800).height(500).url() || "/fallback.jpg"}
                alt={title || "Blog Image"}
                width={800}
                height={500}
              />
            )}

            <div className="justify-items-center pt-5 text-[#555555] max-w-[750px] pb-5">
              <PortableText value={content || []} components={RichTextComponents} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

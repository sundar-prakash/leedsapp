
import { BlogPost, client, urlFor } from "../../lib/sanity";
import BlogArticle from "@/app/components/BlogArticle";
import { allBlogsQuery } from "../../lib/queries";

// Async function to fetch data from Sanity
async function fetchPosts() {
  try {
    const posts: BlogPost[] = await client.fetch(allBlogsQuery);
    return posts || [];
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export default async function Page() {
  const posts = await fetchPosts();

  return (
    <div className=" flex flex-col justify-center items-center">
      <div className="w-full flex flex-col items-center px-10 lg:w-[85%]">
        
        <div className="font-semibold text-6xl leading-[4rem] text-[#002841] pt-[5px] mb-24">
         Blogs
        </div>
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-[45px] gap-[40px] justify-items-start pb-[70px]">
          {posts.map((post) => (
            <BlogArticle
              key={post._id}
              imgSrc={
                post?.mainImage
                  ? urlFor(post.mainImage).width(500).height(300).url()
                  : "/placeholder.png"
              }
              imgHeight={300}
              imgWidth={500}
              category={post?.categories?.[0]?.title || "Uncategorized"}
              date={post?.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : "Unknown Date"}
              title={post?.title || "Untitled Post"}
              description={post?.body?.[0]?.children?.[0]?.text?.substring(0, 100) + "..." || "No description available."}
              author={post?.author || { name: "Anonymous", image: null }}
              link={`/blog/${post?.slug?.current || "#"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export const revalidate = 60; // Revalidate at most every hour
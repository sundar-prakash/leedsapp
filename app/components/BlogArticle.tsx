import Image from "next/image";
import Link from "next/link";

interface SingleBlogProps {
  imgSrc: string;        // The image source URL
  category: string;      // The blog category (e.g., "Resources")
  date: string;          // The blog publish date
  title: string;         // The blog post title
  description: string;   // A short description or excerpt of the blog
  author: { name: string; image: string };
  link: string;          // The URL for the blog post link
  imgWidth?: number;     // Optional width for the image
  imgHeight?: number;    // Optional height for the image
}

const BlogArticle: React.FC<SingleBlogProps> = ({ 
  imgSrc, 
  category, 
  date, 
  title, 
  description, 
  link, 
  imgWidth = 350,    
  imgHeight = 200    
}) => {
  console.log(imgSrc);
  return (
    <Link href={link}>
      <div className="transform hover:scale-105 transition-transform duration-500 ease-in-out gap-0">
        <Image
        className="rounded-xl"
          src={imgSrc?imgSrc:"/placeholder.png"}
          priority={true}
          alt="Blog Image"
          width={imgWidth}   // Use the passed in width (or default)
          height={imgHeight} // Use the passed in height (or default)
        />
        <div className="flex pt-[20px] gap-0">
          <h3 className='border-[1px] border-[#ACACAC] font-[400] text-[12px] text-[#555555] text-center place-content-center px-4 h-[27px] rounded-[56px]'>
            {category}
          </h3>
          <div className="font-normal text-xs text-[#555555] text-center place-content-center w-[81px] h-[27px]">
            {date}
          </div>
        </div>
        <div className="font-normal text-2xl text-[#555555] leading-6 pt-3.5 max-w-[352px]">
          {title}
        </div>
        <div className="font-normal text-base text-[#555555] leading-4 pt-3.5 max-w-[352px]">
          {description}
        </div>
        {/* <div className="flex pt-[20px]">
          {author.image ? (
                          <Image
                            className="rounded-[30px]"
                            src={urlFor(author.image).url()}
                            alt={author.name}
                            width={35}
                            height={35}
                          />
                        ) : (
                          <div className="w-[35px] h-[35px] bg-[#D9D9D9] rounded-[30px]" />
                        )}
          <div className="font-[600] text-[16px] text-[#555555] pl-[15px] text-center place-content-center">
            {author.name}
          </div>
        </div> */}
      </div>
    </Link>
  );
};

export default BlogArticle;

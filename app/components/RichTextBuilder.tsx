import Link from "next/link";
import {
  PortableTextComponentProps,
  PortableTextMarkComponentProps,
} from "@portabletext/react";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";

// Define the image type interface
interface SanityImage {
  asset: {
    _ref: string;
    _type: string;
  };
  alt?: string;
  caption?: string;
}

interface ImageProps {
  value: SanityImage;
  isInline: boolean;
}

// Function to get image dimensions
const getImageDimensions = (image: SanityImage) => {
  const dimensions = image?.asset?._ref?.split("-")[2];
  if (dimensions) {
    const [width, height] = dimensions.split("x").map(Number);
    return { width, height };
  }
  return { width: 800, height: 600 };
};

export const RichTextComponents = {
  types: {
    image: ({ value, isInline }: ImageProps) => {
      const { width, height } = getImageDimensions(value);
      return (
        <Image
          src={urlFor(value).url()}
          alt={value.alt || " "}
          loading="lazy"
          width={width}
          height={height}
          className={`my-8 mx-auto ${isInline ? "max-w-xs" : "max-w-full"} rounded-lg shadow-lg`}
          style={{ aspectRatio: width / height }}
        />
      );
    },
  },

  block: {
    h1: ({ children }: PortableTextComponentProps<any>) => (
      <h1 className="text-4xl font-bold my-4">{children}</h1>
    ),
    h2: ({ children }: PortableTextComponentProps<any>) => (
      <h2 className="text-3xl font-bold my-4">{children}</h2>
    ),
    h3: ({ children }: PortableTextComponentProps<any>) => (
      <h3 className="text-2xl font-bold my-4">{children}</h3>
    ),
    blockquote: ({ children }: PortableTextComponentProps<any>) => (
      <blockquote className="border-l-4 pl-4 my-4 italic text-gray-700 border-gray-300">
        {children}
      </blockquote>
    ),
    ul: ({ children }: PortableTextComponentProps<any>) => (
      <ul className="list-disc ml-8 my-4">{children}</ul>
    ),
    ol: ({ children }: PortableTextComponentProps<any>) => (
      <ol className="list-decimal ml-8 my-4">{children}</ol>
    ),
    li: ({ children }: PortableTextComponentProps<any>) => (
      <li className="mb-2">{children}</li>
    ),
    p: ({ children }: PortableTextComponentProps<any>) => (
      <p className="text-xl my-4">{children}</p>
    ),
  },

  marks: {
    link: ({ children, value }: PortableTextMarkComponentProps) => {
      const href = value?.href || "";
      const rel = !href.startsWith("/") ? "noreferrer noopener" : undefined;
      return (
        <Link
          href={href}
          rel={rel}
          className="text-blue-500 hover:text-blue-700"
        >
          {children}
        </Link>
      );
    },
  },
};

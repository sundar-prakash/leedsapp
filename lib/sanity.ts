import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
// import { ImageAsset } from '@sanity/types';

export const client = createClient({
  apiVersion: "2024-12-13",
  dataset: "production",
  projectId: "a45hjv9w",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// types.ts




// Example of a possible structure for an image (Sanity image)
export interface ImageAsset {
  _ref: string;
  _type: 'reference';
}
export interface Category {
  _id: string;
  title: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  body: Array<{ _type: string; children: Array<{ text: string }> }>;
  categories: Category[];
  publishedAt: string;
  mainImage: string;
  author: { name: string; image: string };
}

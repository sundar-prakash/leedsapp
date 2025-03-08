import { Metadata } from "next";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
export const metadata: Metadata = {
  title: "Blogs",
  openGraph: {
      title: `Blogs - Leedsapp`,
      type: "article",
    },
};
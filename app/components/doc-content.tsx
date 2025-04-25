import type { DocContentBlock } from "@/lib/documentation";
import Image from "next/image";
import DocImageCarousel from "./DocImageCarousel";

export default function DocContent({
  content,
}: {
  content: DocContentBlock[];
}) {
  return (
    <div className="space-y-8">
      {content.map((block, index) => {
        switch (block.type) {
          case "heading":
            return (
              <h2
                key={index}
                className={`font-bold ${
                  block.level === 2
                    ? "text-2xl mt-12"
                    : block.level === 3
                      ? "text-xl mt-8"
                      : "text-lg mt-6"
                }`}
                id={block.id}
              >
                {block.content}
              </h2>
            );

          case "paragraph":
            return (
              <p key={index} className="text-gray-700 leading-relaxed">
                {block.content}
              </p>
            );
          case "carousel":
            return (
              <div key={index} className="my-6">
                <DocImageCarousel items={block.items} />
              </div>
            );

          case "image":
            return (
              <div key={index} className="my-6">
                <Image
                  src={block.src || "/placeholder.svg"}
                  alt={block.alt || "Documentation image"}
                  width={block.width || 800}
                  height={block.height || 450}
                  className="rounded-lg border"
                />
                {block.caption && (
                  <p className="text-sm text-gray-500 mt-2 text-center">
                    {block.caption}
                  </p>
                )}
              </div>
            );

          case "video":
            return (
              <div key={index} className="my-6">
                {!block.isMobile ? (
                  // Desktop video
                  <video
                    src={block.src}
                    controls
                    muted={false}
                    autoPlay={false}
                    playsInline
                    className="w-full h-full rounded-lg border hidden sm:block aspect-video"
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  // Mobile video
                  <video
                    src={block.src}
                    controls
                    muted={false}
                    autoPlay={false}
                    playsInline
                    className="w-full h-full rounded-lg border block sm:hidden aspect-[9/16]"
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            );

          case "list":
            return block.style === "ordered" ? (
              <ol
                key={index}
                className="list-decimal pl-6 space-y-2 text-gray-700"
              >
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ol>
            ) : (
              <ul
                key={index}
                className="list-disc pl-6 space-y-2 text-gray-700"
              >
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );

          case "code":
            return (
              <pre
                key={index}
                className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"
              >
                <code>{block.content}</code>
              </pre>
            );

          case "note":
            return (
              <div
                key={index}
                className={`p-4 rounded-lg border-l-4 ${
                  block.variant === "warning"
                    ? "bg-amber-50 border-amber-500"
                    : block.variant === "error"
                      ? "bg-red-50 border-red-500"
                      : "bg-blue-50 border-blue-500"
                }`}
              >
                <p className="text-sm">{block.content}</p>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}

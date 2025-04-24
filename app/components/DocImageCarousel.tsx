"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useDotButton } from "./EmblaDotButton";

type CarouselItem = {
  src: string;
  alt: string;
};

export default function DocImageCarousel({ items }: { items: CarouselItem[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
  });
console.log(items)
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {items.map((e, i) => (
          <div
            key={i}
            className="flex-[0_0_100%] px-2"
          >
            <div className="rounded-lg overflow-hidden border">
              <Image
                src={e.src}
                alt={e.alt}
                width={800}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="embla__dots gap-3 flex items-center justify-center mt-4">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`embla__dot ${
              index === selectedIndex ? "embla__dot--selected" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useDotButton } from "./EmblaDotButton";
import { useCallback, useEffect, useState } from "react";

// You can use your own icons or SVGs here
function LeftArrow({ onClick, disabled }: { onClick: () => void; disabled: boolean }) {
  return (
    <button
      className="flex embla__button embla__prev absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow-lg p-2"
      onClick={onClick}
      disabled={disabled}
      aria-label="Previous"
      type="button"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M15 18l-6-6 6-6" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}

function RightArrow({ onClick, disabled }: { onClick: () => void; disabled: boolean }) {
  return (
    <button
      className="flex embla__button embla__next absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow-lg p-2"
      onClick={onClick}
      disabled={disabled}
      aria-label="Next"
      type="button"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 6l6 6-6 6" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}

type CarouselItem = {
  src: string;
  alt: string;
};

export default function DocImageCarousel({ items }: { items: CarouselItem[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", slidesToScroll: 1, loop: true });
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    // Clean up listeners on unmount
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="relative embla ">
      {/* Arrow Buttons (web only, hidden on mobile) */}
      <LeftArrow onClick={scrollPrev} disabled={!canScrollPrev} />
      <RightArrow onClick={scrollNext} disabled={!canScrollNext} />

      <div className="overflow-hidden embla__viewport " ref={emblaRef}>
        <div className="flex">
          {items.map((e, i) => (
            <div key={i} className="flex-[0_0_100%] ">
              <div className="rounded-lg overflow-hidden border">
                <Image
                  src={e.src}
                  alt={e.alt}
                  width={800}
                  height={450}
                  className="w-screen h-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__dots gap-3 flex items-center justify-center mt-4">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`embla__dot ${index === selectedIndex ? "embla__dot--selected" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}

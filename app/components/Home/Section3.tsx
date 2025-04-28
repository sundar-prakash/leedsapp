"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

const testimonials = [
  {
    name: "Arjun Mehra",
    role: "Sales Manager",
    text: "LeedsApp is like having a reliable assistant who never forgets. Now, I never miss follow-ups, experience delayed payments, or forget important tasks. My business now operates seamlessly and efficiently, running like clockwork.",
    image: "/testimonial/testimonial-1.png",
  },
  {
    name: "Devika Nair",
    role: "Business Owner",
    text: "Ever since LeedsApp became my business assistant, everything happens exactly when it should. It's like having a perfect memory for every client interaction and payment due date.",
    image: "/testimonial/testimonial-2.png",
  },
  {
    name: "Sundar",
    role: "CTO",
    text: "Using LeedsApp has transformed how I manage my business. The intuitive interface and reliable reminders keep me ahead of all my tasks and payments.",
    image: "/testimonial/testimonial-3.png",
  },
];

export default function TestimonialSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-[#bda6c1] py-16 px-4 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-8 lg:mb-12 text-center">
          Here&apos;s what our
          <br />
          clients are saying
        </h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div className="flex-[0_0_100%] min-w-0" key={index}>
                  <div className="bg-white rounded-2xl p-10 mx-4 lg:mx-6">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                      <div className="relative w-48 h-48 shrink-0">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div className="space-y-6">
                        <Image
                          src="/icons/quote.svg"
                          alt="Quote"
                          width={40}
                          height={40}
                          className="opacity-75"
                        />
                        <p className="text-[#484848] text-xl lg:text-2xl">
                          {testimonial.text}
                        </p>
                        <div>
                          <p className="font-semibold text-black text-lg">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-black">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute top-1/2 -left-4 lg:-left-8 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:scale-105 transition-transform"
            disabled={!prevBtnEnabled}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="absolute top-1/2 -right-4 lg:-right-8 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:scale-105 transition-transform"
            disabled={!nextBtnEnabled}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

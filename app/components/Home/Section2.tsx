"use client";
import { useCallback } from "react";
import { Card, CardContent } from "../Card";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "../EmblaDotButton";

interface SimpleCarousel {
  name: string;
  text: string;
  image: string;
  bottomText: boolean;
}

const data: SimpleCarousel[] = [
  {
    name: "Lead Management",
    text: "Track, manage, and follow up with your business leads in one place",
    image: "PS",
    bottomText: false,
  },
  {
    name: "Task Management",
    text: "Organize your daily tasks and project deadlines to boost productivity",
    image: "Kolkata",
    bottomText: false,
  },
  {
    name: "Payment Tracking",
    text: "Monitor and track all your business payment statuses in one place",
    image: "RV",
    bottomText: false,
  },
];

export default function Section2() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 1024px)": { slidesToScroll: 3 },
      "(min-width: 768px)": { slidesToScroll: 2 },
      "(max-width: 767px)": { slidesToScroll: 1 },
    },
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  // Arrow button handlers
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative w-full p-5">
      <div className="py-16 md:px-6 rounded-xl">
        <div className="bg-[#FEF7FA] left-0 right-0 bottom-[28rem] md:bottom-[24rem] w-[94vw] mx-auto absolute h-[25rem] w-full rounded-2xl -z-10" />

        <h2 className="text-3xl font-bold text-center text-[#424242] lg:leading-[48px]">
          What does <span className="bg-[#ED2F59] text-white">LeedsApp</span> do?
        </h2>

        <div className="relative h-auto max-w-6xl mx-auto">
          {/* Mobile Arrow Buttons */}
          <div className="flex justify-between items-center absolute top-1/2 left-0 right-0 px-2 z-20 lg:hidden pointer-events-none">
            <button
              className="bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center pointer-events-auto"
              onClick={scrollPrev}
              aria-label="Previous"
              type="button"
            >
              {/* Left Arrow SVG */}
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>
            <button
              className="bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center pointer-events-auto"
              onClick={scrollNext}
              aria-label="Next"
              type="button"
            >
              {/* Right Arrow SVG */}
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {data.map((e, i) => (
                <div
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                  key={i}
                >
                  <div className="relative my-8 mx-3 pb-36">
                    <Card className="transition-opacity border-none h-[35rem] bg-[#FFE7EC]">
                      <CardContent
                        className={`relative flex items-center text-center text-[#323232] h-full ${
                          e.bottomText ? "flex-col-reverse" : "flex-col"
                        } p-6`}
                      >
                        <div className="flex items-center">
                          <div className="space-y-2">
                            <h3 className="font-semibold text-2xl">{e.name}</h3>
                            <h4 className="text-lg">{e.text}</h4>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <div className="absolute top-40 left-0 right-0 w-full overflow-visible">
                      <div className="w-[16rem] h-[33.5rem] mx-auto overflow-hidden rounded-[2.7rem] custom-shadow z-10">
                        <video
                          autoPlay={true}
                          loop={true}
                          muted={true}
                          className="w-full h-auto object-cover relative"
                          style={{ transform: "translateY(-0.2%)" }}
                          width="590"
                          height="1240"
                          controls={false}
                        >
                          <source src={`/features/v${i + 1}.mp4`} type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:hidden embla__dots gap-3 flex items-center justify-center">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={"embla__dot ".concat(
                    index === selectedIndex ? " embla__dot--selected" : ""
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

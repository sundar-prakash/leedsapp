"use client";
import { Card, CardContent } from "../Card";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

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
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 1024px)": { slidesToScroll: 3 },
      "(min-width: 768px)": { slidesToScroll: 2 },
      "(max-width: 767px)": { slidesToScroll: 1 },
    },
  });
  return (
    <section className="relative w-full p-5">
      <div className=" py-16 md:px-6  rounded-xl  ">
        <div className="bg-[#FEF7FA]  left-0 right-0 bottom-[28rem] md:bottom-[24rem] w-[94vw] mx-auto absolute h-[25rem] w-full rounded-2xl -z-10" />

        <h2 className="text-3xl font-bold text-center  text-[#424242] lg:leading-[48px] ">
          What does <span className="bg-[#ED2F59] text-white">LeedsApp</span>{" "}
          do?
        </h2>

        <div className="relative  max-w-6xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {data.map((e, i) => (
                <div
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                  key={i}
                >
                  <Card className="my-8 transition-opacity border-none h-[35rem] bg-[#FFE7EC] mx-3">
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
                      <Image
                        src={`/${e.name.toLowerCase().replace(/ /g, "-")}.png`}
                        width={500}
                        height={500}
                        alt={e.name}
                        className={`absolute ${
                          e.bottomText ? "top-0 rounded-b-[45px]" : "bottom-0 rounded-t-[45px]"
                        } left-0 right-0 w-[16rem] mx-auto lg:h-auto custom-shadow  object-contain`}
                      />
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { Card, CardContent } from "../Card";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

interface Testimonial {
  id: number;
  name: string;
  text: string;
  avatar?: string;
  initials: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Naveen Sekar",
    text: "User friendly and easy to understand, it helps me maintain all my client follow-ups in one place, reminds me on perfect time 🕰️. Will recommend sure who’s struggling with clients follow-ups",
    initials: "NS",
    location: "Delhi",
  },
  {
    id: 2,
    name: "Kalamani Somasundaram",
    text: "As an insurance agent, LeedsApp has transformed the way I manage my leads. It keeps me organized, reminds me of follow-ups at the perfect time, and ensures I never miss a client detail. This app has boosted my sales and improved my client relationships.",
    initials: "KS",
    location: "Banglore",
  },
  {
    id: 3,
    name: "Vasanth Brindha",
    text: "Much needed one app in current situations, i used many crm app, But this is one of my best choice to use, very user friendly and worthable for my clients followup and important call notifications.",
    initials: "VB",
    location: "Hyderabad",
  },
  {
    id: 4,
    name: "Prakash M",
    text: "Leedsapp makes my business better! It reminds me when to call my clients back and keeps all their info in one easy place. Now I never forget important calls!",
    initials: "PM",
    location: "Chennai",
  },
];

export default function TestimonialCarousel() {
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
    <section className="w-full p-5">
      <div className="py-16 md:px-6  rounded-xl bg-[#F4F5F5] ">
        <h2 className="text-3xl font-bold text-center  text-[#424242] lg:leading-[48px] ">
          Hear what our amazing
          <br />
          clients are saying
        </h2>

        <div className="relative  max-w-6xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <Card className="my-8 h-[17rem] transition-all hover:shadow-xl hover:scale-105 bg-white mx-3 duration-400">
                    <CardContent className="p-10 font-mono space-y-4">
                      <div className="flex  items-center space-x-4">
                        {testimonial.avatar ? (
                          <Image
                            width={40}
                            height={40}
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="rounded-full"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-[#d9d9d9] text-black flex items-center justify-center">
                            {testimonial.initials}
                          </div>
                        )}
                        <div>
                          <h3 className="font-semibold">{testimonial.name}</h3>
                          <h4 className="text-sm font-light">
                            {testimonial.location}
                          </h4>
                        </div>
                      </div>
                      <p className="font-normal text-muted-foreground  text-sm leading-relaxed">
                        {testimonial.text}
                      </p>
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

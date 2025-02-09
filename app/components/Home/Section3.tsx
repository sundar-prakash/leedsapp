"use client"
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ServiceCategory {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const categories: ServiceCategory[] = [
  {
    title: "Real Estate",
    description:
      "Track client viewings and manage property follow-ups efficiently",
    icon: (
      <Image
        alt="close"
        width={30}
        src="/icons/Icon-Real-Estate.svg"
        height={30}
        className="w-16 h-16 text-primary"
      />
    ),
  },
  {
    title: "Education",
    description: "Track student inquiries and manage course payment schedules",
    icon: (
      <Image
        alt="close"
        width={30}
        src="/icons/Icon-Education.svg"
        height={30}
        className="w-16 h-16 text-primary"
      />
    ),
  },
  {
    title: "Financial Ventures",
    description: "Monitor client interactions and payment schedules seamlessly",
    icon: (
      <Image
        alt="close"
        width={30}
        src="/icons/Icon-fv.svg"
        height={30}
        className="w-16 h-16 text-primary"
      />
    ),
  },
  {
    title: "Retail & Local Businesses",
    description: "Manage customer follow-ups and track business payments",
    icon: (
      <Image
        alt="close"
        width={30}
        src="/icons/Icon-Retail-&-Local-Businesses.svg"
        height={30}
        className="w-16 h-16 text-primary"
      />
    ),
  },
  {
    title: "Professional Services",
    description: "Organize client projects and track deliverable deadlines",
    icon: (
      <Image
        alt="close"
        width={30}
        src="/icons/Icon-Professional-Services.svg"
        height={30}
        className="w-16 h-16 text-primary"
      />
    ),
  },
  {
    title: "Others",
    description:
      "Track client viewings and manage property follow-ups efficiently",
    icon: (
      <Image
        alt="close"
        width={30}
        src="/icons/Frame.svg"
        height={30}
        className="w-16 h-16 text-primary"
      />
    ),
  },
];

export default function PerfectFor() {
  const ref = useRef(null)
const isInView = useInView(ref,{once:true});
  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-4 md:px-6">
      <div className="space-y-4 mb-10 text-[#424242]">
        <h2 className="text-2xl font-semibold text-muted-foreground">
          Simple and Reliable Solution
        </h2>
        <h3 className="text-4xl font-bold">Perfect for</h3>
      </div>
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 text-[#323232]">
        {categories.map((category,index) => (
           <motion.div
           key={category.title}
           className="flex items-start space-x-4 p-4 rounded-lg transition-colors hover:bg-muted/50"
           initial={{ opacity: 0, y: 50 }}
           animate={isInView?{ opacity: 1, y: 0 }:{}}
           transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
         >
           <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10">
             {category.icon}
           </div>
           <div className="space-y-2">
             <h4 className="text-xl font-semibold">{category.title}</h4>
             <p className="text-muted-foreground">{category.description}</p>
           </div>
         </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";
import React from "react";
import PrimaryButton from "../Buttons";
import { BackgroundGradientAnimation } from "../background-gradient-animation";
import { motion } from "framer-motion";

const Section1 = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center  text-center space-y-6   py-10 "
    >
      {/* //need to work on this */}
      <BackgroundGradientAnimation />
      <h1 className=" text-[#484848] text-4xl lg:text-6xl font-semibold lg:leading-[70px]">
      Your All-in-One Client & <br/> Business Management Solution 
      </h1>
      <p className="text-xl px-4 !my-6">
      Manage leads, organize tasks & track payments in one mobile app

      </p>
      <div className="space-y-2">
        <PrimaryButton className="text-2xl px-9 py-3">
          Download Now
        </PrimaryButton>
        <p className="text-sm pt-4">Avail a 7 day free trial</p>
      </div>

      <div className="max-w-2xl !mt-[-4rem] mx-auto relative flex justify-center">
        <motion.img
          src="/hero/LeedsApp-HomeScreen.png"
          alt="LeedsApp calendar interface on mobile"
          className="w-full lg:w-[45vw] lg:h-auto object-contain"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.img
          alt="t1"
          src="/hero/t1.png"
          className="w-[12rem] md:w-[15rem] lg:w-[20rem] h-auto absolute top-[19rem] -left-[0.5rem]  lg:top-[28rem] lg:-left-[10rem]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        />
        <motion.img
          alt="t2"
          src="/hero/t2.png"
          className="w-[12rem] md:w-[15rem] lg:w-[20rem] h-auto absolute top-[10rem] left-[11rem] md:left-[25rem]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        />
        <motion.img
          alt="t3"
          width={1000}
          src="/hero/t3.png"
          height={1000}
          className="w-[12rem] md:w-[15rem] lg:w-[20rem] h-auto absolute top-[25rem] left-[11rem] lg:top-[40rem] md:left-[25rem]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
        />
      </div>
    </section>
  );
};

export default Section1;

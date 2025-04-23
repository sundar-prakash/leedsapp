"use client"
import React, { useState } from "react";
import PrimaryButton from "../Buttons";

const Section6 = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const handleToggleChange = () => {
        setIsChecked(!isChecked);
      };
  return (  
    <section id="pricing" className="flex text-[#424242] flex-col py-10 lg:py-20 items-center justify-start gap-12 ">
      <h3 className="text-2xl lg:text-4xl font-semibold">
        Simple & Flexible Pricing
      </h3>
      <div className="flex flex-col items-center shadow-xl shadow-[#ED2F5926] w-[80%] lg:w-[50rem] rounded-2xl px-10 py-5 gap-2">
       
        <div className="flex items-center justify-center w-full mb-12">
        <label className="px-6 flex w-full justify-center items-center cursor-pointer gap-2 md:gap-6 py-6 rounded-xl bg-[#ED2F5926]">
          <span className="text-base font-semibold text-[#424242] ">
            Weekly
          </span>
        {/* Toggle */}
        <div className="relative">
          {/* Input */}
          <input
            type="checkbox"
            id="toggleB"
            className="sr-only"
            checked={isChecked}
            onChange={handleToggleChange}
          />
          {/* Line */}
          <div className="block bg-white border border-[#ED2F59] w-16 h-8 rounded-full"></div>
          {/* Dot */}
          <div
            className={`dot absolute left-[-1px] top-[-2px] bg-[#ED2F59] w-9 h-9 rounded-full transition ${
              isChecked ? "translate-x-8" : ""
            }`}
          ></div>
        </div>
        {/* Label */}
        <span className=" text-base font-semibold text-[#424242]">
            Yearly
          </span>
      </label>
    </div>
    {/*  */}
        <p className="text-xs text-[#424242] font-semibold">
          save 80% with yearly billing
        </p>
        <h3 className="flex text-6xl text-[#424242] font-semibold">₹{isChecked?"999":"99"}</h3>
        <p className="text-base text-[#424242] font-semibold">{isChecked?"per year":"per week"}</p>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <PrimaryButton className="text-2xl py-4 px-5">Claim Free Trial</PrimaryButton>
        <p className="text-xs text-[#686868]">
          7 days free trial, No credit card required
        </p>
      </div>
    </section>
  );
};

export default Section6;

import React from "react";
import PrimaryButton from "../Buttons";

const Section8 = () => {
  return (
    <section className="flex flex-col items-center min-h-[20vh] gap-6 py-20 px-3 text-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#fff] via-[#fae1ef] to-[#fbcfd9]">
      <h3 className="font-semibold text-3xl md:text-5xl">
        Take things off your mind
      </h3>
      <p className="text-base">
        Top businessmen rely on systems, <br />
        not memory
      </p>
      <PrimaryButton className="text-2xl py-4 px-5">Try LeedsApp</PrimaryButton>
    </section>
  );
};

export default Section8;

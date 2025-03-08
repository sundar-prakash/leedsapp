"use client";

export const BackgroundGradientAnimation = () => {
  return (
    <div
      className="p-[60px] absolute -z-10 rounded-xl overflow-hidden
          h-[45rem] lg:h-[55rem] w-full lg:w-[96vw] 
          bg-gradient-to-b  flex items-end justify-end from-transparent to-[#facdda]"
    >
      <div className=" w-full flex border border-red-900 blur-3xl h-1/2 ">
        <div className="shape1 bg-[#ED2F5945] w-[25vw] aspect-square rotate-45" />
        <div className="shape2 bg-[#C22FED45] w-[25vw] aspect-square rotate-45" />
        <div className="shape3 bg-[#ED452F45] w-[25vw] aspect-square" />
        <div className="shape4 bg-[#ED2FCA45] w-[25vw] aspect-square rotate-45" />
      </div>
    </div>
  );
};

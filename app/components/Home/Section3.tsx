import Image from "next/image";

export default function TestimonialSection() {
  return (
    <section className="bg-[#bda6c1] py-16 px-4 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-8 lg:mb-12">
          Here&apos;s what our
          <br />
          clients are saying
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-8 gap-4 lg:gap-6">
          {/* Profile and Main Quote */}
          <Image
            width={200}
            height={200}
            src="/testimonial/testimonial-1.png"
            alt="Stephen Strange"
            className="w-36  hidden lg:block col-span-1 rounded-xl object-cover aspect-sqaure"
          />
          <div className="lg:col-span-5 flex gap-4 bg-white rounded-2xl p-10">
            <div className="lg:pr-24 w-full">
              <Image width={200}
                  height={200}
                  src="/icons/quote.svg"
                  alt="Quote" 
                  className="h-10 w-10 my-4"
                  />
              <p className="text-gray-800 mb-4 text-[#484848] text-2xl ">
                LeedsApp is like having a reliable assistant who never forgets.
                Now, I never miss follow-ups, experience delayed payments, or
                forget important tasks. My business now operates seamlessly and
                efficiently, running like clockwork.
              </p>
              <div className="flex items-center gap-6">
                <Image
                  width={200}
                  height={200}
                  src="/testimonial/testimonial-1.png"
                  alt="Stephen Strange"
                  className="w-16 h-16 rounded-full lg:hidden object-cover"
                />
                <div>
                  <p className="font-semibold  text-black">Stephen Strange</p>
                  <p className="text-sm text-black">Sales Manager</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="space-y-4 lg:col-span-2 relative  text-[#484848] text-2xl ">
            <div className="bg-white rounded-2xl p-10  ">
              <p >100%</p>
              <p >on-time client follow-ups</p>
            </div>
            <div className=" bg-white rounded-2xl p-10 ">
              <p >Predictable</p>
              <p >payment cycles</p>
            </div>
          </div>

          <div className="lg:col-span-7 w-full bg-white rounded-2xl p-10">
            <p className="text-[#484848] text-xl mb-4">
              Ever since LeedsApp became my business assistant, everything
              happens exactly when it should. It&apos;s like having a perfect memory
              for every client interaction and payment due date.
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold  text-black">Natalya Romanova</p>
                <p className="text-sm text-black">Business Owner</p>
              </div>
              <Image
                width={200}
                height={200}
                src="/testimonial/testimonial-2.png"
                alt="Natalya Romanova"
                className="w-16 h-16 rounded-full lg:hidden object-cover"
              />
            </div>
          </div>
          <Image
            width={200}
            height={200}
            src="/testimonial/testimonial-2.png"
            alt="Stephen Strange"
            className="aspect-sqaure w-36 hidden lg:block lg:col-span-1 rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}

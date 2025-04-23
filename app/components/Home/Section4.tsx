import Image from "next/image";

interface PainPointCardProps {
  title: string;
  imageSrc: string;
  altText: string;
  message: string;
}

const PainPointCard: React.FC<PainPointCardProps> = ({ title, imageSrc, altText, message }) => {
  return (
    <div className="relative ">
      <div className="bg-[#ed2f59]  fonr-semibold rounded-t-xl text-white py-3 px-4 ">{title}</div>
      <div className="relative bg-[#F5F5F5] rounded-b-xl  h-[25rem] rounded-b-lg overflow-hidden">
        <Image width={500} height={500} src={imageSrc} alt={altText} className="w-full h-full object-cover" />
        <div className="absolute box arrow-top bottom-4 left-16 border border-black bg-white rounded-lg p-3 shadow-lg max-w-[15rem]">
          <p className="text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default function PainPoints() {
  const painPoints = [
    {
      title: "Missing calls?",
      imageSrc: "/painpoint/pp1.jpg",
      altText: "Person missing calls",
      message: "Shoot! I totally forgot to call back that interested client!",
    },
    {
      title: "Chasing payments?",
      imageSrc: "/painpoint/pp2.jpg",
      altText: "Person chasing payments",
      message: "I should've called about that payment... was it yesterday?",
    },
    {
      title: "Unorganised tasks?",
      imageSrc: "/painpoint/pp3.jpg",
      altText: "Person with unorganized tasks",
      message: "Everything feels urgent... what should I do first?",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-5xl font-semibold text-[#484848] mb-8 md:mb-12">
        Hey, Does this sound
        <br className="hidden md:block" /> like your day?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {painPoints.map((painPoint, index) => (
          <PainPointCard key={index} {...painPoint} />
        ))}
      </div>

      <div className="text-center space-y-6">
        <p className="text-xl md:text-2xl text-gray-800 font-medium">
          Your business is too important for &quot;I&apos;ll remember it somehow.&quot;
        </p>

        <div className="inline-block bg-[#ffe7ec] rounded-lg p-4 text-[#484848] rounded-xl max-w-2xl mx-auto">
          <div className="flex items-center gap-6">
             <Image height={200} width={200} alt="blub" src="/icons/Bulb.svg" className="h-12 w-12" />
            <p className="text-sm md:text-base text-start">
              Let <span className="font-semibold">LeedsApp</span> be your memory buddy - because you&apos;ve got<br /> better
              things to do than worry about forgetting stuff!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

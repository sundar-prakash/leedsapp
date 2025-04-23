import Image from "next/image";

interface ComparisonItem {
  without: string;
  with: string;
}

const comparisonItems: ComparisonItem[] = [
  {
    with: "Never miss follow-ups with smart reminders",
    without: "Scattered reminders and missed opportunities",
  },
  {
    with: "Track all payment dues in one place",
    without: "Confused about payment status",
  },
  {
    with: "Organize tasks by priority",
    without: "Overwhelming to-do lists",
  },
  {
    with: "Import/Export data easily",
    without: "Manual data entry",
  },
  {
    with: "Cloud backup for peace of mind",
    without: "Risk of losing important information",
  },
  {
    with: "Collaborate seamlessly with your team",
    without: "No clear task delegation",
  },
  {
    with: "Integrate with ad platforms like Meta, Google",
    without: "Increased cognitive load by reduced creativity",
  },
];

export default function ComparisonTable() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 ">
      <h2 className="text-2xl md:text-3xl font-bold text-[#333333] mb-12">
        Why LeedsApp?
      </h2>

      <div className="relative  bg-white py-8 rounded-xl overflow-x-auto">
        <div className="grid grid-cols-2 gap-72 md:gap-0">
          {/* Left column */}
          {/* <div>
            <div className="p-4 mt-12 min-w-[150px] border-b border-gray-100" />
            {comparisonItems.map((item, index) => (
              <div
                key={item.without}
                className={`p-4 ${index !== comparisonItems.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                <h3 className="font-medium text-sm md:text-base text-gray-900">{item.without}</h3>
              
              </div>
            ))}
          </div> */}

          {/* Middle column (with LeedsApp) */}
          <div className="relative min-w-[300px] ml-4 z-10 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl">
            <div className="p-4 text-center border-b border-gray-300">
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-medium">with</span>
                <Image
                  src="/other/header.png"
                  alt="LeedsApp"
                  className="h-auto w-44"
                  width={200}
                  height={100}
                />
              </div>
            </div>
            {comparisonItems.map((item, index) => (
              <div
                key={index}
                className={`p-4 flex items-center justify-start gap-3 ${index !== comparisonItems.length - 1 ? "border-b border-gray-300" : ""}`}
              >
                <Image
                  src="/icons/tick.svg"
                  alt="tick"
                  width={30}
                  height={30}
                />
                <p className="text-xs md:text-sm text-gray-500 mt-0.5">
                  {item.with}
                </p>
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="min-w-[300px]">
            <div className="p-4 text-center border-b border-gray-300">
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-medium text-gray-600">
                  without
                </span>
                <Image
                  src="/other/header.png"
                  alt="LeedsApp"
                  className="h-auto w-44"
                  width={200}
                  height={100}
                />
              </div>
            </div>
            {comparisonItems.map((item, index) => (
              <div
                key={index}
                className={`p-4 flex items-center justify-start gap-3 ${index !== comparisonItems.length - 1 ? "border-b border-gray-300" : ""}`}
              >
                <Image
                  src="/icons/close.svg"
                  alt="close"
                  width={22.2}
                  height={22}
                />
                <p className="text-xs md:text-sm text-gray-500 mt-0.5">
                  {item.without}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

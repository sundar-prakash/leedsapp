import Image from "next/image";


interface ComparisonItem {
  feature: string
  description: string
}

const comparisonItems: ComparisonItem[] = [
  {
    feature: "Lead Organization",
    description: "Easily manage and track leads with intuitive tools",
  },
  {
    feature: "Follow-Up Management",
    description: "Automated reminders and systematic follow-up tracking",
  },
  {
    feature: "Task Management",
    description: "Structured workflow with clear priorities",
  },
  {
    feature: "Payment Tracking",
    description: "Real-time payment status monitoring",
  },
  {
    feature: "Data Management",
    description: "Cloud backup and easy restoration",
  },
  {
    feature: "Lead Prioritization",
    description: "Smart categorization and priority management",
  },
  {
    feature: "Data Import/Export",
    description: "Quick Excel import and export capabilities",
  },
  {
    feature: "Integration",
    description: "Seamless integration with online forms and ads",
  },
]

export default function ComparisonTable() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 ">
      <h2 className="text-2xl md:text-3xl font-bold text-[#333333] mb-12">Why LeedsApp?</h2>

      <div className="relative  bg-white py-8 rounded-xl overflow-x-auto">
        <div className="grid grid-cols-[1fr,auto,1fr]">
          {/* Left column */}
          <div>
            <div className="p-4 mt-12 min-w-[150px] border-b border-gray-100" />
            {comparisonItems.map((item, index) => (
              <div
                key={item.feature}
                className={`p-4 ${index !== comparisonItems.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                <h3 className="font-medium text-sm md:text-base text-gray-900">{item.feature}</h3>
              
              </div>
            ))}
          </div>

          {/* Middle column (with LeedsApp) */}
          <div className="relative min-w-[250px] z-10 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl">
            <div className="p-4 text-center border-b border-gray-100">
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-medium">with</span>
                <Image
                  src="/header.png"
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
                className={`p-4 flex items-center justify-start gap-3 ${index !== comparisonItems.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                 <Image
                src="/icons/tick.svg"
                alt="tick"
                width={30}
                height={30}
              />
                <p className="text-xs md:text-sm text-gray-500 mt-0.5">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Right column */}
          <div>
            <div className="p-4 mt-6 text-center border-b border-gray-100">
              <span className="text-sm font-medium text-gray-600">without</span>
            </div>
            {comparisonItems.map((_, index) => (
              <div
                key={index}
                className={`p-4 flex items-center justify-center ${index !== comparisonItems.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                 <Image
                src="/icons/close.svg"
                alt="close"
                width={23}
                height={23}
              />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


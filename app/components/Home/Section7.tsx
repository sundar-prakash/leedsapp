import React from "react";
import FAQ from "../FAQ";
import PrimaryButton from "../Buttons";

const Section7 = () => {
  const faqData = [
    {
      question: "How does LeedsApp work?",
      answer:
        "LeedsApp provides tools to organize leads, automate follow-ups, and customize workflows. It helps businesses stay on top of their leads, nurture relationships, and optimize their sales process.",
    },
    {
      question: "How does LeedsApp Pricing work?",
      answer:
        "LeedsApp offers both monthly and yearly billing options. The yearly plan come with a 58% discount.",
    },
    {
      question: "Is my lead data secure with LeedsApp?",
      answer:
        "Yes, LeedsApp employs industry-standard security measures to protect your lead data",
    },
    {
      question: "Can I try LeedsApp before committing to a plan?",
      answer:
        "Yes, LeedsApp offers a 7 day trial period for you to explore its features before making a decision.",
    },
  ];
  return (
    <section id="faqs" className="p-5 ">
      <div className="bg-[#F4F5F5] max-w-6xl mx-auto px-6 lg:px-16 lg:py-24 py-12  rounded-xl shadow gap-12 flex flex-col md:flex-row items-start justify-center">
        <div className="lg:w-6/12 flex flex-col  gap-6">
          <h3 className="text-[#424242] font-bold text-2xl md:text-4xl">
            Have any questions? Here are some answers for you
          </h3>
          <p className="text-sm">
            If you have any question that&#39s not answered here, feel free to
            contact us using the button below.
          </p>
          <PrimaryButton href="/faq" className="w-36 py-3 bg-[#ed3059] rounded-none">
          See All FAQs
          </PrimaryButton>
          <PrimaryButton href="mailto:support@leedsapp.com" className="w-44 py-3 bg-[#424242] rounded-none">
          Ask Any Question
          </PrimaryButton>
        </div>
        <div className="flex  flex-col lg:w-6/12 ">
          {faqData.map((e, i) => (
            <FAQ key={i} question={e.question} answer={e.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section7;

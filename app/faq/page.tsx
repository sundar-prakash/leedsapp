import { Metadata } from 'next';
import FAQ from '../components/FAQ';
import faqdata from '@/public/faq.json'; // ✅ Make sure it's in src/data or similar

interface FAQItem {
  question: string;
  answer: string | string[];
}
export const metadata:Metadata = {title:"Faqs"}
const FAQPage = () => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Frequently Asked Questions</h1>

      {/* Loop through each category */}
      {Object.entries(faqdata).map(([category, faqs]) => (
        <div key={category} className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-[#ed3059]">{category}</h2>

          {/* Render all questions in the category */}
          {(faqs as FAQItem[]).map((faq, index) => (
            <FAQ
              key={`${category}-${index}`}
              question={faq.question}
              answer={Array.isArray(faq.answer) ? faq.answer.join('\n') : faq.answer}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default FAQPage;

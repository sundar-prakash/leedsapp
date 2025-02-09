"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
interface FAQProps {
    question: string;
    answer: string;
  }
  
  const FAQ: React.FC<FAQProps> = ({ question, answer }) => {
    const [open, setIsOpen] = useState<boolean>(false);
  
    const toggleAnswer = () => {
      setIsOpen(!open);
    };
  
    return (
      <div className="w-full my-1 faq-item bg-white p-6 border-b">
      <div className="question cursor-pointer" onClick={toggleAnswer}>
        <h3 className="text-md font-semibold">{question}</h3>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="answer mt-2 text-gray-600 overflow-hidden"
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    );
  };
export default FAQ  
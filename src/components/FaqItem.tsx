"use client";

import { useState } from "react";

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border border-[#333] rounded-lg overflow-hidden">
      <button
        className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between text-left bg-[#000]/20"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-white text-base sm:text-lg pr-4">{question}</span>
        <svg
          className={`w-5 h-5 sm:w-6 sm:h-6 transform transition-transform flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="#333"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-4 sm:px-6 py-3 sm:py-4 text-[#B7CBC1] text-sm sm:text-base">{answer}</p>
      </div>
    </div>
  );
}

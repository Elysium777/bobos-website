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
        className="w-full px-6 py-4 flex items-center justify-between text-left bg-[#000]/20"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-white text-lg">{question}</span>
        <svg
          className={`w-6 h-6 transform transition-transform ${isOpen ? "rotate-180" : ""
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
        className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <p className="px-6 py-4 text-[#B7CBC1]">{answer}</p>
      </div>
    </div>
  );
}

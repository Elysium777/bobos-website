/* eslint-disable @next/next/no-img-element */
import FaqItem from "./FaqItem";

const faqItems = [
  {
    question: "What is BobOS?",
    answer: "BobOS is an advanced AI agent operating system that helps users interact with blockchain and web3 services seamlessly. It provides a user-friendly interface for complex blockchain operations."
  },
  {
    question: "What can Bob do for me?",
    answer: "Bob can assist you with various blockchain operations, from simple transactions to complex DeFi interactions. It can help you manage assets, interact with smart contracts, and navigate the web3 ecosystem without requiring deep technical knowledge."
  },
  {
    question: "How secure is BobOS?",
    answer: "BobOS is built with security as a top priority. It uses TEE (Trusted Execution Environment) technology to protect your data, ensuring that your information and transactions remain private and secure."
  },
  {
    question: "Can I develop my own agent for BobOS?",
    answer: "Yes! BobOS has an open agent marketplace where developers can create and publish their own agents without permission. These agents can interact directly with the blockchain in specific domains."
  }
];

export default function FaqSection() {
  return (
    <section
      id="section3"
      className="min-h-screen flex flex-col items-center justify-center relative bg-[url('/bg/section3.png')] bg-contain bg-no-repeat bg-bottom overflow-hidden px-4 py-12 md:py-0"
    >
      <img 
        src="/bg/blur3.png" 
        className="absolute w-full md:w-[800px] h-screen overflow-hidden left-0 bottom-0 opacity-50 md:opacity-100" 
        alt="" 
      />
      <h2 className="text-white text-2xl sm:text-3xl text-center mb-8 md:mb-0">Frequently Asked Questions</h2>
      <div className="mt-4 md:mt-[115px] w-full max-w-[960px] space-y-3 sm:space-y-4 px-0 sm:px-10 z-10">
        {faqItems.map((item, index) => (
          <FaqItem
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <div className="mx-4 sm:mx-10 border-t border-[#333]">
          <div className="max-w-[960px] px-4 sm:pl-[40px] py-4 sm:py-6">
            <h3 className="text-[#14F46F] text-sm">BobOS</h3>
            <p className="text-[#B7CBC1] mt-2 text-xs max-w-[280px] sm:max-w-none">
              Delegate your intent to Bob, and receive best return.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

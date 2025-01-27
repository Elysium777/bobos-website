"use client";

import { useState } from "react";
import WaitlistDialog from "./WaitlistDialog";

export default function Hero() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section
      id="hero"
      className="h-screen relative bg-[url('/bg/section1.png')] bg-cover bg-center overflow-hidden"
    >
      <img src="/bg/blur1.png" className="absolute w-[50%] max-w-[784px] left-0 top-[100px] md:w-[784px]" alt="" />
      <img src="/bg/blur2.png" className="absolute w-[50%] max-w-[784px] right-0 top-0 md:w-[784px]" alt="" />
      <img src="/bg/circle.png" className="absolute w-[60%] max-w-[780px] -right-[10%] bottom-[10%] sm:bottom-[150px] sm:right-0 md:w-[780px]" alt="" />

      <div className="px-4 sm:px-0 w-full sm:w-fit bg-[url('/bg/vector.png')] bg-[length:100px_100px] sm:bg-[length:140px_140px] bg-no-repeat bg-left-top pt-6 sm:pt-8 pl-4 sm:pl-6 relative top-[120px] sm:top-[180px] left-0 sm:left-[10%] md:left-[100px] lg:left-[248px] ml-4 sm:ml-0 z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight sm:leading-[5rem] max-w-[90%] sm:max-w-none">
          Onboarding the next billion<br />
          <span className="">
            <del className="text-2xl sm:text-3xl md:text-4xl text-[#B3B3B3]">USERS</del>
            <span>&nbsp;</span>
            <span className="text-[#00FF85] text-4xl sm:text-5xl md:text-6xl">AGENTS.</span>
          </span>
        </h1>
        <button
          onClick={() => setIsDialogOpen(true)}
          className="text-[#14F46F] border border-[#14F46F] px-4 sm:px-6 py-2 sm:py-3 rounded-md font-semibold text-lg sm:text-xl mt-4 hover:bg-[#14F46F]/10 transition-colors"
        >
          Join Waitlist
        </button>
      </div>
      <WaitlistDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </section>
  )
}

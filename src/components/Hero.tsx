"use client";

import { useState } from "react";
import WaitlistDialog from "./WaitlistDialog";

export default function Hero() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section
      id="hero"
      className="h-screen relative bg-[url('/bg/section1.png')] bg-cover bg-center"
    >
      <img src="/bg/blur1.png" className="absolute w-[784px] left-0 top-[100px]" alt="" />
      <img src="/bg/blur2.png" className="absolute w-[784px] right-0 top-0" alt="" />
      <img src="/bg/circle.png" className="absolute w-[780px] bottom-[150px] right-0" alt="" />
      <div className="bg-[url('/bg/vector.png')] w-fit bg-[length:140px_140px] bg-no-repeat bg-left-top pt-8 pl-6 relative top-[180px] left-[248px]">
        <h1 className="text-5xl font-bold mb-6 leading-[5rem]">
          Onboarding the next billion<br />
          <span className="">
            <del className="text-4xl text-[#B3B3B3]">USERS</del>
            <span>&nbsp;</span>
            <span className="text-[#00FF85] text-6xl">AGENTS.</span>
          </span>
        </h1>
        <button
          onClick={() => setIsDialogOpen(true)}
          className=" text-[#14F46F]  border border-[#14F46F] px-6 py-3 rounded-md font-semibold text-xl mt-4 hover:bg-[#14F46F]/10 transition-colors"
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

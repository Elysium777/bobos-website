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
        <h1 className="text-6xl font-bold mb-6">
          Onboarding the next billion<br />
          <span className="mt-6">
            <del className="text-4xl">USERS</del>
            <span>&nbsp;</span>
            <span className="text-[#00FF85]">AGENTS.</span>
          </span>
        </h1>
        <button
          onClick={() => setIsDialogOpen(true)}
          className=" text-[#14F46F]  border border-[#14F46F] px-4 py-2 rounded-md font-semibold text-xl mt-4 hover:bg-[#14F46F]/10 transition-colors"
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

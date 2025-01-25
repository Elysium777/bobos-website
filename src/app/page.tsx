/* eslint-disable @next/next/no-img-element */
"use client";

import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import TechStackSection from "@/components/TechStackSection";
import FaqSection from "@/components/FaqSection";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <IntroSection />
      <TechStackSection />
      <FaqSection />
      {/* <Scene /> */}
    </main>
  );
}

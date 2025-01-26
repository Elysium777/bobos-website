/* eslint-disable @next/next/no-img-element */
"use client";

import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import TechStackSection from "@/components/TechStackSection";
import FaqSection from "@/components/FaqSection";
import { Scene } from "@/components";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <IntroSection />
      <Scene />
      <TechStackSection />
      <FaqSection />
    </main>
  );
}

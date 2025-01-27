"use client";

import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { MacBook } from "./MacBook";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ContactShadows, OrbitControls } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger);

export function Scene() {
  return (
    <div className="fixed inset-0 -translate-x-10 hidden md:block">
      <Canvas camera={{ position: [0, 0, 0.2] }}>
        <ambientLight intensity={0.5} />
        <directionalLight
          intensity={2}
          position={[3, 3, 3]}
          castShadow
        />
        <directionalLight
          intensity={2}
          position={[-3, -3, -3]}
        />
        <MacBook />
        {/* <axesHelper scale={2} /> */}
        {/* <ContactShadows opacity={0.3} position={[0, -0.9, 0]} /> */}
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
}

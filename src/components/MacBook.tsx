import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function MacBook() {
  const gltf = useGLTF("/assets/Phone.glb");
  console.log('Model structure:', gltf);

  const groupRef = useRef<THREE.Group>(null);
  const phoneRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (!groupRef.current || !phoneRef.current) return;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section1",
          start: "top bottom",
          scrub: true,
          end: "top top",
        },
      })
      .to(groupRef.current.rotation, {
        x: 0,
        y: Math.PI * 0.01,
        ease: "power2.inOut",
      })
      .to(
        groupRef.current.position,
        {
          x: 0.1,
          ease: "power2.inOut",
        },
        "<"
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section2",
          start: "top bottom",
          scrub: true,
          end: "top top",
        },
      })
      .to(groupRef.current.rotation, {
        y: -Math.PI * 0.01,
        ease: "power2.inOut",
      })
      .to(
        groupRef.current.position,
        {
          x: -0.1,
          ease: "power2.inOut",
        },
        "<"
      );
  });

  return (
    <group
      ref={groupRef}
      position={[0, -0.07, 0]}
      rotation={[0, 0, 0]}
      scale={1}
    >
      <mesh ref={phoneRef}>
        <primitive object={gltf.scene} />
      </mesh>
    </group>
  );
}

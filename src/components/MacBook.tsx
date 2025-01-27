import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function MacBook() {
  const gltf = useGLTF("/assets/Phone.glb");
  console.log('Model structure:', gltf);

  const groupRef = useRef<THREE.Group>(null!);
  const phoneRef = useRef<THREE.Mesh>(null!);

  useEffect(() => {
    if (!groupRef.current || !phoneRef.current) return;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section1",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      })
      .to(groupRef.current.rotation, {
        x: 0,
        y: 0,
        z: 0,
        ease: "power2.inOut",
      })
      .to(
        groupRef.current.position,
        {
          x: -0.0,
          y: -0.1,
          z: 0.04,
          ease: "power2.inOut",
        },
        "<"
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section1",
          start: "bottom bottom",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(groupRef.current.position, {
        y: 0.4,
        ease: "power2.inOut",
      });
  });

  return (
    <group
      ref={groupRef}
      position={[0, -0.3, 0]}
      rotation={[-1.57, 0, 0]}
      scale={1}
    >
      <mesh ref={phoneRef}>
        <primitive object={gltf.scene} />
      </mesh>
    </group>
  );
}

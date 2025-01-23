'use'
import { useRef, useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function iPhone() {
  const { nodes } = useGLTF(
    "/assets/iphone.glb"
  ) as any;
  
  const groupRef = useRef<THREE.Group>(null);
  const modelRef = useRef<THREE.Mesh>(null);

  const { camera } = useThree();

  useLayoutEffect(() => {
    if (!groupRef.current) return;

    camera.position.set(0, 0, 5);

    let ctx = gsap.context(() => {
      // Initial animation
      gsap.from(groupRef.current!.rotation, {
        y: Math.PI,
        duration: 2,
        ease: "power3.inOut",
      });

      // Scroll-based animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      tl.to(groupRef.current!.rotation, {
        y: Math.PI * 2,
        x: 0.5,
      });

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#section1",
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
      });

      tl2
        .to(groupRef.current!.position, {
          x: -2,
        })
        .to(
          groupRef.current!.rotation,
          {
            y: Math.PI * 1.5,
          },
          "<"
        );

      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: "#section2",
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
      });

      tl3
        .to(groupRef.current!.position, {
          x: 2,
        })
        .to(
          groupRef.current!.rotation,
          {
            y: Math.PI * 0.5,
          },
          "<"
        );
    });

    return () => ctx.revert();
  }, [camera]);

  return (
    <group
      ref={groupRef}
      dispose={null}
      position={[0, -1, 0]}
      scale={1.3}
    >
      <mesh ref={modelRef}>
        <primitive object={nodes.iPhone} />
      </mesh>
    </group>
  );
}

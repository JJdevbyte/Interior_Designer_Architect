"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Slabs() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.cos(t / 4) / 8;
      meshRef.current.rotation.y = Math.sin(t / 4) / 8;
      meshRef.current.rotation.z = Math.sin(t / 4) / 20;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Abstract Concrete Slabs */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[-1, 0, 0]} rotation={[0, 0.5, 0]}>
          <boxGeometry args={[2, 4, 0.2]} />
          <MeshDistortMaterial
            color="#E2E2E7"
            roughness={0.1}
            metalness={0.05}
            distort={0.2}
            speed={2}
          />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1}>
        <mesh position={[1.5, 0.5, -1]} rotation={[0.2, -0.4, 0.1]}>
          <boxGeometry args={[3, 2.5, 0.15]} />
          <MeshDistortMaterial
            color="#F5F5F7"
            roughness={0.2}
            metalness={0.1}
            distort={0.1}
            speed={1.5}
          />
        </mesh>
      </Float>
      
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#ffffff" castShadow />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#E2E2E7" />
    </group>
  );
}

export function WebGLHero() {
  return (
    <div className="absolute inset-0 z-0 opacity-80 dark:opacity-40">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
        <Slabs />
      </Canvas>
    </div>
  );
}

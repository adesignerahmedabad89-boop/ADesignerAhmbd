"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

function ChakraMesh() {
  const torusRef = useRef<THREE.Mesh>(null);
  const outerSphereRef = useRef<THREE.Mesh>(null);
  const ringRef1 = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);

  // Rotate the 3D meshes inside the animation frame
  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();

    if (torusRef.current) {
      torusRef.current.rotation.x = elapsed * 0.15;
      torusRef.current.rotation.y = elapsed * 0.25;
      torusRef.current.rotation.z = elapsed * 0.1;
    }

    if (outerSphereRef.current) {
      outerSphereRef.current.rotation.y = -elapsed * 0.05;
    }

    if (ringRef1.current) {
      ringRef1.current.rotation.z = elapsed * 0.1;
    }

    if (ringRef2.current) {
      ringRef2.current.rotation.z = -elapsed * 0.15;
    }
  });

  return (
    <group>
      {/* 1. Core Mystical Golden Torus Knot (Sacred Geometric Core) */}
      <mesh ref={torusRef}>
        <torusKnotGeometry args={[1.1, 0.35, 120, 12, 3, 4]} />
        <meshStandardMaterial
          color="#f58220"
          roughness={0.1}
          metalness={0.9}
          wireframe
          emissive="#f58220"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* 2. Outer Wireframe Sphere representing planetary bounds */}
      <mesh ref={outerSphereRef}>
        <sphereGeometry args={[2.4, 24, 24]} />
        <meshBasicMaterial
          color="#154e73"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* 3. Concentric Orbital Rings */}
      {/* Ring A: Horizontal plane */}
      <mesh ref={ringRef1} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.0, 2.03, 64]} />
        <meshBasicMaterial color="#f58220" side={THREE.DoubleSide} transparent opacity={0.6} />
      </mesh>

      {/* Ring B: Vertical tilt plane */}
      <mesh ref={ringRef2} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <ringGeometry args={[1.7, 1.72, 64]} />
        <meshBasicMaterial color="#ffffff" side={THREE.DoubleSide} transparent opacity={0.4} />
      </mesh>

      {/* 4. Glowing inner core sphere */}
      <mesh>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </group>
  );
}

export default function ThreeDScene() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        {/* Lights */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-5, -5, -5]} intensity={0.8} color="#0046ad" />
        <pointLight position={[5, -5, 5]} intensity={1.2} color="#e31e24" />

        {/* Animated Sacred Geometry Mesh */}
        <ChakraMesh />

        {/* 3D floating constellation particles in background */}
        <Stars radius={100} depth={40} count={1000} factor={4} saturation={0.5} fade speed={1.5} />

        {/* Interactive Mouse Drag Orbit Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />
      </Canvas>
    </div>
  );
}

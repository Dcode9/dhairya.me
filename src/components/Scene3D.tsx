import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Center, Float, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 600;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#6c5ce7"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function VolumetricD() {
  const meshRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.PointLight>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const breathe = Math.sin(t * 0.5) * 0.3 + 0.7;

    if (lightRef.current) {
      lightRef.current.intensity = breathe * 15;
    }

    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(t * 0.2) * 0.05;
    }

    if (glowRef.current) {
      const scale = 1 + Math.sin(t * 0.5) * 0.05;
      glowRef.current.scale.set(scale, scale, scale);
      (glowRef.current.material as THREE.MeshBasicMaterial).opacity = breathe * 0.15;
    }
  });

  return (
    <group position={[-6, 0, -2]}>
      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.3}>
        <Center>
          <Text3D
            ref={meshRef}
            font="https://threejs.org/examples/fonts/helvetiker_bold.typeface.json"
            size={4}
            height={1.2}
            bevelEnabled
            bevelThickness={0.15}
            bevelSize={0.08}
            bevelOffset={0}
            bevelSegments={8}
          >
            D
            <MeshTransmissionMaterial
              backside
              samples={8}
              thickness={0.5}
              chromaticAberration={0.5}
              anisotropy={0.3}
              distortion={0.2}
              distortionScale={0.3}
              temporalDistortion={0.1}
              ior={1.5}
              color="#6c5ce7"
              transmission={0.9}
              roughness={0.1}
              metalness={0.1}
            />
          </Text3D>
        </Center>
      </Float>

      {/* Point Light emanating from the D */}
      <pointLight
        ref={lightRef}
        position={[0, 0, 2]}
        color="#6c5ce7"
        intensity={10}
        distance={30}
        decay={2}
      />
      <pointLight
        position={[1, 1, 3]}
        color="#a855f7"
        intensity={5}
        distance={20}
        decay={2}
      />

      {/* Glow sphere */}
      <mesh ref={glowRef} position={[0, 0, 0]}>
        <sphereGeometry args={[5, 32, 32]} />
        <meshBasicMaterial
          color="#6c5ce7"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

function FloatingOrbs() {
  const orbsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (orbsRef.current) {
      orbsRef.current.children.forEach((child, i) => {
        const t = state.clock.elapsedTime + i * 2;
        child.position.y = Math.sin(t * 0.3) * 2 + (i - 2) * 3;
        child.position.x = Math.cos(t * 0.2) * 0.5 + 5;
        child.position.z = Math.sin(t * 0.15) * 2 - 3;
      });
    }
  });

  return (
    <group ref={orbsRef}>
      {[0, 1, 2, 3, 4].map((i) => (
        <mesh key={i} position={[5, i * 3 - 6, -3]}>
          <sphereGeometry args={[0.15 + i * 0.05, 16, 16]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? '#6c5ce7' : '#22d3ee'}
            emissive={i % 2 === 0 ? '#6c5ce7' : '#22d3ee'}
            emissiveIntensity={0.5}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
}

export function Scene3D() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 1.5]}
      >
        <color attach="background" args={['#050508']} />
        <fog attach="fog" args={['#050508', 15, 35]} />

        <ambientLight intensity={0.08} />
        <directionalLight position={[5, 5, 5]} intensity={0.3} color="#ffffff" />

        <VolumetricD />
        <ParticleField />
        <FloatingOrbs />
      </Canvas>
    </div>
  );
}

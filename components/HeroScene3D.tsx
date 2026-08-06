'use client';
import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Float, MeshReflectorMaterial, Text } from '@react-three/drei';
import * as THREE from 'three';

/* ── Types ──────────────────────────────────────────────────── */
interface BuildingPhaseProps {
  phase: number; // 0–5 scroll-driven
}

/* ── Blueprint Grid Floor ────────────────────────────────────── */
function BlueprintFloor() {
  const mat = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512; canvas.height = 512;
    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = '#0A0B1E';
    ctx.fillRect(0, 0, 512, 512);

    // Grid lines
    ctx.strokeStyle = 'rgba(33, 20, 95, 0.5)';
    ctx.lineWidth = 0.5;
    for (let i = 0; i <= 512; i += 32) {
      ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, 512); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(512, i); ctx.stroke();
    }

    // Accent cross marks
    ctx.strokeStyle = 'rgba(255, 107, 44, 0.4)';
    ctx.lineWidth = 1;
    for (let x = 64; x < 512; x += 64) {
      for (let y = 64; y < 512; y += 64) {
        ctx.beginPath(); ctx.moveTo(x - 5, y); ctx.lineTo(x + 5, y); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(x, y - 5); ctx.lineTo(x, y + 5); ctx.stroke();
      }
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(4, 4);
    return tex;
  }, []);

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.2, 0]} receiveShadow>
      <planeGeometry args={[30, 30]} />
      <meshStandardMaterial map={mat} roughness={0.85} metalness={0.0} />
    </mesh>
  );
}

/* ── Architectural Building (multi-phase) ────────────────────── */
function ArchBuilding({ phase }: BuildingPhaseProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Materials per phase
  const wireMat = useMemo(() =>
    new THREE.MeshBasicMaterial({ color: '#2C237A', wireframe: true, transparent: true, opacity: 0.85 }),
    []);

  const steelMat = useMemo(() =>
    new THREE.MeshStandardMaterial({ color: '#718096', metalness: 0.9, roughness: 0.1 }),
    []);

  const concreteMat = useMemo(() =>
    new THREE.MeshStandardMaterial({ color: '#A0ADB8', roughness: 0.9, metalness: 0.0 }),
    []);

  const glassMat = useMemo(() =>
    new THREE.MeshPhysicalMaterial({
      color: '#DAEEFF',
      transparent: true,
      opacity: 0.35,
      roughness: 0.0,
      metalness: 0.1,
      transmission: 0.85,
      thickness: 0.2,
    }), []);

  const finishedMat = useMemo(() =>
    new THREE.MeshStandardMaterial({ color: '#E8EDF2', roughness: 0.6, metalness: 0.05 }),
    []);

  const getMat = () => {
    if (phase <= 0) return wireMat;
    if (phase === 1) return steelMat;
    if (phase === 2) return concreteMat;
    if (phase === 3) return concreteMat; // MEP phase — concrete stays
    if (phase === 4) return glassMat;
    return finishedMat;
  };

  // Slow cinematic drift — no rotation
  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.position.y = Math.sin(t * 0.3) * 0.05 - 0.1;
    groupRef.current.position.x = Math.sin(t * 0.2) * 0.03;
  });

  const mat = getMat();

  return (
    <group ref={groupRef} position={[1.4, 0, 0]}>
      {/* Main tower */}
      <mesh castShadow receiveShadow material={mat} position={[0, 0.8, 0]}>
        <boxGeometry args={[1.2, 4.0, 1.0]} />
      </mesh>

      {/* Side wing lower */}
      <mesh castShadow receiveShadow material={mat} position={[1.1, -0.7, 0]}>
        <boxGeometry args={[0.9, 2.5, 0.9]} />
      </mesh>

      {/* Podium base */}
      <mesh castShadow receiveShadow material={mat} position={[0.4, -2.1, 0]}>
        <boxGeometry args={[2.8, 0.6, 1.2]} />
      </mesh>

      {/* Floor slabs (visible in concrete+ phases) */}
      {phase >= 2 && [0, 0.7, 1.4, 2.1, 2.8].map((y, i) => (
        <mesh key={i} material={steelMat} position={[0, -1.8 + y, 0]}>
          <boxGeometry args={[1.22, 0.06, 1.02]} />
        </mesh>
      ))}

      {/* Structural columns (visible phase 1+) */}
      {phase >= 1 && (
        <>
          {[[-0.5, 0.4], [0.5, 0.4], [-0.5, -0.4], [0.5, -0.4]].map(([x, z], i) => (
            <mesh key={i} material={steelMat} position={[x, 0.8, z as number]}>
              <cylinderGeometry args={[0.05, 0.05, 4.2, 8]} />
            </mesh>
          ))}
        </>
      )}

      {/* MEP pipes (phase 3) */}
      {phase === 3 && (
        <group position={[0.65, 0.5, 0.55]}>
          {/* HVAC duct */}
          <mesh material={new THREE.MeshStandardMaterial({ color: '#718096', metalness: 0.6, roughness: 0.4 })}>
            <boxGeometry args={[0.15, 0.08, 2.0]} />
          </mesh>
          {/* Plumbing pipe */}
          <mesh position={[0, -0.15, 0]} material={new THREE.MeshStandardMaterial({ color: '#2563EB', metalness: 0.7, roughness: 0.3 })}>
            <cylinderGeometry args={[0.04, 0.04, 2.0, 8]} />
          </mesh>
          {/* Electrical conduit */}
          <mesh position={[0, 0.15, 0]} material={new THREE.MeshStandardMaterial({ color: '#D97706', metalness: 0.5, roughness: 0.5 })}>
            <cylinderGeometry args={[0.025, 0.025, 2.0, 8]} />
          </mesh>
        </group>
      )}

      {/* Glass curtain wall (phase 4+) */}
      {phase >= 4 && (
        <>
          {/* Front facade */}
          <mesh material={glassMat} position={[0, 0.8, 0.51]}>
            <planeGeometry args={[1.18, 3.96]} />
          </mesh>
          {/* Side facade */}
          <mesh material={glassMat} rotation={[0, Math.PI / 2, 0]} position={[-0.61, 0.8, 0]}>
            <planeGeometry args={[0.98, 3.96]} />
          </mesh>
        </>
      )}
    </group>
  );
}

/* ── Floating Label HTML Overlay ─────────────────────────────── */
interface FloatingLabelProps {
  position: [number, number, number];
  label: string;
  visible: boolean;
}

function FloatingLabels3D({ phase }: { phase: number }) {
  const labels = [
    { position: [-2.8, 2.2, 0] as [number,number,number],  label: 'Architectural BIM', phase: 0 },
    { position: [-2.5, 0.5, 0] as [number,number,number],  label: 'Structural Engineering', phase: 1 },
    { position: [-2.6, -1.0, 0] as [number,number,number], label: 'MEP Systems', phase: 3 },
    { position: [3.2, 2.0, 0] as [number,number,number],   label: 'LGSF', phase: 1 },
    { position: [3.4, 0.6, 0] as [number,number,number],   label: 'ICF', phase: 2 },
    { position: [3.2, -0.8, 0] as [number,number,number],  label: 'Timber Engineering', phase: 5 },
    { position: [0, -2.8, 0] as [number,number,number],    label: 'Industrial Buildings', phase: 5 },
  ];

  return (
    <>
      {labels.map(({ position, label, phase: labelPhase }) => (
        <group key={label} position={position}>
          {/* Leader line */}
          <mesh position={[labelPhase < 3 ? 0.8 : -0.8, 0, 0]}>
            <boxGeometry args={[1.5, 0.008, 0.008]} />
            <meshBasicMaterial color="#FF6B2C" transparent opacity={0.5} />
          </mesh>
          {/* Dot */}
          <mesh>
            <sphereGeometry args={[0.04, 8, 8]} />
            <meshBasicMaterial color="#FF6B2C" />
          </mesh>
        </group>
      ))}
    </>
  );
}

/* ── Ambient particles ───────────────────────────────────────── */
function Particles({ count = 60 }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 18;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (!ref.current) return;
    const pos = ref.current.geometry.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < count; i++) {
      pos.array[i * 3 + 1] += delta * 0.08;
      if ((pos.array as Float32Array)[i * 3 + 1] > 5) (pos.array as Float32Array)[i * 3 + 1] = -5;
    }
    pos.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={count} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#FF6B2C" transparent opacity={0.35} sizeAttenuation />
    </points>
  );
}

/* ── Mouse parallax camera ───────────────────────────────────── */
function CameraParallax() {
  const { camera } = useThree();
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useFrame(() => {
    // Smooth lerp — NO rotation, only position drift
    targetRef.current.x += (mouseRef.current.x * 0.4 - targetRef.current.x) * 0.03;
    targetRef.current.y += (-mouseRef.current.y * 0.25 - targetRef.current.y) * 0.03;
    camera.position.x = targetRef.current.x;
    camera.position.y = 0.5 + targetRef.current.y;
    camera.lookAt(1.4, 0, 0);
  });

  return null;
}

/* ── Main 3D Scene ───────────────────────────────────────────── */
interface HeroScene3DProps {
  phase?: number;
}

export default function HeroScene3D({ phase = 0 }: HeroScene3DProps) {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 9], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      shadows
      style={{ position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none' }}
    >
      {/* Daylight lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[8, 12, 6]}
        intensity={1.8}
        color="#FFF8EE"
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={0.1}
        shadow-camera-far={30}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <directionalLight position={[-5, 4, -3]} intensity={0.4} color="#C8D8FF" />
      <pointLight position={[2, 6, 4]} intensity={0.3} color="#FFFFFF" />

      {/* HDR Environment */}
      <Environment preset="city" />

      {/* Scene contents */}
      <ArchBuilding phase={phase} />
      <FloatingLabels3D phase={phase} />
      <BlueprintFloor />
      <Particles />
      <CameraParallax />
    </Canvas>
  );
}

import { Canvas, useFrame, type ThreeEvent } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { skills } from '../../data/workspace';

function Keycap({
  index,
  selected,
  onSelect,
}: {
  index: number;
  selected: boolean;
  onSelect: (index: number) => void;
}) {
  const ref = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const skill = skills[index];
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const context = canvas.getContext('2d')!;
    context.fillStyle = '#ffffff';
    context.font = 'bold 83px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(skill.mark, 128, 126);
    const map = new THREE.CanvasTexture(canvas);
    map.colorSpace = THREE.SRGBColorSpace;
    return map;
  }, [skill.mark]);
  useEffect(() => () => texture.dispose(), [texture]);
  useFrame((_, delta) => {
    if (ref.current)
      ref.current.position.y = THREE.MathUtils.damp(
        ref.current.position.y,
        selected ? 0.48 : hovered ? 0.24 : 0,
        9,
        delta,
      );
  });
  const pick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    onSelect(index);
  };
  return (
    <group
      ref={ref}
      position={[
        ((index % 4) - 1.5) * 1.17,
        0,
        (Math.floor(index / 4) - 1) * 1.17,
      ]}
      onClick={pick}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
    >
      <RoundedBox args={[1.04, 0.65, 1.04]} radius={0.15} smoothness={3}>
        <meshStandardMaterial
          color={skill.color}
          roughness={0.3}
          metalness={0.14}
        />
      </RoundedBox>
      <mesh position={[0, 0.328, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.75, 0.75]} />
        <meshBasicMaterial
          map={texture}
          transparent
          depthWrite={false}
          polygonOffset
          polygonOffsetFactor={-1}
        />
      </mesh>
    </group>
  );
}
function Board({
  active,
  onSelect,
}: {
  active: number;
  onSelect: (index: number) => void;
}) {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ pointer }, delta) => {
    if (ref.current) {
      ref.current.rotation.y = THREE.MathUtils.damp(
        ref.current.rotation.y,
        -0.32 + pointer.x * 0.08,
        3,
        delta,
      );
      ref.current.rotation.x = THREE.MathUtils.damp(
        ref.current.rotation.x,
        pointer.y * 0.025,
        3,
        delta,
      );
    }
  });
  return (
    <group ref={ref} rotation={[0, -0.32, 0]}>
      <RoundedBox
        args={[5.06, 0.26, 3.87]}
        radius={0.12}
        position={[0, -0.48, 0]}
        smoothness={4}
      >
        <meshStandardMaterial
          color="#252a2b"
          roughness={0.32}
          metalness={0.65}
        />
      </RoundedBox>
      <RoundedBox
        args={[4.92, 0.07, 3.72]}
        radius={0.03}
        position={[0, -0.305, 0]}
        smoothness={4}
      >
        <meshStandardMaterial color="#131616" roughness={0.4} />
      </RoundedBox>
      {skills.map((s, index) => (
        <Keycap
          key={s.name}
          index={index}
          selected={active === index}
          onSelect={onSelect}
        />
      ))}
    </group>
  );
}
export default function KeyboardScene({
  active,
  onSelect,
}: {
  active: number;
  onSelect: (index: number) => void;
}) {
  const container = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const node = container.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(entry.isIntersecting),
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={container} className="canvas-wrap">
      <Canvas
        camera={{ position: [5.7, 7.7, 8], fov: 34 }}
        dpr={[1, 1.5]}
        frameloop={visible ? 'always' : 'never'}
        gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[-3, 7, 5]} intensity={3} />
        <directionalLight position={[5, 2, -3]} intensity={2} color="#b3c6ff" />
        <Board active={active} onSelect={onSelect} />
      </Canvas>
    </div>
  );
}

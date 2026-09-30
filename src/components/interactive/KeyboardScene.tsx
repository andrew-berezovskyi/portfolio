import { Canvas, useFrame, type ThreeEvent } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { skills } from '../../data/workspace';
import { skillLogoPath } from './SkillIcon';

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
  const geometry = useMemo(() => {
    const shape = new RoundedBoxGeometry(1.04, 0.64, 1.04, 5, 0.09);
    const positions = shape.attributes.position;
    for (let i = 0; i < positions.count; i++) {
      const taper = 1 - ((positions.getY(i) + 0.32) / 0.64) * 0.12;
      positions.setX(i, positions.getX(i) * taper);
      positions.setZ(i, positions.getZ(i) * taper);
    }
    shape.computeVertexNormals();
    return shape;
  }, []);
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const context = canvas.getContext('2d')!;
    context.fillStyle = '#ffffff';
    const path = skillLogoPath(index);
    if (path) {
      context.translate(24, 24);
      context.scale(464 / 24, 464 / 24);
      context.fill(new Path2D(path));
    } else {
      context.font = 'bold 280px Arial';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText('C#', 256, 270);
    }
    const map = new THREE.CanvasTexture(canvas);
    map.colorSpace = THREE.SRGBColorSpace;
    return map;
  }, [index]);
  useEffect(() => () => texture.dispose(), [texture]);
  useEffect(() => () => geometry.dispose(), [geometry]);
  useFrame((_, delta) => {
    if (ref.current)
      ref.current.position.y = THREE.MathUtils.damp(
        ref.current.position.y,
        selected ? -0.12 : hovered ? 0.035 : 0,
        18,
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
      <mesh geometry={geometry} castShadow receiveShadow>
        <meshStandardMaterial
          color={skill.color}
          roughness={0.42}
          metalness={0.02}
        />
      </mesh>
      <RoundedBox
        args={[1.04, 0.12, 1.04]}
        radius={0.035}
        position={[0, -0.28, 0]}
        castShadow
      >
        <meshStandardMaterial
          color={new THREE.Color(skill.color).multiplyScalar(0.52)}
          roughness={0.55}
        />
      </RoundedBox>
      <mesh position={[0, 0.322, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.57, 0.57]} />
        <meshBasicMaterial
          map={texture}
          toneMapped={false}
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
        receiveShadow
        castShadow
      >
        <meshStandardMaterial
          color="#15191b"
          roughness={0.4}
          metalness={0.45}
        />
      </RoundedBox>
      <RoundedBox
        args={[4.92, 0.07, 3.72]}
        radius={0.03}
        position={[0, -0.345, 0]}
        smoothness={4}
        receiveShadow
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
        camera={{ position: [5.7, 7.7, 8], fov: 32 }}
        shadows
        dpr={[1, 1.5]}
        frameloop={visible ? 'always' : 'never'}
        gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight
          position={[-3, 7, 5]}
          intensity={2.4}
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-bias={-0.0003}
          shadow-normalBias={0.025}
          shadow-camera-left={-5}
          shadow-camera-right={5}
          shadow-camera-top={5}
          shadow-camera-bottom={-5}
        />
        <directionalLight
          position={[5, 2, -3]}
          intensity={0.6}
          color="#e6eeff"
        />
        <Board active={active} onSelect={onSelect} />
      </Canvas>
    </div>
  );
}

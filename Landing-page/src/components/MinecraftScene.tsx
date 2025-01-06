import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import * as THREE from 'three';

export function MinecraftScene() {
  const cubeRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.y += 0.01;
      cubeRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <group>
      <Box
        ref={cubeRef}
        args={[1, 1, 1]}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial
          attach="material-0"
          map={new THREE.TextureLoader().load('https://raw.githubusercontent.com/minecraft/minecraft-assets/master/textures/block/dirt.png')}
        />
        <meshStandardMaterial
          attach="material-1"
          map={new THREE.TextureLoader().load('https://raw.githubusercontent.com/minecraft/minecraft-assets/master/textures/block/grass_block_side.png')}
        />
        <meshStandardMaterial
          attach="material-2"
          map={new THREE.TextureLoader().load('https://raw.githubusercontent.com/minecraft/minecraft-assets/master/textures/block/grass_block_top.png')}
        />
        <meshStandardMaterial
          attach="material-3"
          map={new THREE.TextureLoader().load('https://raw.githubusercontent.com/minecraft/minecraft-assets/master/textures/block/dirt.png')}
        />
        <meshStandardMaterial
          attach="material-4"
          map={new THREE.TextureLoader().load('https://raw.githubusercontent.com/minecraft/minecraft-assets/master/textures/block/grass_block_side.png')}
        />
        <meshStandardMaterial
          attach="material-5"
          map={new THREE.TextureLoader().load('https://raw.githubusercontent.com/minecraft/minecraft-assets/master/textures/block/dirt.png')}
        />
      </Box>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
    </group>
  );
}
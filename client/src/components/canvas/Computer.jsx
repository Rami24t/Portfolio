import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const ComputerMesh = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf', true)
  return (
    <mesh>
      <hemisphereLight intensity={0.35} groundColor="black" />
      {/* <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={2} castShadow /> */}
      <pointLight position={[0, 10, 0]} intensity={1} />
      <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={2} castShadow /> 
      <primitive object={computer.scene} 
      scale={0.8}
      position={[0, -3.25, -1.5]}
      // rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

export default function canvas(){
  return (
    <Canvas
    frameloop='demand'
    shadows
    camera={{ position: [20, 3, 5], fov: 25 }}
    gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
      <OrbitControls 
        // enableZoom={false}
        // enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 6}

      />
      <ComputerMesh />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
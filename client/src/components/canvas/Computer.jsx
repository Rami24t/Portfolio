import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const ComputerMesh = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf", true);
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  // const [active, setActive] = useState(false)
  return (
    <mesh
      ref={mesh}
      onClick={(event) => setActive(!hovered)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <hemisphereLight intensity={hovered ? 0.01 : 0} />
      <spotLight
        position={[10, 15, 10]}
        angle={0.3}
        penumbra={1}
        intensity={hovered ? 0.7 : 0.2}
        castShadow
      />
      <primitive
        object={computer.scene}
        scale={0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

export default function canvas() {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 5}
        />
        <ComputerMesh />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

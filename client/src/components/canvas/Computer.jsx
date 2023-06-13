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
  const [scrollPosition, setScrollPosition] = useState(0);
const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
};
useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

  return (
    <mesh
      ref={mesh}
      onClick={(event) => setActive(!hovered)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <hemisphereLight intensity={0.15} groundColor='black'/>
      <spotLight
        position={[10, 15, 10]}
        angle={0.3}
        penumbra={1}
        intensity={hovered ? 0.6 : 0.2}
        castShadow
        shadow-mapSize={1024}      />
              <pointLight intensity={hovered ? 0.5 : 0.01} />
      <primitive
        object={computer.scene}
        scale={0.7}
        position={[0, -3.25, -1.5]}
        rotation={[-0.009, -0.2, -0.15 + scrollPosition * 0.0005]}
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
          maxPolarAngle={Math.PI / 1.9}
          minPolarAngle={Math.PI / 2.1}
        />
        <ComputerMesh />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

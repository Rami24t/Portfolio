import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { ComputerMesh } from "./ComputerMesh";

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

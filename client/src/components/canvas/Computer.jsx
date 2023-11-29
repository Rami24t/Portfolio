import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { ComputerMesh } from "./ComputerMesh";

import Spinner from "../Spinner";

export default function ComputerCanvas({ isMobile }) {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 24 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ pointerEvents: isMobile ? "none" : "" }}
    >
      <Suspense fallback={<Spinner size={10} darkMode={true} />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          maxPolarAngle={Math.PI / 1.9}
          minPolarAngle={Math.PI / 2.1}
        />
        <ComputerMesh isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

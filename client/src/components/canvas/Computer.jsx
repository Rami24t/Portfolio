import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { ComputerMesh } from "./ComputerMesh";

import Spinner from "../Spinner";

export default function ComputerCanvas() {
  // set and listen to media query
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

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
      {/* <Preload all /> */}
    </Canvas>
  );
}

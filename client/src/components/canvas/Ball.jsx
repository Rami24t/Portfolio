import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { Ball } from "./Ball.1";

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
    // frameloop="demand"
    // dpr={[1, 2]}
    // gl={{ preserveDrawingBuffer: true }}
    >
      <OrbitControls
       enableZoom={false}
       enablePan={false}
       maxAzimuthAngle={Math.PI/6}
        minAzimuthAngle={-Math.PI/6}
        maxPolarAngle={Math.PI / 1.6}
        minPolarAngle={Math.PI / 2.4}
        />
      <Ball imgUrl={icon} />
    </Canvas>
  );
};

export default BallCanvas;

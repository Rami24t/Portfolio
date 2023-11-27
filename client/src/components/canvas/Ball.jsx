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
      <OrbitControls enableZoom={false} />
      <Ball imgUrl={icon} />
    </Canvas>
  );
};

export default BallCanvas;

import { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { ramiPC } from "../../assets";

export const ComputerMesh = ({ isMobile }) => {
  // const computer = useGLTF("./desktop_pc/scene.gltf", true);
  const computer = useGLTF(ramiPC, true);
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  // const [active, setActive] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0);
  // const startScale = Math.floor(Math.random() * 2.5) + 2.25;
  const [scale, setScale] = useState(2.5);
  const END_SCALE = 0.75;
  const numToZero = scale - END_SCALE;
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    function graduallyDrop(target) {
      if (scale > target) {
        setScale(scale - 0.01);
      }
    }
    const scaleTimeout = setTimeout(() => {
      graduallyDrop(END_SCALE);
    }, 8);
    return () => {
      clearTimeout(scaleTimeout);
    };
  }, [scale]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <mesh
      ref={mesh}
      onClick={(event) => setActive(!hovered)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <primitive
        object={computer.scene}
        scale={isMobile ? scale - 0.04 : scale}
        position={
          isMobile
            ? [-0.8 + 2 * numToZero, -3 + numToZero, -2.1 - 6 * numToZero]
            : [0 + 2 * numToZero, -3.25 + numToZero, -1.5 - 2 * numToZero]
        }
        // rotation={[-0.009, -0.2, -0.15 + scrollPosition * 0.0005]}
        rotation={[-0.009, -0.2 + numToZero / 2, scrollPosition * 0.0005]}
      />
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[10, 15, 10]}
        angle={0.3}
        penumbra={1}
        intensity={hovered ? 0.6 : 0.2}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={0.9} />
    </mesh>
  );
};

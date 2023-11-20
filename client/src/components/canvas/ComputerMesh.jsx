import { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

export const ComputerMesh = () => {
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
      <primitive
        object={computer.scene}
        scale={0.71}
        position={[0, -3.25, -1.5]}
        rotation={[-0.009, -0.2, -0.15 + scrollPosition * 0.0005]} />
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[10, 15, 10]}
        angle={0.3}
        penumbra={1}
        intensity={hovered ? 0.6 : 0.2}
        castShadow
        shadow-mapSize={1024} />
      <pointLight intensity={0.9} />
    </mesh>
  );
};

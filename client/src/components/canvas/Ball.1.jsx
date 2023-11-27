import { Decal, Float, useTexture } from "@react-three/drei";

export const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float
      speed={0.9 + Math.random() * 1.2}
      rotationIntensity={0.4 + Math.random() * 1.6}
      floatIntensity={Math.random() * 7}
    >
      <ambientLight intensity={0.1 + Math.random() * 0.35} />
      <directionalLight position={[0, 0, Math.random() / 10]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={Math.floor(10 + Math.random() * 60)}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

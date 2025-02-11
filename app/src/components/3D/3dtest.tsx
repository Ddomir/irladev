import {useRef} from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {Mesh} from "three";

const Cube = () => {
  const cubeRef = useRef<Mesh>(null!);

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[2, 2, 2]} /> {/* Width, Height, Depth */}
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
};

const CubeScene = () => {
  return (
    <Canvas
      camera={{position: [5, 5, 5]}} // Camera position
      // Fullscreen canvas
    >
      <ambientLight intensity={0.5} /> {/* Soft light */}
      <directionalLight position={[5, 5, 5]} intensity={1} /> {/* Sunlight */}
      <Cube />
    </Canvas>
  );
};

export default CubeScene;

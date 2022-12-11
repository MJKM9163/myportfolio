import { Canvas } from "@react-three/fiber";
import React from "react";
import Camera from "./camera/Camera";

const CanvasIndex = () => {
  return (
    <Canvas>
      <Camera />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  );
};

export default CanvasIndex;

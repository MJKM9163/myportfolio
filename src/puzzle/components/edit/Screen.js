import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

const Screen = () => {
  return (
    <Canvas
      camera={{
        position: [5, 5, 5],
      }}
    >
      <Suspense fallback={() => <div>로딩..</div>}>
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshNormalMaterial />
        </mesh>
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default Screen;

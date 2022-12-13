import { SpotLight } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { Lamp } from "../../models/Lamp";

const Light = () => {
  const slRef = useRef();

  useEffect(() => {
    if (slRef.current) {
      slRef.current.position.set(0, 7.3, 0);
    }
  }, []);

  return (
    <group>
      <Lamp scale={5} position={[0, 11, 0]} />
      <SpotLight
        ref={slRef}
        color={"#ffeaad"}
        angle={0.8}
        penumbra={0.5}
        distance={0}
        castShadow
      />
      <ambientLight intensity={0.2} />
    </group>
  );
};

export default Light;

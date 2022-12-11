import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import React, { useEffect } from "react";

const Camera = () => {
  const { camera } = useThree();
  // console.log(camera);

  useEffect(() => {
    camera.position.set(0, 50, 0);
  }, []);

  return <OrbitControls enablePan={false} enableZoom={false} />;
};

export default Camera;

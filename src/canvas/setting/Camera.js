import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import React, { useEffect } from "react";

const Camera = () => {
  const { camera } = useThree();
  // console.log(camera);

  useEffect(() => {
    camera.position.set(0, 20, 0);
  }, []);

  return <OrbitControls enablePan={false} enableZoom={true} />;
};

export default Camera;

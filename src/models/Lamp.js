import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Lamp(props) {
  const { nodes, materials } = useGLTF("/models/lamp/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={nodes.Lamp_01a001__0.geometry}
              material={materials["Scene_-_Root"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/lamp/scene.gltf");

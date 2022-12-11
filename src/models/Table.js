import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Table(props) {
  const { nodes, materials } = useGLTF("/models/table/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, -29.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.Object_5.geometry}
              material={materials.Material_167}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/table/scene.gltf");

import { Canvas } from "@react-three/fiber";
import React from "react";
import Player from "./player/Player";
import Camera from "./setting/Camera";
import Light from "./setting/Light";
import TableGroup from "./table/TableGroup";

const CanvasIndex = () => {
  return (
    <Canvas>
      <Camera />
      <Light />
      <Player />
      <TableGroup />
    </Canvas>
  );
};

export default CanvasIndex;

import { RigidBody } from "@react-three/rapier";
import React from "react";
import { Table } from "../../models/Table";

const TableGroup = () => {
  //테이블 모델 넣기
  return (
    <RigidBody type="fixed" colliders="hull">
      <group>
        <Table scale={0.2} />
      </group>
    </RigidBody>
  );
};

export default TableGroup;

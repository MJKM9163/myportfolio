import { RigidBody } from "@react-three/rapier";
import React from "react";
import { CardDeck } from "../../models/cardDeck/CardDeck";

const Player = () => {
  // const { clubDeck } = CardDeck();
  // console.log(clubDeck);
  // const ClubA = clubDeck[0];
  // console.log(ClubA);
  return (
    <group position={[0, 4.5, 0]}>
      {/* {clubDeck.map((deck, index) => (
        <group
          scale={0.1}
          position={[0, 1.85, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          {deck}
        </group>
      ))} */}
      <mesh position={[5, 0, 0]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshPhysicalMaterial />
      </mesh>
      <mesh position={[-5, 0, 0]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshPhysicalMaterial />
      </mesh>
      <mesh position={[0, 0, 5]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshPhysicalMaterial />
      </mesh>
      <mesh position={[0, 0, -5]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshPhysicalMaterial />
      </mesh>
    </group>
  );
};

export default Player;

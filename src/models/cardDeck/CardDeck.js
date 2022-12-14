import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function CardDeck(props) {
  const { nodes, materials } = useGLTF("/models/cardDeck/scene.gltf");

  const ClubA = () => {
    return (
      <group
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1.12, 1, 0.49]}
        position={[0, 0, 0]}
      >
        <mesh
          geometry={nodes["Ace_of_Clubs_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Ace_of_Clubs_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Ace_of_Clubs_27_0.geometry}
          material={materials.material_41}
        />
      </group>
    );
  };
  const Club2 = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Two_of_Clubs_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Two_of_Clubs_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Two_of_Clubs_28_0.geometry}
          material={materials.material_53}
        />
      </group>
    );
  };
  const Club3 = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Three_of_Clubs_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Three_of_Clubs_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Three_of_Clubs_29_0.geometry}
          material={materials.material_52}
        />
      </group>
    );
  };
  const Club4 = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Four_of_Clubs_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Four_of_Clubs_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Four_of_Clubs_30_0.geometry}
          material={materials.material_44}
        />
      </group>
    );
  };
  const Club5 = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Five_of_Clubs_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Five_of_Clubs_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Five_of_Clubs_31_0.geometry}
          material={materials.material_43}
        />
      </group>
    );
  };
  const Club6 = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Six_of_Clubs_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Six_of_Clubs_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Six_of_Clubs_32_0.geometry}
          material={materials.material_50}
        />
      </group>
    );
  };
  const Club7 = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Seven_of_Clubs_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Seven_of_Clubs_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Seven_of_Clubs_33_0.geometry}
          material={materials.material_49}
        />
      </group>
    );
  };
  const Club8 = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Eight_of_Clubs_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Eight_of_Clubs_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Eight_of_Clubs_34_0.geometry}
          material={materials.material_42}
        />
      </group>
    );
  };
  const Club9 = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Nine_of_Clubs_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Nine_of_Clubs_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Nine_of_Clubs_35_0.geometry}
          material={materials.material_47}
        />
      </group>
    );
  };
  const Club10 = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Ten_of_Clubs_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Ten_of_Clubs_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Ten_of_Clubs_36_0.geometry}
          material={materials.material_51}
        />
      </group>
    );
  };
  const ClubJ = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Jack_of_Clubs_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Jack_of_Clubs_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Jack_of_Clubs_37_0.geometry}
          material={materials.material_45}
        />
      </group>
    );
  };
  const ClubQ = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Queen_of_Clubs_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Queen_of_Clubs_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Queen_of_Clubs_39_0.geometry}
          material={materials.material_48}
        />
      </group>
    );
  };
  const ClubK = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["King_of_Clubs_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["King_of_Clubs_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.King_of_Clubs_43_0.geometry}
          material={materials.material_46}
        />
      </group>
    );
  };

  const DiamondA = () => {
    return (
      <group
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1.12, 1, 0.49]}
        position={[0, 0, 0]}
      >
        <mesh
          geometry={nodes["Ace_of_Diamonds_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Ace_of_Diamonds_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Ace_of_Diamonds_27_0.geometry}
          material={materials.material_41}
        />
      </group>
    );
  };
  const Diamond2 = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Two_of_Diamonds_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Two_of_Diamonds_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Two_of_Diamonds_28_0.geometry}
          material={materials.material_53}
        />
      </group>
    );
  };
  const Diamond3 = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Three_of_Diamonds_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Three_of_Diamonds_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Three_of_Diamonds_29_0.geometry}
          material={materials.material_52}
        />
      </group>
    );
  };
  const Diamond4 = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Four_of_Diamonds_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Four_of_Diamonds_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Four_of_Diamonds_30_0.geometry}
          material={materials.material_44}
        />
      </group>
    );
  };
  const Diamond5 = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Five_of_Diamonds_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Five_of_Diamonds_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Five_of_Diamonds_31_0.geometry}
          material={materials.material_43}
        />
      </group>
    );
  };
  const Diamond6 = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Six_of_Diamonds_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Six_of_Diamonds_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Six_of_Diamonds_32_0.geometry}
          material={materials.material_50}
        />
      </group>
    );
  };
  const Diamond7 = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Seven_of_Diamonds_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Seven_of_Diamonds_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Seven_of_Diamonds_33_0.geometry}
          material={materials.material_49}
        />
      </group>
    );
  };
  const Diamond8 = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Eight_of_Diamonds_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Eight_of_Diamonds_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Eight_of_Diamonds_34_0.geometry}
          material={materials.material_42}
        />
      </group>
    );
  };
  const Diamond9 = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Nine_of_Diamonds_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Nine_of_Diamonds_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Nine_of_Diamonds_35_0.geometry}
          material={materials.material_47}
        />
      </group>
    );
  };
  const Diamond10 = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Ten_of_Diamonds_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Ten_of_Diamonds_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Ten_of_Diamonds_36_0.geometry}
          material={materials.material_51}
        />
      </group>
    );
  };
  const DiamondJ = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Jack_of_Diamonds_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Jack_of_Diamonds_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Jack_of_Diamonds_37_0.geometry}
          material={materials.material_45}
        />
      </group>
    );
  };
  const DiamondQ = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Queen_of_Diamonds_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Queen_of_Diamonds_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Queen_of_Diamonds_39_0.geometry}
          material={materials.material_48}
        />
      </group>
    );
  };
  const DiamondK = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["King_of_Diamonds_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["King_of_Diamonds_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.King_of_Diamonds_43_0.geometry}
          material={materials.material_46}
        />
      </group>
    );
  };

  const HeartA = () => {
    return (
      <group
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1.12, 1, 0.49]}
        position={[0, 0, 0]}
      >
        <mesh
          geometry={nodes["Ace_of_Hearts_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Ace_of_Hearts_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Ace_of_Hearts_27_0.geometry}
          material={materials.material_41}
        />
      </group>
    );
  };
  const Heart2 = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Two_of_Hearts_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Two_of_Hearts_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Two_of_Hearts_28_0.geometry}
          material={materials.material_53}
        />
      </group>
    );
  };
  const Heart3 = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Three_of_Hearts_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Three_of_Hearts_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Three_of_Hearts_29_0.geometry}
          material={materials.material_52}
        />
      </group>
    );
  };
  const Heart4 = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Four_of_Hearts_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Four_of_Hearts_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Four_of_Hearts_30_0.geometry}
          material={materials.material_44}
        />
      </group>
    );
  };
  const Heart5 = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Five_of_Hearts_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Five_of_Hearts_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Five_of_Hearts_31_0.geometry}
          material={materials.material_43}
        />
      </group>
    );
  };
  const Heart6 = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Six_of_Hearts_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Six_of_Hearts_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Six_of_Hearts_32_0.geometry}
          material={materials.material_50}
        />
      </group>
    );
  };
  const Heart7 = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Seven_of_Hearts_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Seven_of_Hearts_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Seven_of_Hearts_33_0.geometry}
          material={materials.material_49}
        />
      </group>
    );
  };
  const Heart8 = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Eight_of_Hearts_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Eight_of_Hearts_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Eight_of_Hearts_34_0.geometry}
          material={materials.material_42}
        />
      </group>
    );
  };
  const Heart9 = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Nine_of_Hearts_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Nine_of_Hearts_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Nine_of_Hearts_35_0.geometry}
          material={materials.material_47}
        />
      </group>
    );
  };
  const Heart10 = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Ten_of_Hearts_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Ten_of_Hearts_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Ten_of_Hearts_36_0.geometry}
          material={materials.material_51}
        />
      </group>
    );
  };
  const HeartJ = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Jack_of_Hearts_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Jack_of_Hearts_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Jack_of_Hearts_37_0.geometry}
          material={materials.material_45}
        />
      </group>
    );
  };
  const HeartQ = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Queen_of_Hearts_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Queen_of_Hearts_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Queen_of_Hearts_39_0.geometry}
          material={materials.material_48}
        />
      </group>
    );
  };
  const HeartK = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["King_of_Hearts_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["King_of_Hearts_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.King_of_Hearts_43_0.geometry}
          material={materials.material_46}
        />
      </group>
    );
  };

  const SpadeA = () => {
    return (
      <group
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1.12, 1, 0.49]}
        position={[0, 0, 0]}
      >
        <mesh
          geometry={nodes["Ace_of_Clubs_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Ace_of_Clubs_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Ace_of_Clubs_27_0.geometry}
          material={materials.material_41}
        />
      </group>
    );
  };
  const Spade2 = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Two_of_Spades_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Two_of_Spades_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Two_of_Spades_28_0.geometry}
          material={materials.material_53}
        />
      </group>
    );
  };
  const Spade3 = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Three_of_Spades_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Three_of_Spades_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Three_of_Spades_29_0.geometry}
          material={materials.material_52}
        />
      </group>
    );
  };
  const Spade4 = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Four_of_Spades_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Four_of_Spades_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Four_of_Spades_30_0.geometry}
          material={materials.material_44}
        />
      </group>
    );
  };
  const Spade5 = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Five_of_Spades_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Five_of_Spades_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Five_of_Spades_31_0.geometry}
          material={materials.material_43}
        />
      </group>
    );
  };
  const Spade6 = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Six_of_Spades_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Six_of_Spades_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Six_of_Spades_32_0.geometry}
          material={materials.material_50}
        />
      </group>
    );
  };
  const Spade7 = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Seven_of_Spades_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Seven_of_Spades_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Seven_of_Spades_33_0.geometry}
          material={materials.material_49}
        />
      </group>
    );
  };
  const Spade8 = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Eight_of_Spades_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Eight_of_Spades_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Eight_of_Spades_34_0.geometry}
          material={materials.material_42}
        />
      </group>
    );
  };
  const Spade9 = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Nine_of_Spades_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Nine_of_Spades_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Nine_of_Spades_35_0.geometry}
          material={materials.material_47}
        />
      </group>
    );
  };
  const Spade10 = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Ten_of_Spades_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Ten_of_Spades_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Ten_of_Spades_36_0.geometry}
          material={materials.material_51}
        />
      </group>
    );
  };
  const SpadeJ = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Jack_of_Spades_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Jack_of_Spades_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Jack_of_Spades_37_0.geometry}
          material={materials.material_45}
        />
      </group>
    );
  };
  const SpadeQ = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["Queen_of_Spades_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["Queen_of_Spades_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.Queen_of_Spades_39_0.geometry}
          material={materials.material_48}
        />
      </group>
    );
  };
  const SpadeK = () => {
    return (
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.12, 1, 0.49]}>
        <mesh
          geometry={nodes["King_of_Spades_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          geometry={nodes["King_of_Spades_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
        <mesh
          geometry={nodes.King_of_Spades_43_0.geometry}
          material={materials.material_46}
        />
      </group>
    );
  };

  const clubDeck = [
    <ClubA />,
    <Club2 />,
    <Club3 />,
    <Club4 />,
    <Club5 />,
    <Club6 />,
    <Club7 />,
    <Club8 />,
    <Club9 />,
    <Club10 />,
    <ClubJ />,
    <ClubQ />,
    <ClubK />,
  ];
  const diamondDeck = [
    <DiamondA />,
    <Diamond2 />,
    <Diamond3 />,
    <Diamond4 />,
    <Diamond5 />,
    <Diamond6 />,
    <Diamond7 />,
    <Diamond8 />,
    <Diamond9 />,
    <Diamond10 />,
    <DiamondJ />,
    <DiamondQ />,
    <DiamondK />,
  ];
  const heartDeck = [
    <HeartA />,
    <Heart2 />,
    <Heart3 />,
    <Heart4 />,
    <Heart5 />,
    <Heart6 />,
    <Heart7 />,
    <Heart8 />,
    <Heart9 />,
    <Heart10 />,
    <HeartJ />,
    <HeartQ />,
    <HeartK />,
  ];
  const spadeDeck = [
    <SpadeA />,
    <Spade2 />,
    <Spade3 />,
    <Spade4 />,
    <Spade5 />,
    <Spade6 />,
    <Spade7 />,
    <Spade8 />,
    <Spade9 />,
    <Spade10 />,
    <SpadeJ />,
    <SpadeQ />,
    <SpadeK />,
  ];

  // props 데이터
  // scale={0.1}
  // position={[0, 1.85, 0]}
  // rotation={[-Math.PI / 2, 0, 0]}

  return {
    clubDeck,
    diamondDeck,
    heartDeck,
    spadeDeck,
  };
}

useGLTF.preload("/models/cardDeck/scene.gltf");

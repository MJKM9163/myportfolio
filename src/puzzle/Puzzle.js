import React from "react";
import { useSelector } from "react-redux";
import Edit from "./components/edit/Edit";
import Welcome from "./components/welcome/Welcome";

const Puzzle = () => {
  const check = useSelector((state) => state.puzzleState.startCheck);
  return <div className="view">{check ? <Edit /> : <Welcome />}</div>;
};

export default Puzzle;

import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setGuideCheck } from "../../../app/puzzleReducer/puzzleState";

const SelectTabBox = styled.div`
  position: absolute;
  width: 200px;
  height: 100vh;
  background-color: #003014;
  z-index: 5;

  .selectTitle {
    margin: 10px 0px;
    text-align: center;
    font-size: 26px;
  }

  .selectObjectBox {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .selectObject {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100px;
      height: 100px;
      transition: 0.3s;
      img {
        width: 75px;
        height: 75px;
      }
      :hover {
        background-color: aqua;
      }
    }
  }
`;

const SelectTab = () => {
  const dispatch = useDispatch();
  const objects = [
    ["square", "사각형"],
    ["triangle", "삼각형"],
    ["circle", "원형"],
    [null, null],
  ];
  return (
    <SelectTabBox>
      <div className="selectTitle">도형 선택</div>
      <div className="selectObjectBox">
        {objects.map(([imgSrc, name], _) => (
          <div
            key={`${imgSrc}Img`}
            className="selectObject"
            onClick={() => {
              dispatch(
                setGuideCheck({
                  handle: {
                    type: "caution",
                    name,
                  },
                })
              );
            }}
          >
            <img src={`imgs/${imgSrc}.png`} alt={`${imgSrc}Img`} />
            <div>{name}</div>
          </div>
        ))}
      </div>
    </SelectTabBox>
  );
};

export default SelectTab;

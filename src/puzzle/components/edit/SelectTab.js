import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setGuideCheck } from "../../../app/puzzleReducer/puzzleState";

const SelectTabBox = styled.div`
  position: absolute;
  width: 200px;
  height: 100vh;
  background-color: rgb(250, 255, 175);
  z-index: 5;

  .selectTitle {
    margin: 10px 0px;
    text-align: center;
    font-size: 26px;
  }

  .objectBox {
    margin-bottom: 30px;
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
          background-color: rgb(197, 202, 143);
        }
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
    ["cylinder", "원통"],
  ];
  const parts = [
    ["partSquare", "다각형"],
    ["partRing", "링"],
    ["partCylinder", "원기둥"],
  ];

  /** 종류, 정보[영문 이름, 한글 이름], 가이드 알림 여부 */
  const selects = [
    ["도형", objects, true],
    ["부품", parts, false],
  ];
  return (
    <SelectTabBox>
      {selects.map(([category, data, check], _) => (
        <div className="objectBox">
          <div className="selectTitle">{category} 선택</div>
          <div className="selectObjectBox">
            {data.map(([imgSrc, name], _) => (
              <div
                key={`${imgSrc}Img`}
                className="selectObject"
                onClick={() => {
                  if (check) {
                    dispatch(
                      setGuideCheck({
                        handle: {
                          type: "caution",
                          name,
                        },
                      })
                    );
                  }
                }}
              >
                <img src={`imgs/${imgSrc}.png`} alt={`${imgSrc}Img`} />
                <div>{name}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </SelectTabBox>
  );
};

export default SelectTab;

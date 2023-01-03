import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setGuideCheck } from "../../app/puzzleReducer/puzzleState";

const GuideBox = styled.div`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 350px;
  height: 120px;
  z-index: 100;

  .caution {
    width: 100%;
    height: 100%;
    background-color: orange;
  }

  .guideText {
    padding-top: 10px;
    text-align: center;
  }

  .guideButBox {
    margin-top: 15px;
    text-align: center;
    button {
      width: 65px;
      height: 30px;
      margin: 0px 20px;
      border: 1px solid black;

      :first-child:hover {
        background-color: rgb(255, 155, 155);
      }
      :last-child:hover {
        background-color: rgb(160, 160, 255);
      }
    }
  }
`;

const Guide = () => {
  const dispatch = useDispatch();
  const { type, name } = useSelector((state) => state.puzzleState.guideCheck);
  return type !== null ? (
    <GuideBox>
      <div className={type}>
        <div className="guideText">
          <b>{name}</b>으로 변경하면 기존 도형은
          <span style={{ color: "red" }}> 제거</span> 됩니다!
          <br />
          변경할까요?
        </div>
        <div className="guideButBox">
          <button
            onClick={() =>
              dispatch(setGuideCheck({ handle: { type: null, name: null } }))
            }
          >
            변경
          </button>
          <button
            onClick={() =>
              dispatch(setGuideCheck({ handle: { type: null, name: null } }))
            }
          >
            취소
          </button>
        </div>
      </div>
    </GuideBox>
  ) : null;
};

export default Guide;

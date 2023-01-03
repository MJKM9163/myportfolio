import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setStartCheck } from "../../../app/puzzleReducer/puzzleState";

const WelcomeBox = styled.div`
  position: relative;
  left: 50%;
  top: 50%;
  width: 300px;
  height: 300px;
  transform: translate(-50%, -50%);
  animation: memoMove 1s forwards;

  img {
    width: 100%;
    height: 100%;
  }

  .wDesc {
    position: absolute;
    top: 0px;
    left: 22px;
    font-size: 16px;

    div {
      margin-top: 20px;
    }
  }

  button {
    position: absolute;
    width: 100px;
    height: 50px;
    left: 50%;
    bottom: -60px;
    transform: translate(-50%);
    border: 1px solid black;
    border-radius: 10px;
    text-align: center;
    background-color: antiquewhite;
    transition: 0.3s;
    opacity: 0;
    animation: butOpacity 1s 1.1s forwards;
    :hover {
      background-color: #ffb95e;
      font-size: 20px;
    }
    :active {
      background-color: #c78632;
    }
  }

  @keyframes butOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes memoMove {
    0% {
      top: -40%;
    }
    100% {
      top: 40%;
    }
  }
`;

const Welcome = () => {
  const dispatch = useDispatch();
  return (
    <WelcomeBox>
      <img src="imgs/memo.png" alt="메모장" />
      <div className="wDesc">
        <div>엄마는 요리 재료를 사러 나갔다 올꺼야</div>
        <div>그동안 심심하지 않게 몇 가지 문제를</div>
        <div>만들어 놨단다.</div>
        <div>똑똑하니깐 엄마가 오기전에</div>
        <div>문제를 다 풀 수 있겠지?</div>
        <div>-사랑하는 엄마가</div>
      </div>

      <button
        onClick={() => {
          dispatch(setStartCheck());
        }}
      >
        시작
      </button>
    </WelcomeBox>
  );
};

export default Welcome;

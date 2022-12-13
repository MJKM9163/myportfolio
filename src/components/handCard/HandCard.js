import React from "react";
import styled from "styled-components";

const HandCardBox = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100vw;
  height: 200px;
  background-color: aliceblue;
  z-index: 500;

  .handCardTopText {
    text-align: center;
  }

  .cardList {
    display: flex;
    justify-content: center;
    .card {
      width: 80px;
      height: 150px;
      border: 1px solid black;
      margin-left: -25px;
      background-color: aqua;
      transition: 0.3s;
      :hover {
        transform: translateY(-10px);
        background-color: #17a7a7;
        z-index: 100;
      }
    }
  }
`;

const HandCard = () => {
  const testArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <HandCardBox>
      <div className="handCardTopText">내가 가지고 있는 카드</div>
      <div className="cardList">
        {/* map으로 카드 리스트 보기 */}
        {testArr.map((card, index) => (
          <div className="card" key={`card_${index}`}>
            {card}
          </div>
        ))}
      </div>
    </HandCardBox>
  );
};

export default HandCard;

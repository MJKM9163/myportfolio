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
      width: 100px;
      height: 150px;
      border: 1px solid black;
      border-radius: 10px;
      margin-left: -25px;
      /* background-color: aqua; */
      transition: 0.3s;
      background-image: url(images/cardImg.png);
      background-size: 1280px 590px; // 이미지 크기
      background-position: 0px 0px; // 이미지 위치
      :hover {
        transform: translateY(-10px);
        background-color: #17a7a7;
        z-index: 100;
      }
    }
    img {
      width: 150px;
      height: 100px;
      object-fit: contain;
    }
  }
`;
// wand
const HandCard = () => {
  const testArr = [0];
  return (
    <HandCardBox>
      <div className="handCardTopText">내가 가지고 있는 카드</div>
      <div className="cardList">
        {/* map으로 카드 리스트 보기 */}
        {testArr.map((card, index) => (
          <div className="card" key={`card_${index}`}>
            {/* <img src="images/cardImg.png" alt="" /> */}
          </div>
        ))}
      </div>
    </HandCardBox>
  );
};

export default HandCard;

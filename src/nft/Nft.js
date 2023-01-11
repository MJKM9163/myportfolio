import React, { useRef, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NftBox = styled.div`
  position: relative;
  width: 80vw;
  height: 80vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: aliceblue;

  .nftCreateBox {
    display: flex;
    width: 100%;
    height: 100%;
    .viewBox {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      text-align: center;
      background-color: #ffe2ac;
      .imgBox {
        width: 90%;
        height: 75%;
        margin-top: 15px;
        background-color: #fff5e2;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        label {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          background-color: #fdff82;
          cursor: pointer;
          :hover {
            background-color: #d4d66d;
          }
        }
        input[type="file"] {
          position: absolute;
          width: 0;
          height: 0;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          border: 0;
        }
      }
      .imgInfo {
        height: 23%;
        padding-top: 10px;
        .imgName {
        }
        .imgSize {
        }
      }
    }

    .inputBox {
      width: 40%;
      /* height: 100%; */
      background-color: #fdff82;
      text-align: center;
      .inputs {
        margin-top: 20px;
      }

      .inputAttri {
        position: relative;
        .attAdd {
          position: absolute;
          top: 0px;
          right: 20px;
          padding: 0px 10px;
          /* background-color: #6f7012; */
          cursor: pointer;
          :hover {
            background-color: #d1d345;
          }
        }
        .attInput {
          margin-bottom: 10px;
        }
      }
    }
  }
`;

const Nft = () => {
  const attRef = useRef();
  const [fileData, setFileData] = useState();
  const [metaData, setMetaData] = useState({
    nftName: null,
    nftDesc: null,
    nftAtt: [
      {
        type: null,
        value: null,
      },
    ],
  });

  function addAttribute() {
    const attNode = document.createElement("div");
    const typeInput = document.createElement("input");
    const valueInput = document.createElement("input");
    typeInput.placeholder = "type";
    valueInput.placeholder = "value";
    attNode.className = "attInput";
    attNode.appendChild(typeInput);
    attNode.appendChild(valueInput);
    attRef.current.appendChild(attNode);
    console.log(attNode);
  }
  return (
    <NftBox>
      <div className="nftCreateBox">
        <div className="viewBox">
          {fileData ? (
            <div className="imgBox">
              <img src={fileData.imgUrl} alt="" />
            </div>
          ) : (
            <div className="imgBox">
              <label htmlFor="fileUp">
                <div>이미지 추가</div>
              </label>
              <input
                type={"file"}
                id={"fileUp"}
                onChange={(e) => {
                  e.preventDefault();
                  let reader = new FileReader();
                  if (e.target.files[0]) {
                    reader.readAsDataURL(e.target.files[0]);
                    reader.onloadend = () => {
                      setFileData({
                        imgUrl: reader.result,
                        imgData: e.target.files[0],
                      });
                    };
                  }
                }}
              />
            </div>
          )}
          {fileData ? (
            <div className="imgInfo">
              <div className="imgName">{fileData.imgData.name}</div>
              <div className="imgSize">{fileData.imgData.size}Byte</div>
            </div>
          ) : null}
        </div>
        <div className="inputBox">
          <div className="inputName inputs">
            <div className="inputTitle">NFT이름</div>
            <input />
          </div>
          <div className="inputDesc inputs">
            <div className="inputTitle">설명</div>
            <textarea />
          </div>
          <div className="inputAttri inputs">
            <div className="inputTitle">속성</div>
            <div className="attAdd" onClick={() => addAttribute()}>
              <FontAwesomeIcon icon="fa-solid fa-add" />
            </div>
            <form
              className="attBox"
              onSubmit={(e) => {
                e.preventDefault();
                console.log(e);
              }}
            >
              <div ref={attRef}>
                <div className="attInput">
                  <input placeholder="type" />
                  <input placeholder="value" />
                </div>
              </div>
              <button>테스트</button>
            </form>
          </div>
        </div>
      </div>
    </NftBox>
  );
};

export default Nft;

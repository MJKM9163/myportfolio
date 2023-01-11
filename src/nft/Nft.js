import React, { useRef, useState } from "react";
import styled from "styled-components";
import { create } from "ipfs-http-client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
window.Buffer = window.Buffer || require("buffer").Buffer;

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
          div {
            margin-bottom: 5px;
          }
        }
      }
    }
  }
`;

const Nft = () => {
  const attRef = useRef();
  const [fileData, setFileData] = useState();
  const [nftInfo, setNftInfo] = useState({
    nftName: "",
    nftDesc: "",
  });
  const [nftAtt, setNftAtt] = useState([
    {
      type: "",
      value: "",
    },
  ]);

  function addAttribute() {
    setNftAtt([
      ...nftAtt,
      {
        type: "",
        value: "",
      },
    ]);
  }

  // 인트라 테스트
  const projectId = process.env.REACT_APP_projectId;
  const projectSecret = process.env.REACT_APP_projectSecret;

  const auth =
    "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");

  const ipfs = create({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
    headers: {
      authorization: auth,
    },
  });

  async function testFunc() {
    const imgUrl = await ipfs.add(fileData.imgData);
    console.log(imgUrl);
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
            <input
              value={nftInfo.nftName}
              onChange={(e) => {
                setNftInfo({ ...nftInfo, nftName: e.target.value });
              }}
            />
          </div>
          <div className="inputDesc inputs">
            <div className="inputTitle">설명</div>
            <textarea
              onChange={(e) =>
                setNftInfo({ ...nftInfo, nftDesc: e.target.value })
              }
            />
          </div>
          <div className="inputAttri inputs">
            <div className="inputTitle">속성</div>
            <div className="attAdd" onClick={() => addAttribute()}>
              <FontAwesomeIcon icon="fa-solid fa-add" />
            </div>
            <div className="attBox">
              <div ref={attRef}>
                <div className="attInput">
                  {nftAtt.map((data, index) => (
                    <div key={index}>
                      <input
                        placeholder="type"
                        value={data.type}
                        onChange={(e) => {
                          let arr = nftAtt;
                          arr[index] = {
                            type: e.target.value,
                            value: nftAtt[index].value,
                          };
                          setNftAtt([...arr]);
                        }}
                      />
                      <input
                        placeholder="value"
                        value={data.value}
                        onChange={(e) => {
                          let arr = nftAtt;
                          arr[index] = {
                            type: nftAtt[index].type,
                            value: e.target.value,
                          };
                          setNftAtt([...arr]);
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <button>NFT 생성!</button>
              <button onClick={() => testFunc()}>테스트 버튼!</button>
            </div>
          </div>
        </div>
      </div>
    </NftBox>
  );
};

export default Nft;

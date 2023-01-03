import React from "react";
import Puzzle from "./puzzle/Puzzle";

function App() {
  // 라우터 적용하기
  // 하나의 페이지로 여러가지 프로젝트 보여주기
  return (
    <div className="view">
      <Puzzle />
    </div>
  );
}

export default App;

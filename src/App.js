import React from "react";
import CanvasIndex from "./canvas/Index";
import HandCard from "./components/handCard/HandCard";

function App() {
  return (
    <div className="view">
      <HandCard />
      <CanvasIndex />
      <div>test</div>
    </div>
  );
}

export default App;

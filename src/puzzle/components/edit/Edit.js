import React from "react";
import Guide from "../../common/Guide";
import Screen from "./Screen";
import SelectTab from "./SelectTab";

const Edit = () => {
  return (
    <div className="view">
      <SelectTab />
      <Guide />
      <Screen />
    </div>
  );
};

export default Edit;

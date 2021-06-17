import React from "react";

import Tab from "../../Components/Workspace-components/Tab.js";
import Dot from "../../Components/Workspace-components/Dot.js";
import "./Workspace.css";

const Workspace = () => {
  return (
    <div className="workspace-container">
      <div className="workspace">
        <div className="three-dots">
          <Dot fill="var(--color-orange)" />
          <Dot fill="--color-sea-green-light" />
          <Dot fill="--color-blue-light" />
        </div>

        <Tab iconName="icon-triangle" backgroundColor="--color-green-light" />
        <Tab iconName="icon-square" backgroundColor="--color-blue-light" />
        <Tab iconName="icon-plus" backgroundColor="--color-grey-dark" />
      </div>
    </div>
  );
};

export default Workspace;

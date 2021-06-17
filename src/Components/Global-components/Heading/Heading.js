import React from "react";

import symbols from "../../../assets/svgs/symbols.svg";
import "./Heading.css";

const Heading = props => {
  return (
    <div className="heading">
      <h2 className="heading-text">{props.headingText}</h2>
      <p className="heading-summary">{props.summary}</p>
      <svg className="heading--icon">
        <use href={symbols + `#${props.iconName}`}></use>
      </svg>
    </div>
  );
};

export default Heading;

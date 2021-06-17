import React from "react";

import symbols from "../../../assets/svgs/symbols.svg";

const ProfitComponents = props => {
  return (
    <div className="profit-component">
      <svg className="profit-component--icon">
        <use href={symbols + `#${props.iconName}`}></use>
      </svg>
      <p className="profit-component--value">
        ${props.profitCompValue}k {props.profitCompName}
      </p>
    </div>
  );
};

export default ProfitComponents;

import React from "react";

import Heading from "../Global-components/Heading/Heading.js";
import ProfitComponents from "./Profit/Profit-components.js";

const Profit = props => {
  return (
    <div className="total-profit">
      <Heading
        headingText="Total Profit"
        summary="September 2020"
        iconName="icon-control-panel-thin"
      />
      <div className="profit-count">
        <h2 className="card-heading-big">${props.profitCount}k</h2>
        <ProfitComponents
          iconName="icon-circle"
          profitCompValue="54.3"
          profitCompName="income"
        />
        <ProfitComponents
          iconName="icon-circle"
          profitCompValue="32.1"
          profitCompName="expenses"
        />
      </div>
    </div>
  );
};

export default Profit;

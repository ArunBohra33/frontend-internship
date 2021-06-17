import React from "react";

import ProgressBar from "./Revenue/Progress-bar.js";
import RevenueAmount from "./Revenue/Revenue-amount.js";
import Search from "./Revenue/Search.js";

const Revenue = () => {
  return (
    <div className="revenue">
      <h2 className="card-heading-small">Outstanding Revenue</h2>

      <div className="revenue-content">
        <ProgressBar />
        <RevenueAmount totalRevenue="21.3" />
        <Search />
      </div>
    </div>
  );
};

export default Revenue;

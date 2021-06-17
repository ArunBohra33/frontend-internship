import React from "react";

const RevenueAmount = props => {
  return (
    <div className="revenue-amount">
      <p className="card-heading-big total-revenue">${props.totalRevenue}k</p>
    </div>
  );
};

export default RevenueAmount;

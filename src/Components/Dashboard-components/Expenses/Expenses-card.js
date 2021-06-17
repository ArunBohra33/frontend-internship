import React from "react";

import symbols from "../../../assets/svgs/symbols.svg";

const ExpensesCard = props => {
  return (
    <div className="expenses-card">
      <div className="expenses-card-head">
        <h3 className="expenses-card-heading">
          ${props.expenseAmount}.<span className="decimal-amount">00</span>
        </h3>
        <svg className="expenses-head-icon">
          <use href={symbols + `#${props.headIconName}`}></use>
        </svg>
        <p className="expenses-date">
          {props.expenseDate} {props.expenseMonth}, {props.expenseYear}
        </p>
      </div>

      <div className="expenses-card-body">
        <svg className="expense-company-logo">
          <use href={symbols + `#${props.companyIconName}`}></use>
        </svg>
        <p className="expense-work">{props.expensesWork}</p>
      </div>
    </div>
  );
};

export default ExpensesCard;

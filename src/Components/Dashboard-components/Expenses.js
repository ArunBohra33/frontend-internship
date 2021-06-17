import React from "react";

import Heading from "../Global-components/Heading/Heading.js";
import ExpensesCard from "./Expenses/Expenses-card";

const Espenses = () => {
  const expensesCardData = [
    {
      expenseAmount: 20,
      headIconName: "icon-clip",
      expenseDate: 23,
      expenseMonth: "Sep",
      expenseYear: 2020,
      companyIconName: "icon-apple-os",
      expensesWork: "Software"
    },

    {
      expenseAmount: 30,
      headIconName: "icon-clip",
      expenseDate: 26,
      expenseMonth: "Sep",
      expenseYear: 2020,
      companyIconName: "icon-apple-os",
      expensesWork: "Management"
    },

    {
      expenseAmount: 60,
      headIconName: "icon-clip",
      expenseDate: 28,
      expenseMonth: "Sep",
      expenseYear: 33,
      companyIconName: "icon-apple-os",
      expensesWork: "Support"
    }
  ];

  const expenseCards = expensesCardData.map((itemData, index) => {
    return (
      <ExpensesCard
        expenseAmount={itemData.expenseAmount}
        headIconName={itemData.headIconName}
        expenseDate={itemData.expenseDate}
        expenseMonth={itemData.expenseMonth}
        expenseYear={itemData.expenseYear}
        companyIconName={itemData.companyIconName}
        expensesWork={itemData.expensesWork}
      />
    );
  });

  return (
    <div className="expenses">
      <Heading
        headingText="Expenses"
        summary=" "
        iconName="icon-arrow-up-right"
      />
      <div className="expenses-card-container">{expenseCards}</div>
    </div>
  );
};

export default Espenses;

import React from "react";

import "./Dashboard.css";

import Ad from "../../Components/Dashboard-components/Ad";
import Expenses from "../../Components/Dashboard-components/Expenses";
import InvoicesAll from "../../Components/Dashboard-components/Invoices-all";
import InvoicesRecent from "../../Components/Dashboard-components/Invoices-recent";
import Profit from "../../Components/Dashboard-components/Profit";
import Revenue from "../../Components/Dashboard-components/Revenue";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="row-first">
        <InvoicesAll />
        <Revenue />
      </div>

      <div className="row-second">
        <Profit profitCount="22.3" />
        <Expenses />
      </div>

      <div className="row-third">
        <InvoicesRecent />
        <Ad />
      </div>
    </div>
  );
};

export default Dashboard;

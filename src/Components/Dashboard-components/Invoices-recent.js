import React from "react";

import Heading from "../Global-components/Heading/Heading";
import RecentInvoiceCard from "./Invoices-recent/Recent-invoice-card";
import InvoiceUpload from "./Invoices-recent/Invoice-upload";

const InvoicesRecent = () => {
  const recentInvoiceDetails = [
    {
      id: "000106",
      name: "Mindtickle",
      date: "2 Sep, 2020",
      state: "Viewed",
      amount: "3,500"
    },
    {
      id: "000105",
      name: "Cleancloud",
      date: "1 Sep, 2020",
      state: "Sent",
      amount: "2,000"
    }
  ];

  const recentInvoiceCard = recentInvoiceDetails.map((itemData, id) => {
    return (
      <RecentInvoiceCard
        recentInvoiceId={itemData.id}
        recentInvoiceName={itemData.name}
        recentInvoiceDate={itemData.date}
        recentInvoiceState={itemData.state}
        recentInvoiceAmount={itemData.amount}
      />
    );
  });

  return (
    <div className="invoices-recent">
      <Heading
        headingText="Invoices"
        summary="recently created"
        iconName="icon-arrow-up-right"
      />
      <div className="invoices-recent-content">
        <InvoiceUpload />
        <div className="recent-invoices-container">{recentInvoiceCard}</div>
      </div>
    </div>
  );
};

export default InvoicesRecent;

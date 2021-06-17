import React from "react";

import InvoiceAllCard from "./Invoices-all/Invoice-all-card";

const InvoicesAll = () => {
  const invoicesAllData = [
    {
      invoiceAmount: 12095,
      invoiceState: "Overdue"
    },
    {
      invoiceAmount: 33363,
      invoiceState: "Total Outstanding"
    },
    {
      invoiceAmount: 4500,
      invoiceState: "In Craft"
    }
  ];

  const invoiceAllCards = invoicesAllData.map((itemData, index) => {
    return (
      <InvoiceAllCard
        invoiceAmount={"$ " + itemData.invoiceAmount.toLocaleString()}
        invoiceState={itemData.invoiceState}
      />
    );
  });

  return (
    <div className="invoices-all">
      <h2 className="card-heading-small">Invoices</h2>

      <div className="all-invoice-cards">{invoiceAllCards}</div>
    </div>
  );
};

export default InvoicesAll;

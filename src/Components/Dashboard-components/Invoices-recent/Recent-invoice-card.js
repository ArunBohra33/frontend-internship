import React from "react";

const RecentInvoiceCard = props => {
  return (
    <div className="recent-invoice-card">
      <div className="recent-invoice-details">
        <p className="recent-invoice-id">#{props.recentInvoiceId}</p>
        <h3 className="recent-invoice-name">{props.recentInvoiceName}</h3>
        <p className="recent-invoice-date">{props.recentInvoiceDate}</p>
      </div>

      <div className="recent-invoice-status">
        <p className="recent-invoice-state">{props.recentInvoiceState}</p>
        <p className="recent-invoice-amount">${props.recentInvoiceAmount}</p>
      </div>
    </div>
  );
};

export default RecentInvoiceCard;

import React from "react";

const InvoiceAllCard = props => {
    return (
        <div className="card-container">
            <p className="invoice-amount">{props.invoiceAmount}</p>
            <p className="invoice-state">{props.invoiceState}</p>
        </div>
    );
};

export default InvoiceAllCard;

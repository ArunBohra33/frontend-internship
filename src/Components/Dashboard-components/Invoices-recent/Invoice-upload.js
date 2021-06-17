import React from "react";

import symbols from "../../../assets/svgs/symbols.svg";

const InvoiceUpload = () => {
  return (
    <div className="invoice-upload">
      <svg className="invoice-upload-box">
        <use href={symbols + "#icon-cloud-upload"}></use>
      </svg>
      <p className="upload-text">Upload invoice</p>
    </div>
  );
};

export default InvoiceUpload;

import React from "react";

const ProgressBar = () => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div className="progress-bar--progress"></div>
      </div>
      <p className="revenue-overdue">$12,095 overdue</p>
    </div>
  );
};

export default ProgressBar;

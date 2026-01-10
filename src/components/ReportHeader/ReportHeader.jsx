import React, { useState } from "react";
import { ChevronDownIcon } from "../../icons";
import "./ReportHeader.css";

function ReportHeader() {
  const [timeframeEnabled, setTimeframeEnabled] = useState(true);

  return (
    <div className="report-header">
      <h1 className="report-header__title">New report</h1>
      <div className="report-header__timeframe">
        <div
          className="toggle"
          onClick={() => setTimeframeEnabled(!timeframeEnabled)}
        >
          <div
            className={`toggle__track ${
              timeframeEnabled ? "toggle__track--active" : ""
            }`}
          >
            <div
              className={`toggle__thumb ${
                timeframeEnabled ? "toggle__thumb--active" : ""
              }`}
            />
          </div>
        </div>
        <span className="report-header__timeframe-label">Timeframe</span>
        <span className="report-header__date-range">
          Sep 1 - Nov 30, 2023
          <ChevronDownIcon />
        </span>
      </div>
    </div>
  );
}

export default ReportHeader;

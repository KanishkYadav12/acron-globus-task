import React from "react";
import "./BreakdownBar.css";

function BreakdownItem({ color, avatarColor, initial, value, percent, flex }) {
  return (
    <div className="breakdown-item" style={{ flex: flex }}>
      <div className="breakdown-item__bar" style={{ background: color }} />
      <div className="breakdown-item__info">
        <span
          className="breakdown-item__avatar"
          style={{ background: avatarColor || color }}
        >
          {initial}
        </span>
        <span className="breakdown-item__value">{value}</span>
        <span className="breakdown-item__percent">{percent}</span>
      </div>
    </div>
  );
}

function BreakdownBar() {
  return (
    <div className="breakdown-bar">
      <div className="breakdown-bar__progress">
        <BreakdownItem
          color="#1a1a1a"
          avatarColor="#e5e7eb"
          initial="A"
          value="$209,633"
          percent="39.63%"
          flex="0.3963"
        />
        <BreakdownItem
          color="#22c55e"
          avatarColor="linear-gradient(135deg, #22c55e, #16a34a)"
          initial="M"
          value="$156,841"
          percent="29.65%"
          flex="0.2965"
        />
        <BreakdownItem
          color="#fbbf24"
          avatarColor="linear-gradient(135deg, #fbbf24, #f59e0b)"
          initial="E"
          value="$117,115"
          percent="22.14%"
          flex="0.2214"
        />
      </div>
      <div className="breakdown-bar__last">
        <span className="breakdown-bar__last-icon">C</span>
        <span className="breakdown-item__value">$45,386</span>
        <span className="breakdown-item__percent">8.58%</span>
      </div>
      <button className="breakdown-bar__details-btn">Details</button>
    </div>
  );
}

export default BreakdownBar;

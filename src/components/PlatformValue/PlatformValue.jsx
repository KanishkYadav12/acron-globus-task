import React, { useState } from "react";
import { ChevronDownIcon } from "../../icons";
import "./PlatformValue.css";

function BarGroup({ month, values, highlight, amount }) {
  return (
    <div className="bar-group">
      <div className="bar-group__amount">{amount}</div>
      <div className="bar-group__bars">
        {values.map((v, i) => (
          <div
            key={i}
            className={`bar-group__bar ${
              i === highlight
                ? "bar-group__bar--highlight"
                : "bar-group__bar--default"
            }`}
            style={{ height: `${v}%` }}
          />
        ))}
      </div>
      <span className="bar-group__month">{month}</span>
      <div className="bar-group__avatars">
        <span className="bar-group__avatar-dot"></span>
        <span className="bar-group__avatar-dot"></span>
      </div>
    </div>
  );
}

function PlatformValue() {
  const [activeTab, setActiveTab] = useState("Revenue");

  return (
    <div className="card">
      <div className="pv-header">
        <div className="pv-title">
          <span className="pv-title__icon">📊</span>
          <div>
            <div className="pv-title__label">Platform value</div>
            <div className="pv-title__platform">
              Dribbble <ChevronDownIcon />
            </div>
          </div>
        </div>
        <div className="pv-tabs">
          {["Revenue", "Leads", "W/L"].map((tab) => (
            <button
              key={tab}
              className={`pv-tabs__tab ${
                activeTab === tab ? "pv-tabs__tab--active" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="pv-content">
        <div className="pv-stats">
          <div className="pv-stats__item">
            <span className="pv-stats__label">Revenue</span>
            <span className="pv-stats__value">$18,552</span>
          </div>
          <div className="pv-stats__item">
            <span className="pv-stats__label">Leads</span>
            <span className="pv-stats__value">
              373 <span className="pv-stats__sub">97/276</span>
            </span>
          </div>
          <div className="pv-stats__item">
            <span className="pv-stats__label">Win/lose</span>
            <span className="pv-stats__value">
              16% <span className="pv-stats__sub">51/318</span>
            </span>
          </div>
        </div>

        <div className="pv-chart">
          <div className="pv-chart__bars">
            <BarGroup
              month="Sep"
              values={[65, 45, 30]}
              highlight={0}
              amount="$6,901"
            />
            <BarGroup
              month="Oct"
              values={[85, 55, 40]}
              highlight={0}
              amount="$11,035"
            />
            <BarGroup
              month="Nov"
              values={[75, 50, 35]}
              highlight={1}
              amount="$9,288"
            />
          </div>
          <div className="pv-chart__y-axis">
            <span>$14,000</span>
            <span>$11,000</span>
            <span>$7,500</span>
            <span>$4,000</span>
          </div>
        </div>
      </div>

      <div className="pv-avatars">
        <div className="pv-avatars__group">
          {["🟠", "🟡", "🟢", "🔵", "🟣"].map((emoji, i) => (
            <span key={i} className="pv-avatars__small">
              {emoji}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlatformValue;

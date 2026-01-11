import React, { useState } from "react";
import { ChevronDownIcon } from "../../icons";
import "./PlatformValue.css";

function BarGroup({
  month,
  values,
  highlightIndex,
  amount,
  isHighlighted,
  avatars,
}) {
  return (
    <div className="bar-group">
      <div
        className={`bar-group__amount ${
          isHighlighted ? "bar-group__amount--highlight" : ""
        }`}
      >
        {amount}
      </div>
      <div className="bar-group__bars">
        {values.map((v, i) => (
          <div
            key={i}
            className={`bar-group__bar ${
              i === highlightIndex
                ? "bar-group__bar--green"
                : "bar-group__bar--striped"
            }`}
            style={{ height: `${v}%` }}
          />
        ))}
      </div>
      <span className="bar-group__month">{month}</span>
      <div className="bar-group__avatars">
        {avatars.map((avatar, i) => (
          <div
            key={i}
            className="bar-group__avatar"
            style={{ backgroundColor: avatar.color }}
          >
            {avatar.image ? (
              <img src={avatar.image} alt="" />
            ) : (
              <span>{avatar.letter}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function PlatformValue() {
  const [activeTab, setActiveTab] = useState("Revenue");

  // Avatar data for each month
  const sepAvatars = [
    { color: "#E5E7EB", letter: "" },
    { color: "#F59E0B", letter: "" },
    { color: "#3B82F6", letter: "" },
  ];

  const octAvatars = [
    { color: "#EC4899", letter: "" },
    { color: "#8B5CF6", letter: "" },
    { color: "#3B82F6", letter: "" },
    { color: "#22C55E", letter: "" },
  ];

  const novAvatars = [
    { color: "#6B7280", letter: "" },
    { color: "#EC4899", letter: "" },
    { color: "#1A1A1A", letter: "" },
  ];

  return (
    <div className="card pv-card">
      {/* HEADER */}
      <div className="pv-header">
        <div className="pv-title">
          <div className="pv-title__icon">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="#EA4C89"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72" />
              <path d="M19.13 5.09c-3.72 4.35-8.94 5.66-16.88 5.85" />
              <path d="M21.75 12.84c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
            </svg>
          </div>
          <div className="pv-title__text">
            <span className="pv-title__label">Platform value</span>
            <button className="pv-title__dropdown">
              Dribbble <ChevronDownIcon />
            </button>
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

      {/* CONTENT */}
      <div className="pv-content">
        {/* LEFT: Stats with rotated label */}
        <div className="pv-stats-wrapper">
          <div className="pv-rotated-label">
            <span>Average monthly</span>
          </div>
          <div className="pv-stats">
            <div className="pv-stats__item">
              <span className="pv-stats__label">Revenue</span>
              <span className="pv-stats__value">$18,552</span>
            </div>
            <div className="pv-stats__item">
              <span className="pv-stats__label">Leads</span>
              <div className="pv-stats__value">
                373 <span className="pv-stats__sub">97/276</span>
              </div>
            </div>
            <div className="pv-stats__item">
              <span className="pv-stats__label">Win/lose</span>
              <div className="pv-stats__value">
                16% <span className="pv-stats__sub">51/318</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Bar Chart */}
        <div className="pv-chart">
          <div className="pv-chart__bars">
            <BarGroup
              month="Sep"
              values={[70, 50, 35]}
              highlightIndex={-1}
              amount="$6,901"
              isHighlighted={false}
              avatars={sepAvatars}
            />
            <BarGroup
              month="Oct"
              values={[95, 70, 50]}
              highlightIndex={-1}
              amount="$11,035"
              isHighlighted={true}
              avatars={octAvatars}
            />
            <BarGroup
              month="Nov"
              values={[80, 60, 45]}
              highlightIndex={-1}
              amount="$9,288"
              isHighlighted={false}
              avatars={novAvatars}
            />
          </div>

          {/* Y-AXIS */}
          <div className="pv-chart__y-axis">
            <span>$14,500</span>
            <span>$11,000</span>
            <span>$7,500</span>
            <span>$4,000</span>
          </div>
        </div>
      </div>

      {/* BOTTOM: User dots */}
      <div className="pv-footer">
        <div className="pv-user-dots">
          <span className="pv-user-dot pv-user-dot--red"></span>
          <span className="pv-user-dot pv-user-dot--orange"></span>
          <span className="pv-user-dot pv-user-dot--green"></span>
          <span className="pv-user-dot pv-user-dot--blue"></span>
          <span className="pv-user-dot pv-user-dot--purple"></span>
        </div>
      </div>
    </div>
  );
}

export default PlatformValue;

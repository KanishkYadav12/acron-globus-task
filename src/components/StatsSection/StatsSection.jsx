import React from "react";
import {
  TrendingUpIcon,
  TrendingDownIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "../../icons";
import "./StatsSection.css";

function StatCard({ title, value, change, isNegative, highlighted, bordered }) {
  return (
    <div
      className={`stat-card ${highlighted ? "stat-card--highlighted" : ""} ${
        bordered ? "stat-card--bordered" : ""
      }`}
    >
      <span className="stat-card__title">{title}</span>
      <div className="stat-card__value">{value}</div>
      <div
        className={`stat-card__change ${
          isNegative
            ? "stat-card__change--negative"
            : "stat-card__change--positive"
        }`}
      >
        {isNegative ? <TrendingDownIcon /> : <TrendingUpIcon />}
        <span>{change}</span>
      </div>
    </div>
  );
}

function StatsSection() {
  return (
    <div className="stats-section">
      {/* Revenue Section - Not a card, just text */}
      <div className="revenue-section">
        <span className="revenue-section__label">Revenue</span>
        <div className="revenue-section__value-row">
          <span className="revenue-section__dollar">$528,976</span>
          <span className="revenue-section__cents">.82</span>
        </div>
        <div className="revenue-section__badge-row">
          <span className="revenue-section__badge">
            <TrendingUpIcon /> 7.9%
          </span>
          <span className="revenue-section__badge">$27,335.09</span>
        </div>
        <div className="revenue-section__prev">
          <span>vs prev. $501,641.73</span>
          <span className="revenue-section__prev-date">
            Jun 1 - Aug 31, 2023
          </span>
          <ChevronDownIcon />
        </div>
      </div>

      {/* Top Sales Card - Separate white card */}
      <div className="stats-card stats-card--white">
        <span className="stats-card__title">Top sales</span>
        <div className="stats-card__value">72</div>
        <div className="stats-card__subtitle">
          <span className="stats-card__avatar stats-card__avatar--green">
            <img src="https://i.pravatar.cc/32?img=5" alt="Mikasa" />
          </span>
          <span>Mikasa</span>
          <ChevronRightIcon />
        </div>
      </div>

      {/* Best Deal Card - Separate BLACK card */}
      <div className="stats-card stats-card--black">
        <div className="stats-card__header">
          <span className="stats-card__title">Best deal</span>
          <span className="stats-card__star">☆</span>
        </div>
        <div className="stats-card__value">$42,300</div>
        <div className="stats-card__footer">
          <span>Rolf Inc.</span>
          <button className="stats-card__action-btn">
            <ChevronRightIcon />
          </button>
        </div>
      </div>

      {/* Individual Stat Cards */}
      <div className="stats-grid">
        <StatCard title="Deals" value="256" change="-5" isNegative />
        <StatCard title="Value" value="528k" change="+7.9%" bordered />
        <StatCard title="Win rate" value="44%" change="+1.2%" />
      </div>
    </div>
  );
}

export default StatsSection;

import React from "react";
import { SalesRow } from "../SalesTable/SalesTable";
import "./SalesDynamic.css";

function SalesDynamic() {
  return (
    <div className="sd-card">
      <div className="sd-header">
        <h3 className="sd-header__title">Sales dynamic</h3>
        <div className="sd-header__right">
          <div className="sd-header__weeks">
            {["W 1", "W 3", "W 5", "W 7", "W 9", "W 11"].map((w) => (
              <span key={w} className="sd-header__week">
                {w}
              </span>
            ))}
          </div>
          <button className="sd-header__expand">↗</button>
        </div>
      </div>

      <div className="sd-chart">
        <svg
          width="100%"
          height="100"
          viewBox="0 0 500 100"
          preserveAspectRatio="none"
        >
          {/* Background gradient */}
          <defs>
            <linearGradient id="chartBg" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fef2f2" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="500" height="100" fill="url(#chartBg)" />

          {/* Secondary dashed line (lighter pink) */}
          <path
            d="M 0 55 C 20 50, 40 60, 60 55 C 80 50, 100 45, 120 50 C 140 55, 160 40, 180 45 C 200 50, 220 55, 240 50 C 260 45, 280 55, 300 50 C 320 45, 340 55, 360 45 C 380 35, 400 40, 420 35 C 440 30, 460 35, 480 30 L 500 25"
            fill="none"
            stroke="#f5c6cb"
            strokeWidth="2"
            strokeDasharray="4,4"
          />

          {/* Primary wavy line (dark pink/red) */}
          <path
            d="M 0 60 C 20 55, 40 65, 60 60 C 80 55, 100 50, 120 55 C 140 60, 160 45, 180 50 C 200 55, 220 60, 240 55 C 260 50, 280 60, 300 55 C 320 50, 340 60, 360 50 C 380 40, 400 45, 420 40 C 440 35, 460 40, 480 35 L 500 30"
            fill="none"
            stroke="#c41e3a"
            strokeWidth="2.5"
          />
        </svg>
      </div>

      {/* Timeline Bar with Gradient */}
      <div className="sd-timeline">
        <div className="sd-timeline__bar">
          <div className="sd-timeline__segment sd-timeline__segment--red"></div>
          <div className="sd-timeline__segment sd-timeline__segment--yellow"></div>
          <div className="sd-timeline__segment sd-timeline__segment--orange"></div>
          <div className="sd-timeline__segment sd-timeline__segment--green"></div>
        </div>

        {/* Platform Markers */}
        <div className="sd-timeline__markers">
          <div className="sd-marker" style={{ left: "15%" }}>
            <div className="sd-marker__icon sd-marker__icon--behance">Bē</div>
            <div className="sd-marker__badge sd-marker__badge--dribbble"></div>
          </div>
          <div className="sd-marker" style={{ left: "50%" }}>
            <div className="sd-marker__icon sd-marker__icon--google">
              <svg viewBox="0 0 24 24" width="14" height="14">
                <circle cx="12" cy="12" r="10" fill="#ea4c89" />
              </svg>
            </div>
            <div className="sd-marker__badge sd-marker__badge--check">✓</div>
          </div>
          <div className="sd-marker" style={{ left: "85%" }}>
            <div className="sd-marker__icon sd-marker__icon--dribbble">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="white">
                <circle cx="12" cy="12" r="10" fill="#4285f4" />
              </svg>
            </div>
            <div className="sd-marker__badge sd-marker__badge--plus">+</div>
          </div>
        </div>
      </div>

      <SalesRow
        avatar="E"
        avatarColor="linear-gradient(135deg, #fbbf24, #f59e0b)"
        name="Eren Y."
        sales="22"
        revenue="$117,115"
        leads="84"
        kpi="0.79"
        winRate="32%"
        wins="7"
        losses="15"
        compact
      />
    </div>
  );
}

export default SalesDynamic;

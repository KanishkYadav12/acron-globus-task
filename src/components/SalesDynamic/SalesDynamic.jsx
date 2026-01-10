import React from "react";
import { SalesRow } from "../SalesTable/SalesTable";
import "./SalesDynamic.css";

function SalesDynamic() {
  return (
    <div className="card sd-card">
      <div className="sd-header">
        <h3 className="card__title">Sales dynamic</h3>
        <div className="sd-header__weeks">
          {["W 1", "W 3", "W 5", "W 7", "W 9", "W 11"].map((w) => (
            <span key={w} className="sd-header__week">
              {w}
            </span>
          ))}
        </div>
      </div>

      <div className="sd-chart">
        <svg
          width="100%"
          height="80"
          viewBox="0 0 400 80"
          preserveAspectRatio="none"
        >
          {/* Pink rising line (primary trend) */}
          <path
            d="M 0 65 Q 50 60 100 55 T 200 45 T 300 25 L 400 15"
            fill="none"
            stroke="#f9a8d4"
            strokeWidth="2.5"
          />
          {/* Dashed gray line (secondary/baseline) */}
          <path
            d="M 0 58 Q 50 55 100 60 T 200 55 T 300 58 L 400 62"
            fill="none"
            stroke="#d1d5db"
            strokeWidth="2"
            strokeDasharray="6,4"
          />

          {/* Behance avatar on dashed line */}
          <circle cx="120" cy="59" r="12" fill="#1769ff" />
          <text
            x="120"
            y="63"
            textAnchor="middle"
            fontSize="8"
            fill="white"
            fontWeight="bold"
          >
            Bē
          </text>

          {/* Google avatar */}
          <circle cx="280" cy="55" r="12" fill="#4285f4" />
          <text
            x="280"
            y="59"
            textAnchor="middle"
            fontSize="9"
            fill="white"
            fontWeight="bold"
          >
            G
          </text>

          {/* Orange avatar on dashed line */}
          <circle cx="380" cy="60" r="12" fill="#f97316" />
          <text
            x="380"
            y="64"
            textAnchor="middle"
            fontSize="7"
            fill="white"
            fontWeight="bold"
          >
            ▶
          </text>

          {/* Pink endpoint dot */}
          <circle cx="395" cy="18" r="5" fill="#f9a8d4" />
        </svg>
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

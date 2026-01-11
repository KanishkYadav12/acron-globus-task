import React from "react";
import { ChevronDownIcon, FilterIcon } from "../../icons";
import "./SalesTable.css";

function SalesRow({
  avatar,
  avatarColor,
  textColor = "white",
  name,
  sales,
  salesColor = "#1a1a1a",
  revenue,
  leads,
  kpi,
  winRate,
  wins,
  losses,
  highlighted,
  badges,
  compact,
}) {
  return (
    <div
      className={`sales-row ${highlighted ? "sales-row--highlighted" : ""} ${
        compact ? "sales-row--compact" : ""
      }`}
    >
      <div className="sales-row__person">
        <div
          className="sales-row__avatar"
          style={{ background: avatarColor, color: textColor }}
        >
          {avatar}
        </div>
        <span className="sales-row__name">{name}</span>
      </div>
      <span className="sales-row__badge" style={{ background: salesColor }}>
        {sales}
      </span>
      <span className="sales-row__revenue">{revenue}</span>
      <span className="sales-row__cell">{leads}</span>
      <span className="sales-row__cell">{kpi}</span>
      <span className="sales-row__cell">{winRate}</span>
      <div className="sales-row__wl">
        <span className="sales-row__wl-win">{wins}</span>
        <span className="sales-row__wl-lose">{losses}</span>
      </div>
      {!compact && (
        <button
          className={`sales-row__expand-btn ${
            highlighted ? "sales-row__expand-btn--pink" : ""
          }`}
        >
          <ChevronDownIcon />
        </button>
      )}
      {highlighted && badges && (
        <div className="sales-row__badges">
          {badges.map((b, i) => (
            <span key={i} className="sales-row__achievement-badge">
              {b}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function SalesTable() {
  return (
    <div className="sales-table-card">
      <div className="table-header">
        <button className="filter-btn">
          Filters <FilterIcon />
        </button>
      </div>

      <div className="sales-table">
        <div className="sales-table__header-row">
          <span></span>
          <span>Sales</span>
          <span>Revenue</span>
          <span>Leads</span>
          <span>KPI</span>
          <span>W/L</span>
          <span></span>
          <span></span>
        </div>

        <SalesRow
          avatar="A"
          avatarColor="#e5e7eb"
          textColor="#1a1a1a"
          name="Armin A."
          sales="41"
          salesColor="#1a1a1a"
          revenue="$209,633"
          leads="118"
          kpi="0.84"
          winRate="31%"
          wins="12"
          losses="29"
        />

        <SalesRow
          avatar="M"
          avatarColor="linear-gradient(135deg, #EC4899, #8B5CF6)"
          name="Mikasa A."
          sales="54"
          salesColor="#1a1a1a"
          revenue="$156,841"
          leads="103"
          kpi="0.89"
          winRate="39%"
          wins="21"
          losses="33"
          highlighted
          badges={["Top sales 💪", "Sales streak 🔥", "Top review 👍"]}
        />
      </div>
    </div>
  );
}

export { SalesRow };
export default SalesTable;

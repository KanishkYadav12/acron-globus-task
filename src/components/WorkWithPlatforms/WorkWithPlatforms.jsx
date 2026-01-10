import React from "react";
import "./WorkWithPlatforms.css";

function WwpItem({ icon, name, percent, amount, color, isNegative }) {
  return (
    <div className="wwp-item">
      <div className="wwp-item__icon" style={{ background: color }}>
        {icon === "instagram" && (
          <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
          </svg>
        )}
        {icon === "google" && "G"}
        {icon === "behance" && "Bē"}
        {icon === "other" && "●"}
      </div>
      <span className="wwp-item__name">{name}</span>
      <span
        className={`wwp-item__percent ${
          isNegative
            ? "wwp-item__percent--negative"
            : "wwp-item__percent--positive"
        }`}
      >
        {isNegative ? "▼" : "▲"} {percent}
      </span>
      <span className="wwp-item__amount">{amount}</span>
    </div>
  );
}

function WorkWithPlatforms() {
  return (
    <div className="card wwp-card">
      <div className="wwp-header">
        <h3 className="wwp-header__title">Work with platforms</h3>
        <div className="wwp-header__total">
          <span className="wwp-header__badge">💎 3</span>
          <span className="wwp-header__amount">$156,841</span>
        </div>
      </div>

      <div className="wwp-grid">
        <div className="wwp-main">
          {/* Donut Chart */}
          <div className="wwp-donut">
            <svg viewBox="0 0 100 100" className="wwp-donut__svg">
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#f3f4f6"
                strokeWidth="12"
              />
              {/* Dribbble segment - 45.3% */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#ea4c89"
                strokeWidth="12"
                strokeDasharray="113.4 251.2"
                strokeDashoffset="0"
                transform="rotate(-90 50 50)"
              />
              {/* Google segment - 28.1% */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#4285f4"
                strokeWidth="12"
                strokeDasharray="70.5 251.2"
                strokeDashoffset="-113.4"
                transform="rotate(-90 50 50)"
              />
              {/* Instagram segment - 14.1% */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#E4405F"
                strokeWidth="12"
                strokeDasharray="35.4 251.2"
                strokeDashoffset="-183.9"
                transform="rotate(-90 50 50)"
              />
              {/* Other segments */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#1769ff"
                strokeWidth="12"
                strokeDasharray="13.6 251.2"
                strokeDashoffset="-219.3"
                transform="rotate(-90 50 50)"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#9ca3af"
                strokeWidth="12"
                strokeDasharray="17.8 251.2"
                strokeDashoffset="-232.9"
                transform="rotate(-90 50 50)"
              />
            </svg>
            <div className="wwp-donut__icon">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="#ea4c89">
                <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0z" />
              </svg>
            </div>
          </div>
          <div className="wwp-main__label">Dribbble</div>
          <div className="wwp-main__value">
            <span className="wwp-main__percent">45.3%</span>
            <span className="wwp-main__price">$71,048</span>
          </div>
        </div>

        <div className="wwp-side">
          <WwpItem
            icon="instagram"
            name="Instagram"
            percent="14.1%"
            amount="$22,114"
            color="#E4405F"
          />
          <WwpItem
            icon="google"
            name="Google"
            percent="28.1%"
            amount="$44,072"
            color="#4285F4"
            isNegative
          />
          <WwpItem
            icon="behance"
            name="Behance"
            percent="5.4%"
            amount="$8,469"
            color="#1769ff"
            isNegative
          />
          <WwpItem
            icon="other"
            name="Other"
            percent="7.1%"
            amount="$11,135"
            color="#9ca3af"
          />
        </div>
      </div>
    </div>
  );
}

export default WorkWithPlatforms;

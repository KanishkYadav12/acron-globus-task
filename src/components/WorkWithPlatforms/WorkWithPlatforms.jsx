import React from "react";
import "./WorkWithPlatforms.css";

function WwpItem({ icon, name, percent, amount, color, isLight }) {
  return (
    <div className="wwp-item">
      <div className="wwp-item__header">
        <div
          className={`wwp-item__icon ${isLight ? "wwp-item__icon--light" : ""}`}
          style={{ background: color }}
        >
          {icon === "instagram" && (
            <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
            </svg>
          )}
          {icon === "google" && (
            <svg viewBox="0 0 24 24" width="12" height="12">
              <path
                fill="#fff"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#fff"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
            </svg>
          )}
          {icon === "behance" && "●●"}
          {icon === "other" && (
            <svg
              viewBox="0 0 24 24"
              width="12"
              height="12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          )}
        </div>
        <span className="wwp-item__name">{name}</span>
      </div>
      <div className="wwp-item__stats">
        <span className="wwp-item__percent">{percent}</span>
        <span className="wwp-item__amount">{amount}</span>
      </div>
    </div>
  );
}

function WorkWithPlatforms() {
  return (
    <div className="wwp-card">
      <div className="wwp-header">
        <h3 className="wwp-header__title">Work with platforms</h3>
        <div className="wwp-header__total">
          <span className="wwp-header__badge">⬆ 3</span>
          <span className="wwp-header__amount">$156,841</span>
        </div>
      </div>

      <div className="wwp-grid">
        <div className="wwp-main">
          {/* Dribbble Icon */}
          <div className="wwp-main__icon">
            <svg
              viewBox="0 0 24 24"
              width="28"
              height="28"
              fill="none"
              stroke="#ea4c89"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
            </svg>
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
            color="linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)"
          />
          <WwpItem
            icon="google"
            name="Google"
            percent="28.1%"
            amount="$44,072"
            color="#4285F4"
          />
          <WwpItem
            icon="behance"
            name="Behance"
            percent="5.4%"
            amount="$8,469"
            color="#1a1a1a"
          />
          <WwpItem
            icon="other"
            name="Other"
            percent="7.1%"
            amount="$11,135"
            color="#f5f4f2"
            isLight
          />
        </div>
      </div>
    </div>
  );
}

export default WorkWithPlatforms;

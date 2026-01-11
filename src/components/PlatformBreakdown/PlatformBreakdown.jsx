import React from "react";
import { ChevronDownIcon, FilterIcon, SortIcon } from "../../icons";
import "./PlatformBreakdown.css";

function PlatformRow({ icon, name, value, percent }) {
  return (
    <div className="platform-row">
      <div className={`platform-row__icon platform-row__icon--${icon}`}>
        {icon === "dribbble" && (
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
            <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm7.938 5.5a10.18 10.18 0 0 1 2.312 6.375c-.337-.063-3.75-.75-7.187-.313-.063-.125-.125-.25-.188-.375-.187-.438-.375-.875-.562-1.313 3.75-1.5 5.438-3.687 5.625-3.937v-.437zM12 1.75c2.688 0 5.125 1 7 2.625-.188.25-1.688 2.25-5.25 3.563C12 4.75 10 2.312 9.687 1.937A10.287 10.287 0 0 1 12 1.75zM7.812 2.625c.25.313 2.188 2.75 4 5.813-5.063 1.375-9.5 1.312-9.938 1.312.688-3.125 2.875-5.75 5.938-7.125zM1.75 12v-.313c.438.013 5.625.125 11.063-1.562.313.625.625 1.25.875 1.875l-.438.125c-5.687 1.875-8.687 6.937-8.875 7.25A10.196 10.196 0 0 1 1.75 12zm10.25 10.25c-2.375 0-4.562-.813-6.313-2.188.125-.25 2.375-4.625 8.625-6.75h.063c1.563 4.063 2.188 7.438 2.375 8.438a10.206 10.206 0 0 1-4.75 1.5zm6.438-2.5c-.125-.688-.688-3.938-2.125-7.938 3.25-.5 6.063.375 6.437.5-.437 2.938-2.125 5.5-4.312 7.438z" />
          </svg>
        )}
        {icon === "instagram" && (
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        )}
        {icon === "behance" && "Bē"}
        {icon === "google" && (
          <svg viewBox="0 0 24 24" width="14" height="14">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
        )}
      </div>
      <span className="platform-row__name">{name}</span>
      <span className="platform-row__value">{value}</span>
      <span className="platform-row__percent">{percent}</span>
    </div>
  );
}

function PlatformBreakdown() {
  return (
    <div className="card platform-breakdown">
      <div className="card__header">
        <div className="card__header-left">
          <button className="sort-btn">
            <SortIcon />
            <ChevronDownIcon />
          </button>
        </div>
        <button className="filter-btn">
          Filters <FilterIcon />
        </button>
      </div>

      <div className="platform-list">
        <PlatformRow
          icon="dribbble"
          name="Dribbble"
          value="$227,459"
          percent="43%"
        />
        <PlatformRow
          icon="instagram"
          name="Instagram"
          value="$142,823"
          percent="27%"
        />
        <PlatformRow
          icon="behance"
          name="Behance"
          value="$89,935"
          percent="11%"
        />
        <PlatformRow icon="google" name="Google" value="$37,028" percent="7%" />
      </div>
    </div>
  );
}

export default PlatformBreakdown;

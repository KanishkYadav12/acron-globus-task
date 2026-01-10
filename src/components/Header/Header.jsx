import React from "react";
import { SearchIcon, FilterIcon, PlusIcon } from "../../icons";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__search-bar">
        <SearchIcon />
        <input
          type="text"
          placeholder='Try searching "insights"'
          className="header__search-input"
        />
      </div>
      <div className="header__right">
        <button className="header__icon-btn">
          <FilterIcon />
        </button>
        <div className="header__avatar header__avatar--gold">
          <span>🤍</span>
        </div>
        <button className="header__add-button">
          <PlusIcon />
        </button>
      </div>
    </header>
  );
}

export default Header;

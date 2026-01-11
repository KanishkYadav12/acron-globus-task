import React from "react";
import { SearchIcon, MenuIcon, PlusIcon } from "../../icons";
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
          <MenuIcon />
        </button>
        <div className="header__avatar">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=100&h=100&fit=crop"
            alt="avatar"
            className="header__avatar-img"
          />
        </div>
        <button className="header__add-button">
          <PlusIcon />
        </button>
      </div>
    </header>
  );
}

export default Header;

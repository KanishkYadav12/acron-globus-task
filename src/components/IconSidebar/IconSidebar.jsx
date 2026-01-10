import React from "react";
import {
  HomeIcon,
  GridIcon,
  CommandIcon,
  ClipIcon,
  SettingsIcon,
} from "../../icons";
import "./IconSidebar.css";

function IconSidebar() {
  return (
    <div className="icon-sidebar">
      <div className="icon-sidebar__logo">C</div>
      <div className="icon-sidebar__nav">
        <button className="icon-sidebar__btn icon-sidebar__btn--muted">
          <HomeIcon />
        </button>
        <button className="icon-sidebar__btn icon-sidebar__btn--active">
          <GridIcon />
        </button>
        <div className="icon-sidebar__btn-with-badge">
          <button className="icon-sidebar__btn">
            <CommandIcon />
          </button>
          <span className="icon-sidebar__badge">2</span>
        </div>
        <button className="icon-sidebar__btn">
          <ClipIcon />
        </button>
      </div>
      <div className="icon-sidebar__nav-bottom">
        <div className="icon-sidebar__notification-dot"></div>
        <button className="icon-sidebar__btn">
          <SettingsIcon />
        </button>
      </div>
    </div>
  );
}

export default IconSidebar;

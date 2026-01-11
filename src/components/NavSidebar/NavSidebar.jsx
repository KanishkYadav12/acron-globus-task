import React from "react";
import {
  StarIcon,
  ClockIcon,
  ListIcon,
  TargetIcon,
  LayoutIcon,
  KeyIcon,
  PlusIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "../../icons";
import "./NavSidebar.css";

function NavItem({ icon, label, hasPlus, expanded, children, noIcon }) {
  return (
    <div className="nav-item-container">
      <div className="nav-item">
        {!noIcon && <span className="nav-item__icon">{icon}</span>}
        <span className="nav-item__label">{label}</span>
        {hasPlus && (
          <span className="nav-item__plus">
            <PlusIcon />
          </span>
        )}
        {children && (expanded ? <ChevronUpIcon /> : <ChevronDownIcon />)}
      </div>
      {expanded && children && (
        <div className="nav-item__nested">{children}</div>
      )}
    </div>
  );
}

function NavSubItem({
  label,
  expanded,
  indent,
  children,
  badge,
  isNew,
  hasLine,
}) {
  return (
    <div
      className={`nav-sub-item-container ${
        hasLine ? "nav-sub-item-container--has-line" : ""
      }`}
    >
      <div className={`nav-sub-item ${indent ? "nav-sub-item--indent" : ""}`}>
        {indent && <span className="nav-sub-item__connector"></span>}
        <span
          className={`nav-sub-item__label ${
            isNew ? "nav-sub-item__label--new" : ""
          }`}
        >
          {label}
        </span>
        {badge && <span className="nav-sub-item__badge">{badge}</span>}
        {children && (expanded ? <ChevronUpIcon /> : <ChevronDownIcon />)}
      </div>
      {expanded && children && (
        <div className="nav-sub-item__nested">{children}</div>
      )}
    </div>
  );
}

function NavSidebar() {
  return (
    <div className="nav-sidebar">
      <div className="nav-sidebar__brand">
        <span className="nav-sidebar__brand-text">Codename.com</span>
        <ChevronDownIcon />
      </div>

      <nav className="nav-sidebar__nav">
        <NavItem icon={<StarIcon />} label="Starred" />
        <NavItem icon={<ClockIcon />} label="Recent" />
        <NavItem label="Sales list" noIcon />
        <NavItem label="Goals" noIcon />
        <NavItem label="Dashboard" noIcon hasPlus expanded>
          <NavSubItem label="Codename" indent hasLine />
          <NavSubItem label="Shared with me" indent hasLine expanded>
            <NavSubItem label="Cargo2go" indent hasLine />
            <NavSubItem label="Cloudz3r" indent hasLine badge="2" />
            <NavSubItem label="Idioma" indent hasLine />
            <NavSubItem label="Syllables" indent hasLine />
            <NavSubItem label="x-0b" indent hasLine />
          </NavSubItem>
        </NavItem>

        <div className="nav-section">
          <div className="nav-section__header">
            <span>Reports</span>
            <PlusIcon />
          </div>
          <NavSubItem label="Share with me" expanded>
            <NavSubItem label="Deals by user" indent hasLine />
            <NavSubItem label="Deal duration" indent hasLine />
          </NavSubItem>
          <NavSubItem label="My reports" expanded>
            <NavSubItem label="Emails received" indent hasLine />
            <NavSubItem label="Deal duration" indent hasLine />
            <NavSubItem label="New report" indent hasLine isNew />
          </NavSubItem>
          <NavSubItem label="Analytics" badge="7" />
        </div>

        <NavItem icon={<KeyIcon />} label="Manage folders" />
      </nav>
    </div>
  );
}

export default NavSidebar;

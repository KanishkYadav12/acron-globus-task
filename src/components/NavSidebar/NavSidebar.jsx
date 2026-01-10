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

function NavItem({ icon, label, hasPlus, expanded, children }) {
  return (
    <div className="nav-item-container">
      <div className="nav-item">
        <span className="nav-item__icon">{icon}</span>
        <span className="nav-item__label">{label}</span>
        {hasPlus && (
          <span className="nav-item__plus">
            <PlusIcon />
          </span>
        )}
        {children && <ChevronUpIcon />}
      </div>
      {expanded && children && (
        <div className="nav-item__nested">{children}</div>
      )}
    </div>
  );
}

function NavSubItem({ label, expanded, indent, children, badge, isNew }) {
  return (
    <div className="nav-sub-item-container">
      <div className={`nav-sub-item ${indent ? "nav-sub-item--indent" : ""}`}>
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
        <NavItem icon={<ListIcon />} label="Sales list" />
        <NavItem icon={<TargetIcon />} label="Goals" />
        <NavItem icon={<LayoutIcon />} label="Dashboard" hasPlus expanded>
          <NavSubItem label="Codename" />
          <NavSubItem label="Shared with me" expanded>
            <NavSubItem label="Cargo2go" indent />
            <NavSubItem label="Cloudz3r" indent />
            <NavSubItem label="Idioma" indent />
            <NavSubItem label="Syllables" indent />
            <NavSubItem label="x-0b" indent />
          </NavSubItem>
        </NavItem>

        <div className="nav-section">
          <div className="nav-section__header">
            <span>Reports</span>
            <PlusIcon />
          </div>
          <NavSubItem label="Share with me" expanded>
            <NavSubItem label="Deals by user" indent />
            <NavSubItem label="Deal duration" indent />
          </NavSubItem>
          <NavSubItem label="My reports" expanded>
            <NavSubItem label="Emails received" indent />
            <NavSubItem label="Deal duration" indent />
            <NavSubItem label="New report" indent isNew />
          </NavSubItem>
          <NavSubItem label="Analytics" badge="7" />
        </div>

        <NavItem icon={<KeyIcon />} label="Manage folders" />
      </nav>
    </div>
  );
}

export default NavSidebar;

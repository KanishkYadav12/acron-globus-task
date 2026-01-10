import React from "react";
import { PlusIcon, FilterIcon, DownloadIcon, ShareIcon } from "../../icons";
import "./TeamRow.css";

function TeamAvatar({ name, color, initial, textColor = "#1a1a1a" }) {
  return (
    <div className="team-avatar">
      <div
        className="team-avatar__icon"
        style={{ background: color, color: textColor }}
      >
        {initial}
      </div>
      <span className="team-avatar__name">{name}</span>
    </div>
  );
}

function TeamRow() {
  return (
    <div className="team-row">
      <button className="team-row__add-btn">
        <PlusIcon />
      </button>
      <TeamAvatar name="Armin A." color="#f0f0f0" initial="A" />
      <TeamAvatar
        name="Eren Y."
        color="linear-gradient(135deg, #fbbf24, #f59e0b)"
        initial="E"
        textColor="white"
      />
      <TeamAvatar
        name="Mikasa A."
        color="linear-gradient(135deg, #22c55e, #16a34a)"
        initial="M"
        textColor="white"
      />
      <div className="team-row__avatar-c">C</div>
      <div className="team-row__spacer" />
      <button className="team-row__icon-btn">
        <FilterIcon />
      </button>
      <button className="team-row__icon-btn">
        <DownloadIcon />
      </button>
      <button className="team-row__icon-btn">
        <ShareIcon />
      </button>
    </div>
  );
}

export default TeamRow;

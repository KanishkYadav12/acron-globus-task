import React from "react";
import "./BreakdownBar.css";

const breakdownData = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/32?img=12",
    avatarType: "image",
    amount: "$209,633",
    percentage: "39.63%",
    color: "#1a1a1a",
  },
  {
    id: 2,
    avatar: "M",
    avatarType: "initial",
    amount: "$156,841",
    percentage: "29.65%",
    color: "#3b82f6",
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/32?img=5",
    avatarType: "image",
    amount: "$117,115",
    percentage: "22.14%",
    color: "#f97316",
  },
  {
    id: 4,
    avatar: "C",
    avatarType: "initial",
    amount: "$45,386",
    percentage: "8.58%",
    color: "#1a1a1a",
  },
];

function BreakdownBar() {
  return (
    <div className="breakdown-bar">
      <div className="breakdown-container">
        {breakdownData.map((item) => (
          <div key={item.id} className="breakdown-item">
            <div className="breakdown-item-left">
              <div
                className="breakdown-item__avatar"
                style={{ background: item.color }}
              >
                {item.avatarType === "image" ? (
                  <img
                    src={item.avatar}
                    alt="User"
                    className="breakdown-item__avatar-img"
                  />
                ) : (
                  <span className="breakdown-item__avatar-initial">
                    {item.avatar}
                  </span>
                )}
              </div>
              <span className="breakdown-item__amount">{item.amount}</span>
            </div>
            <span className="breakdown-item__percentage">
              {item.percentage}
            </span>
          </div>
        ))}
      </div>

      <button className="breakdown-bar__details-btn">Details</button>
    </div>
  );
}

export default BreakdownBar;

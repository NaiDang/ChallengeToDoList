import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
const index = ({ setActiveTab, activeTab }) => {
  const isActive = activeTab === "all";
  return (
    <div className="navigation-all" onClick={() => setActiveTab("all")}>
      <div className={`navigation-bar ${isActive ? "active" : ""}`}>
        <Link to="/" >
          All
        </Link>
      </div>
    </div>
  );
};

export default index;

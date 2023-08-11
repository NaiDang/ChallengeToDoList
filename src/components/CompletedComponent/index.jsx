import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
const index = ({ setActiveTab, activeTab }) => {
  const isActive = activeTab === "completed";
  return (
    <div className="navigation-completed"  onClick={() => setActiveTab("completed")}>
      <div className={`navigation-bar ${isActive ? "active" : ""}`}>
        <Link to="/">
          Completed
        </Link>
      </div>
    </div>
  );
};

export default index;

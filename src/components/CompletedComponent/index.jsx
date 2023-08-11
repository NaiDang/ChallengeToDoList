import React from "react";
import styles from "./completedStyle.module.css";
import { Link } from "react-router-dom";

const index = ({ setActiveTab, activeTab }) => {
  const isActive = activeTab === "completed";

  return (
    <div
      className={styles.navigationCompleted}
      onClick={() => setActiveTab("completed")}
    >
      <div
        className={`${styles.navigationBar} ${isActive ? styles.active : ""}`}
      >
        <Link to="/">Completed</Link>
      </div>
    </div>
  );
};

export default index;

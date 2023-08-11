import React from "react";
import styles from "./activeStyle.module.css";
import { Link } from "react-router-dom";

const index = ({ setActiveTab, activeTab }) => {
  const isActive = activeTab === "active";

  return (
    <div
      className={styles.navigationActive}
      onClick={() => setActiveTab("active")}
    >
      <div
        className={`${styles.navigationBar} ${isActive ? styles.active : ""}`}
      >
        <Link to="/">Active</Link>
      </div>
    </div>
  );
};

export default index;

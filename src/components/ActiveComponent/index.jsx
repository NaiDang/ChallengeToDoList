import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom';
const index = ({ setActiveTab,  activeTab }) => {
  const isActive = activeTab === 'active';
  return (
    <div className="navigation-active" onClick={() => setActiveTab('active')}>
    <div className={`navigation-bar ${isActive ? 'active' : ''}`}>
    <Link to="/">Active</Link>
    </div>
  </div>
  )
}

export default index

import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom';
const index = ({ setActiveTab, activeTab  }) => {
  const isActive = activeTab === 'completed';
  return (
    <div className="navigation-completed">
    <div className={`navigation-bar ${isActive ? 'active' : ''}`}>
    <Link to="/" onClick={() => setActiveTab('completed')}>Completed</Link>
    </div>
  </div>
  )
}

export default index

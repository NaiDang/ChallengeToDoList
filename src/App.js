import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import NavComponent from './components/NavComponent';
import HomeComponent from './components/HomeComponent';
import ActiveComponent from './components/ActiveComponent';
import CompletedComponent from './components/CompletedComponent';


const App = () => {
  const [activeTab, setActiveTab] = useState('all');
  return (
    <Router>
      <div className="container">
        <div className="header">#todo</div>
          <div className="navigation">
            <HomeComponent setActiveTab={setActiveTab} activeTab={activeTab}></HomeComponent>
            <ActiveComponent setActiveTab={setActiveTab} activeTab={activeTab}></ActiveComponent>
            <CompletedComponent setActiveTab={setActiveTab} activeTab={activeTab}></CompletedComponent>
          </div>
          <Routes>
            <Route path="/" element={<NavComponent activeTab={activeTab} />} />
          </Routes>
        </div>
    </Router>
  )
}


export default App

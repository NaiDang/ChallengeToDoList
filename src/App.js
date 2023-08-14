import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import NavComponent from './components/NavComponent/Index';
import HomeComponent from './components/HomeComponent/Index';
import ActiveComponent from './components/ActiveComponent/Index';
import CompletedComponent from './components/CompletedComponent/Index';


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

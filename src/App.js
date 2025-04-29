import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Services from './components/Services';
import RoiCalculator from './components/RoiCalculator';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/services" element={<Services />} />
          <Route path="/roi-calculator" element={<RoiCalculator />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;

// src/components/RoiCalculator.js
import React, { useState } from 'react';
import Footer from './Footer';
import './RoiCalculator.css';

const RoiCalculator = () => {
  const [investment, setInvestment] = useState('');
  const [revenue, setRevenue] = useState('');
  const [costs, setCosts] = useState('');
  const [months, setMonths] = useState('');
  const [roi, setRoi] = useState(null);

  const calculateROI = () => {
    const inv = parseFloat(investment);
    const rev = parseFloat(revenue);
    const cost = parseFloat(costs);
    const duration = parseInt(months);

    if (!inv || !rev || !cost || !duration) {
      setRoi('Please fill all fields correctly.');
      return;
    }

    const totalProfit = (rev - cost) * duration;
    const roiValue = ((totalProfit / inv) * 100).toFixed(2);

    setRoi(`Net Profit: ₹${totalProfit.toFixed(2)} | ROI: ${roiValue}%`);
  };

  return (
    <div>
    <section id="roi-calculator">
      <h2>ROI Calculator</h2>
      <div className="roi-form">
        <input
          type="number"
          placeholder="Initial Investment (₹)"
          value={investment}
          onChange={(e) => setInvestment(e.target.value)}
        />
        <input
          type="number"
          placeholder="Monthly Revenue (₹)"
          value={revenue}
          onChange={(e) => setRevenue(e.target.value)}
        />
        <input
          type="number"
          placeholder="Monthly Costs (₹)"
          value={costs}
          onChange={(e) => setCosts(e.target.value)}
        />
        <input
          type="number"
          placeholder="Duration (months)"
          value={months}
          onChange={(e) => setMonths(e.target.value)}
        />
        <button onClick={calculateROI}>Calculate ROI</button>
        {roi && <p className="roi-result">{roi}</p>}
      </div>
    </section>
    <Footer />
    </div>
  );
};

export default RoiCalculator;

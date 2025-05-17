import React, { useState } from 'react';
import './Depo.css';

function DepCalculator() {
  const [amount, setAmount] = useState(1000000);
  const [duration, setDuration] = useState(12);
  const [interestPayout, setInterestPayout] = useState('On Maturity');

  const calculateMaturity = () => {
    const interestRate = duration >= 12 && duration <= 24 ? 7.25 : 6.7;
    const interest = (amount * interestRate * duration) / (100 * 12);
    const maturityAmount = amount + interest;
    return {
      interestRate,
      interest: interest.toFixed(2),
      maturityAmount: maturityAmount.toFixed(2),
    };
  };

  const { interestRate, interest, maturityAmount } = calculateMaturity();

  return (
    <div>
    <div>
        <header className="header">
        <h1>Higher Returns, Complete Security.</h1>
        <p>Your Bank offers FD interest rates as high as 7.25% p.a.</p>
        </header>
    </div>

    <div className="fd-calculator">
        <header className="header">
        <h1>Higher Returns, Complete Security.</h1>
        <p>Your Bank offers FD interest rates as high as 7.25% p.a.</p>
      </header>
      <div className="input-section">
        <label>How Much Amount Do You Want To Invest?</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        <label>For How Many Months?</label>
        <select
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
        >
          <option value={6}>6 Months</option>
          <option value={12}>12 Months</option>
          <option value={24}>24 Months</option>
        </select>

        <label>When Would You Like To Receive The Interest?</label>
        <div className="interest-payout-buttons">
          <button
            className={interestPayout === 'On Maturity' ? 'active' : ''}
            onClick={() => setInterestPayout('On Maturity')}
          >
            On Maturity
          </button>
          <button
            className={interestPayout === 'Monthly' ? 'active' : ''}
            onClick={() => setInterestPayout('Monthly')}
          >
            Monthly
          </button>
          <button
            className={interestPayout === 'Quarterly' ? 'active' : ''}
            onClick={() => setInterestPayout('Quarterly')}
          >
            Quarterly
          </button>
        </div>
      </div>

      <div className="result-section">
        <h3>Interest Rate: {interestRate}%</h3>
        <p>Total Interest: ₹{interest}</p>
        <p>Maturity Amount: ₹{maturityAmount}</p>
        <p>Interest Payout: {interestPayout}</p>
      </div>
    </div>
    </div>
  );
}

export default DepCalculator;
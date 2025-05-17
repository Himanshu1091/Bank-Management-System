import React, { useState } from 'react';
import './FDCaculatorPage.css'; // Add this import for custom styling

function FDCaculatorPage() {
    const [principal, setPrincipal] = useState('');
    const [rate, setRate] = useState('');
    const [years, setYears] = useState('');
    const [maturityAmount, setMaturityAmount] = useState(null);

    const handleCalculate = () => {
        if (principal && rate && years) {
            const result = principal * Math.pow(1 + rate / 100, years);
            setMaturityAmount(result);
        }
    };

    return (
        <div className="fd-calculator-container Fd-body">
            <div className="fd-calculator-form">
                <h2>Fixed Deposit Calculator</h2>
                <div className="fd-input-group">
                    <label>Principal Amount:</label>
                    <input
                        type="number"
                        value={principal}
                        onChange={(e) => setPrincipal(e.target.value)}
                        placeholder="Enter Principal Amount"
                    />
                </div>
                <div className="fd-input-group">
                    <label>Rate of Interest:</label>
                    <input
                        type="number"
                        value={rate}
                        onChange={(e) => setRate(e.target.value)}
                        placeholder="Enter Rate of Interest"
                    />
                </div>
                <div className="fd-input-group">
                    <label>Duration (in years):</label>
                    <input
                        type="number"
                        value={years}
                        onChange={(e) => setYears(e.target.value)}
                        placeholder="Enter Duration"
                    />
                </div>
                <button className="fd-calculate-btn" onClick={handleCalculate}>Calculate</button>

                {maturityAmount !== null && (
                    <div className="fd-result">
                        <h3>Maturity Amount: ₹{maturityAmount.toFixed(2)}</h3>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FDCaculatorPage;

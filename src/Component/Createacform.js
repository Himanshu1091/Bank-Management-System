import React from "react";
import "./about.css";

const BankAccountForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account successfully created!");
  };

  return (
    <div className="container mt-5 mb-2">
      <h2 className="text-center mb-4">Create Bank Account</h2>
      <form onSubmit={handleSubmit} className="bank-form shadow p-4 rounded">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            placeholder="Enter your phone number"
            pattern="[0-9]{10}"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="aadhar" className="form-label">
            Aadhar Number
          </label>
          <input
            type="number"
            className="form-control"
            id="aadhar"
            placeholder="Enter your aadhar number"
            pattern="657865658656"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="pan" className="form-label">
            Pancard Number
          </label>
          <input
            type="text"
            className="form-control"
            id="pancard"
            placeholder="Enter your pan number"
            
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <textarea
            className="form-control"
            id="address"
            rows="3"
            placeholder="Enter your address"
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="accountType" className="form-label">
            Account Type
          </label>
          <select className="form-select" id="accountType" required>
            <option value="">Select account type</option>
            <option value="savings">Savings Account</option>
            <option value="current">Current Account</option>
            <option value="fixed">Fixed Deposit</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter a secure password"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter a password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Create Account
        </button>
        <div className="text-center mt-2">
        <p>Have an account. <a href="#link" className="text-decoration-none text-success ">SignIn</a></p>

        </div>
      </form>
    </div>
  );
};

export default BankAccountForm;

import React, { useState } from "react";

const CurrentAccountPage = () => {
  const [accountHolderName, setAccountHolderName] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [initialDeposit, setInitialDeposit] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      accountHolderName === "" ||
      address === "" ||
      contactNumber === "" ||
      email === "" ||
      initialDeposit === ""
    ) {
      setError("Please fill in all fields.");
    } else {
      // Call API to open current account
      console.log("Account Holder Name:", accountHolderName);
      console.log("Address:", address);
      console.log("Contact Number:", contactNumber);
      console.log("Email:", email);
      console.log("Initial Deposit:", initialDeposit);
    }
  };

  return (
    <div style={{ backgroundColor: "#f5f5dc", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Open Current Account</h1>
      <div style ={{ maxWidth: "600px", margin: "0 auto" }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label>Account Holder Name:</label>
            <input
              type="text"
              value={accountHolderName}
              onChange={(event) => setAccountHolderName(event.target.value)}
              style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label>Address:</label>
            <input
              type="text"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label>Contact Number:</label>
            <input
              type="text"
              value={contactNumber}
              onChange={(event) => setContactNumber(event.target.value)}
              style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label>Initial Deposit:</label>
            <input
              type="number"
              value={initialDeposit}
              onChange={(event) => setInitialDeposit(event.target.value)}
              style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" style={{ width: "100%", padding: "10px" }}>
            Open Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default CurrentAccountPage;
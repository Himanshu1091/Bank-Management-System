import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "" || password === "") {
      setError("Please enter both username and password.");
    } else {
      // Call API to authenticate user
      console.log("Username:", username);
      console.log("Password:", password);
    }
  };

  return (
    <div style={{ backgroundColor: "#f2f2f2", padding: "20px" , height:'700px' }}>
      <h1 style={{ textAlign: "center" }}>Login Form</h1>
      <div style={{ maxWidth: "400px", margin: "0 auto" }}>
        <form onSubmit={handleSubmit} style={{ padding: "20px", border:'solid', backgroundColor:'wheat'}}>
          <div style={{ marginBottom: "20px" }}>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor:'green' }}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
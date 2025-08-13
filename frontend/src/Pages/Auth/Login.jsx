import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigation hook
import "../../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ✅ Initialize navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in with ${email}`);
  };

  // ✅ Close button click handler
  const handleClose = () => {
    navigate("/"); // Goes back to PageShell page (home route)
  };

  return (
    <div className="login-container">
      <div className="login-box animate-slide-in">
        {/* Close Button */}
        <span className="close-btn" onClick={handleClose}>
          ×
        </span>

        <h2 className="login-title">DOCUTRACE</h2>
        <p className="login-subtitle">
          Securely manage and track your documents
        </p>

        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-btn">
            Log In
          </button>
        </form>

        <div className="login-footer">
          <a href="/forgot-password">Forgot Password?</a>
          <span> | </span>
          <a href="/onboarding">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;

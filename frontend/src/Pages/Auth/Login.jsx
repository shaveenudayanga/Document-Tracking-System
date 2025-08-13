import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard"); // Temporary: Go to dashboard on login click
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-box animate-fade-in">
        <span className="close-btn" onClick={handleClose}>
          ×
        </span>

        <h2 className="login-title">DOCUTRACE</h2>
        <p className="login-subtitle">
          Securely manage and track your documents
        </p>

        <form className="login-form" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-btn" onClick={handleSubmit}>
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

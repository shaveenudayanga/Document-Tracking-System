import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Onboarding.css";

const Onboarding = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Account created for ${name}`);
    navigate("/login");
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="signup-container">
      <div className="signup-box animate-slide-in">
        <span className="close-btn" onClick={handleClose}>
          ×
        </span>

        <h2 className="signup-title">Create Account</h2>
        <p className="signup-subtitle">
          Join DocuTrace and start tracking your documents
        </p>

        <form className="signup-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

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
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>

        <div className="signup-footer">
          <span>Already have an account? </span>
          <a href="/login">Log In</a>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;

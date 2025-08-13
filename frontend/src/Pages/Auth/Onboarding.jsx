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
    <div className="signup-wrapper">
      <div className="signup-card">
        {/* Right Side Image */}
        <div className="signup-image-section">
          <div className="gradient-overlay"></div>
          <img src="/images/signup-model.jpg" alt="Signup Visual" />
        </div>

        {/* Left Side Form */}
        <div className="signup-form-section">
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

          <p className="signup-footer">
            Already have an account? <a href="/login">Log In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;

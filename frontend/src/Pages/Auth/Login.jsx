import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Login.css";
import { api } from "../../lib/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const data = await api.post("auth/login", { email, password });
      if (data && (data.accessToken || data.token)) {
        localStorage.setItem("accessToken", data.accessToken || data.token);
        if (data.refreshToken)
          localStorage.setItem("refreshToken", data.refreshToken);
      }
      navigate("/dashboard");
    } catch (err) {
      setError(err?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        {/* Left Side Form */}
        <div className="login-form-section">
          <span className="close-btn" onClick={handleClose}>
            ×
          </span>
          <h2 className="login-title">Log In</h2>
          <p className="login-subtitle">
            Welcome back! Please enter your details
          </p>

          {error && <div className="error-message">{error}</div>}

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

            <a className="forgot-password" href="/forgot-password">
              Forgot password?
            </a>

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>

          <div className="divider">
            <span>Or Continue With</span>
          </div>

          <div className="social-login">
            <button className="google-btn">Google</button>
            <button className="facebook-btn">Facebook</button>
          </div>

          <p className="signup-link">
            Don’t have an account? <a href="/onboarding">Sign up</a>
          </p>
        </div>

        {/* Right Side Image */}
        <div className="login-image-section">
          <div className="gradient-overlay"></div>
          <img src="/images/login-model.jpg" alt="Login Visual" />
        </div>
      </div>
    </div>
  );
};

export default Login;

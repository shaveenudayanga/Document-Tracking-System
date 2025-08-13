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
      // Backend expects /api/auth/login; ensure VITE_API_URL includes /api
      const data = await api.post("auth/login", { email, password });
      // Store tokens if returned
      if (data && (data.accessToken || data.token)) {
        localStorage.setItem("accessToken", data.accessToken || data.token);
        if (data.refreshToken) localStorage.setItem("refreshToken", data.refreshToken);
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
    <div className="login-container">
      <div className="login-box animate-fade-in">
        <span className="close-btn" onClick={handleClose}>
          ×
        </span>

        <h2 className="login-title">DOCUTRACE</h2>
        <p className="login-subtitle">Securely manage and track your documents</p>

        {/* Error message */}
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
          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Logging in..." : "Log In"}
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

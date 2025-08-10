import React, { useState } from "react";
import "./Login.css";
import loginImage from "../../assets/login-widget.jpeg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("admin@docu.local");
  const [password, setPassword] = useState("password");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const res = await login(email, password);
    if (res.ok) {
      navigate("/", { replace: true });
    } else {
      setError(res.message || "Login failed");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-left">
          <h2>Log In</h2>
          <p className="muted">Welcome back! Please enter your details</p>
          <form onSubmit={onSubmit} className="login-form">
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
            <label>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            <a className="forgot" href="#">
              forgot password ?
            </a>
            {error && <div className="error">{error}</div>}
            <button className="primary" type="submit">
              Log In
            </button>
          </form>
          <div className="social-row">
            <span className="or">Or Continue With</span>
            <div className="social-buttons">
              <button className="btn-outline">Google</button>
              <button className="btn-outline">Facebook</button>
            </div>
            <p className="signup">
              Don't have account? <a href="#">Sign up</a>
            </p>
          </div>
        </div>
        <div className="login-right">
          <img src={loginImage} alt="visual" />
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/Onboarding.css";
import { api } from "../../lib/api";

const emailRegex =
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

const Onboarding = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [role, setRole] = useState("USER"); // default role is USER
  const navigate = useNavigate();

  const validate = () => {
    const n = name.trim();
    const e = email.trim();
    if (n.length < 2) return "Please enter your full name.";
    if (!emailRegex.test(e)) return "Please enter a valid email.";
    if (password.length < 8) return "Password must be at least 8 characters.";
    return "";
  };

  const extractError = (err) => {
    const d = err?.response?.data;
    const fieldErrors =
      d?.errors?.map?.((e) => e.defaultMessage || e.message || `${e.field}: ${e.error}`) ||
      d?.violations?.map?.((v) => `${v.fieldName || v.field}: ${v.message}`) ||
      null;
    return (fieldErrors && fieldErrors.join(", ")) ||
      d?.message ||
      d?.error ||
      err?.message ||
      "Sign up failed";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const v = validate();
    if (v) {
      setError(v);
      return;
    }
    setLoading(true);
    try {
      await api.post("/auth/register", {
        name: name.trim(),
        email: email.trim(),
        password,
        role, // must match backend enum, e.g., USER or ADMIN
      });
      // Navigate to login (or auto-login here if desired)
      navigate("/login", { replace: true, state: { registeredEmail: email.trim() } });
    } catch (err) {
      setError(extractError(err));
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    navigate("/");
  };

  const isDisabled =
    loading ||
    !name.trim() ||
    !emailRegex.test(email.trim()) ||
    password.length < 8;

  return (
    <div className="signup-container">
      <div className="signup-box animate-slide-in">
        <button type="button" className="close-btn" onClick={handleClose} aria-label="Close">
          ×
        </button>

        <h2 className="signup-title">Create Account</h2>
        <p className="signup-subtitle">
          Join DocuTrace and start tracking your documents
        </p>

        {error && <div className="error-message" role="alert">{error}</div>}

        <form className="signup-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Create a password (min 8 chars)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            required
          />

          <label htmlFor="role-select">Role</label>
          <select
            id="role-select"
            className="role-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
          </select>

          <button type="submit" className="signup-btn" disabled={isDisabled}>
            {loading ? "Creating..." : "Sign Up"}
          </button>
        </form>

        <div className="signup-footer">
          <span>Already have an account? </span>
          <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;

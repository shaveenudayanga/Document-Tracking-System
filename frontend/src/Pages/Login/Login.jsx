import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-widget">
        <div className="login-form-container">
          <h2 className="login-heading">Log In</h2>
          <p className="login-subheading">
            Welcome back! Please enter your details
          </p>
          <form className="login-form">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder=" " />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <div className="password-input-wrapper">
                <input type="password" id="password" placeholder=" " />
                <span className="password-icon">👁️</span>
              </div>
            </div>
            <a href="#" className="forgot-password">
              forgot password ?
            </a>
            <button type="submit" className="login-button">
              Log In
            </button>
          </form>
          <div className="divider">
            <span className="or-text">Or Continue With</span>
          </div>
          <div className="social-login">
            <button className="social-button google">
              <img
                src="https://img.icons8.com/color/48/000000/google-logo.png"
                alt="Google logo"
              />
              Google
            </button>
            <button className="social-button facebook">
              <img
                src="https://img.icons8.com/color/48/000000/facebook-new.png"
                alt="Facebook logo"
              />
              Facebook
            </button>
          </div>
          <p className="signup-text">
            Don't have account?{" "}
            <a href="#" className="signup-link">
              Sign up
            </a>
          </p>
        </div>
        <div className="image-container">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";

const ForgotPassword = () => {
  return (
    <div className="forgot-password-page">
      <h1>Forgot Password Page</h1>
      <form className="forgot-password-form">
        <label htmlFor="email">Email Address:</label>
        <input type="email" id="email" name="email" required />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;

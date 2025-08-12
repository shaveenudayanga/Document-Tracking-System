import React from "react";
import Sidebar from "./Sidebar";
import "../styles/PageShell.css";
import { Link } from "react-router-dom";

const PageShell = () => {
  return (
    <div className="home-container">
      <header className="header">
        <div className="logo">
          <img
            src="/path/to/your/logo.png"
            alt="Document Tracking System Logo"
          />
        </div>
        <nav className="nav">
          <a href="#documents" className="nav-link">
            Documents
          </a>
          <a href="#reports" className="nav-link">
            Reports
          </a>
          <a href="#users" className="nav-link">
            Users
          </a>
          <a href="#settings" className="nav-link">
            Settings
          </a>
        </nav>
        <div className="header-actions">
          <button className="get-started-btn">New Document</button>
          <div className="icon-container">
            <i className="search-icon">🔍</i>
          </div>
          <Link to="/login" className="icon-container">
            <i className="user-icon">👤</i>
          </Link>
        </div>
      </header>

      <main className="hero-section">
        <div className="content">
          <h1>Effortlessly Track Your Documents</h1>
          <p>
            Streamline your workflow with our intuitive and powerful document
            management solution. Keep track of approvals, versions, and
            deadlines with ease.
          </p>
          <button className="learn-more-btn">Explore Features</button>
          <div className="cool-logos">
            <p>Integrates With:</p>
            <div className="logo-images">
              <img src="/d1.jpg" alt="Slack" />
              <img src="/google-drive-logo.png" alt="Google Drive" />
              <img src="/microsoft-365-logo.png" alt="Microsoft 365" />
            </div>
          </div>
        </div>
        <div className="images">
          <div className="image-strip strip-1">
            <img
              src="/path/to/image1.jpg"
              alt="Person reviewing a digital document"
            />
          </div>
          <div className="image-strip strip-2">
            <img
              src="/path/to/image2.jpg"
              alt="People collaborating on a document workflow"
            />
          </div>
          <div className="image-strip strip-3">
            <img
              src="/path/to/image3.jpg"
              alt="Person approving a document on a tablet"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default PageShell;

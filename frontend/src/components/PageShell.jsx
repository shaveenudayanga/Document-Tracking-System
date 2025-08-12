import React from "react";
import Sidebar from "./Sidebar";
import "../styles/PageShell.css";

export default function PageShell({ children }) {
  return (
    <div className="page-shell">
      <Sidebar />
      <div className="main-content">
        <header className="header">
          <h1>Document Tracking System</h1>
          {/* You can add user menu, notifications, or breadcrumbs here */}
        </header>
        <section className="content-area">{children}</section>
      </div>
    </div>
  );
}

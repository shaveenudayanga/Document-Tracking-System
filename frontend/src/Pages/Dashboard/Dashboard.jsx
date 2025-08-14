// src/Pages/Dashboard/Dashboard.jsx
import React, { useState, useEffect } from "react";
import "../../styles/Dashboard.css";

const Dashboard = () => {
  const [role, setRole] = useState("user"); // default "user", can be "admin"
  const [userName, setUserName] = useState("Sadish");

  // Simulate fetching role from localStorage or API after login
  useEffect(() => {
    const tokenRole = localStorage.getItem("role"); // store "user" or "admin"
    if (tokenRole) setRole(tokenRole);
  }, []);

  // Dummy metrics
  const userMetrics = [
    { title: "Documents in Transit", value: 12 },
    { title: "Documents Completed", value: 30 },
    { title: "Pending Actions", value: 5 },
    { title: "Recent Uploads", value: 8 },
  ];

  const adminMetrics = [
    { title: "Total Documents", value: 150 },
    { title: "Pending Approvals", value: 12 },
    { title: "Active Users", value: 25 },
    { title: "Overdue Documents", value: 3 },
  ];

  return (
    <div className="dashboard-wrapper">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>DocuTrace</h2>
        <ul>
          <li>Home</li>
          <li>My Documents</li>
          <li>Reports</li>
          {role === "admin" && <li>Admin Tools</li>}
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        <header className="dashboard-header">
          <h1>Welcome, {userName}!</h1>
          <span>Role: {role.toUpperCase()}</span>
        </header>

        {/* Metrics Cards */}
        <section className="metrics-cards">
          {(role === "user" ? userMetrics : adminMetrics).map((metric) => (
            <div key={metric.title} className="metric-card">
              <h3>{metric.value}</h3>
              <p>{metric.title}</p>
            </div>
          ))}
        </section>

        {/* Tables and Charts */}
        <section className="dashboard-content">
          {role === "user" ? (
            <>
              <div className="table-container">
                <h3>Pending Documents</h3>
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Status</th>
                      <th>Due Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>001</td>
                      <td>Document A</td>
                      <td>In Transit</td>
                      <td>2025-08-20</td>
                      <td>
                        <button>View</button>
                      </td>
                    </tr>
                    <tr>
                      <td>002</td>
                      <td>Document B</td>
                      <td>Pending</td>
                      <td>2025-08-22</td>
                      <td>
                        <button>View</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="chart-placeholder">
                Workflow Chart Placeholder
              </div>
            </>
          ) : (
            <>
              <div className="table-container">
                <h3>Pending Approvals</h3>
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>User</th>
                      <th>Document</th>
                      <th>Submission Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>101</td>
                      <td>John</td>
                      <td>Document X</td>
                      <td>2025-08-12</td>
                      <td>
                        <button>Approve</button>
                        <button>Reject</button>
                      </td>
                    </tr>
                    <tr>
                      <td>102</td>
                      <td>Mary</td>
                      <td>Document Y</td>
                      <td>2025-08-13</td>
                      <td>
                        <button>Approve</button>
                        <button>Reject</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="chart-placeholder">
                System Analytics Placeholder
              </div>
            </>
          )}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;

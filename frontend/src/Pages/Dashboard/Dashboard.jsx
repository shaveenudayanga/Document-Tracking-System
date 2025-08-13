import React from "react";
import "../../styles/Dashboard.css";

const Dashboard = ({ userType }) => {
  // Example data (replace with real API data)
  const userMetrics = [
    { title: "Documents in Transit", value: 12 },
    { title: "Completed Documents", value: 34 },
    { title: "Pending Approvals", value: 5 },
    { title: "Frequent Actions", value: 3 },
  ];

  const adminMetrics = [
    { title: "System Logs", value: 120 },
    { title: "Pending Approvals", value: 8 },
    { title: "Audit Snapshots", value: 5 },
    { title: "Active Users", value: 45 },
  ];

  const metrics = userType === "admin" ? adminMetrics : userMetrics;

  return (
    <div className="dashboard-page">
      <h1>{userType === "admin" ? "Admin Dashboard" : "User Dashboard"}</h1>
      <div className="dashboard-cards">
        {metrics.map((metric, index) => (
          <div key={index} className="dashboard-card">
            <h2>{metric.value}</h2>
            <p>{metric.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

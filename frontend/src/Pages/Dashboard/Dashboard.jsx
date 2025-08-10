import React from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="container">
      <div className="header">
        <div>
          <h3>DocuTrace</h3>
          <div className="muted">Welcome back, {user?.name || user?.email}</div>
        </div>
        <div>
          <button onClick={logout} className="btn-outline">
            Logout
          </button>
        </div>
      </div>

      <div className="app-grid">
        <aside className="sidebar">
          <nav>
            <ul>
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              <li>
                <Link to="/documents">Documents</Link>
              </li>
              <li>
                <Link to="/upload">Upload</Link>
              </li>
              <li>
                <Link to="/handover">Handover</Link>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="main">
          <section className="cards-row">
            <div className="card">
              <h4>In Transit</h4>
              <div className="stat">5</div>
            </div>
            <div className="card">
              <h4>Pending</h4>
              <div className="stat">8</div>
            </div>
            <div className="card">
              <h4>Completed</h4>
              <div className="stat">124</div>
            </div>
          </section>

          <section className="recent">
            <h4>Recent Documents</h4>
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Owner</th>
                  <th>Updated</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Link to="/documents/doc-1">Policy - Leave</Link>
                  </td>
                  <td>In Transit</td>
                  <td>Alice</td>
                  <td>2025-07-20</td>
                </tr>
                <tr>
                  <td>
                    <Link to="/documents/doc-2">Procurement Request</Link>
                  </td>
                  <td>Draft</td>
                  <td>Bob</td>
                  <td>2025-07-22</td>
                </tr>
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
}

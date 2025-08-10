import React, { useEffect, useState } from "react";
import "./DocumentList.css";
import { getDocuments } from "../../services/api";
import { Link } from "react-router-dom";

export default function DocumentList() {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    (async () => {
      const d = await getDocuments();
      setDocs(d);
    })();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h3>Documents</h3>
        <Link to="/upload" className="btn-outline">
          Upload
        </Link>
      </div>
      <div className="card">
        <table className="doc-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Owner</th>
              <th>Updated</th>
            </tr>
          </thead>
          <tbody>
            {docs.map((d) => (
              <tr key={d.id}>
                <td>
                  <Link to={`/documents/${d.id}`}>{d.title}</Link>
                </td>
                <td>{d.status}</td>
                <td>{d.owner}</td>
                <td>{d.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

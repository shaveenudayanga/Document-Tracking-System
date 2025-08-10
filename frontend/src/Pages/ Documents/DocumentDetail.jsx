import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDocumentById } from "../../services/api";
import "./DocumentDetail.css";

export default function DocumentDetail() {
  const { id } = useParams();
  const [doc, setDoc] = useState(null);

  useEffect(() => {
    (async () => {
      const d = await getDocumentById(id);
      setDoc(d);
    })();
  }, [id]);

  if (!doc) return <div className="container">Loading...</div>;

  return (
    <div className="container">
      <div className="header">
        <h3>Document Detail</h3>
      </div>
      <div className="detail-card">
        <h4>{doc.title}</h4>
        <div className="meta">
          <div>
            <strong>Status:</strong> {doc.status}
          </div>
          <div>
            <strong>Owner:</strong> {doc.owner}
          </div>
          <div>
            <strong>Pipeline:</strong> {doc.metadata.pipeline}
          </div>
        </div>

        <section className="history">
          <h5>History & Audit Trail</h5>
          <ul>
            {doc.history.map((h, idx) => (
              <li key={idx}>
                {h.when} — {h.by} — {h.action}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

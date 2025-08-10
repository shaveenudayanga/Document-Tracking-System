import React, { useEffect, useState } from "react";
import "./HandoverQueue.css";
import { getHandoverQueue } from "../../services/api";

export default function HandoverQueue() {
  const [queue, setQueue] = useState([]);

  useEffect(() => {
    (async () => {
      const q = await getHandoverQueue();
      setQueue(q);
    })();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h3>Handover Queue</h3>
      </div>
      <div className="card">
        <table className="handover-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Awaiting</th>
              <th>Due</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {queue.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.awaiting}</td>
                <td>{item.due}</td>
                <td>
                  <button className="btn-outline">Mark Received</button>
                  <button className="btn-outline">Forward</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

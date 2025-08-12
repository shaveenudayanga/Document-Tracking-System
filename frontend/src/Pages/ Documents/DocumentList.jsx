import React from "react";
import PageShell from "../../components/PageShell";
import { Link } from "react-router-dom";

export default function DocumentList() {
  return (
    <PageShell title="Documents">
      <div className="flex justify-end mb-4">
        <button className="px-4 py-2 bg-sky-600 text-white rounded">
          + New Document
        </button>
      </div>
      <table className="w-full border">
        <thead>
          <tr className="bg-slate-100">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border">DOC-001</td>
            <td className="p-2 border">
              <Link to="/documents/1" className="text-sky-600">
                Project Plan
              </Link>
            </td>
            <td className="p-2 border">In Review</td>
          </tr>
        </tbody>
      </table>
    </PageShell>
  );
}

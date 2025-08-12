import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const links = [
    ["Dashboard", "/"],
    ["Documents", "/documents"],
    ["Pipelines", "/pipelines"],
    ["Handover", "/handover"],
    ["Audit", "/audit"],
    ["Users", "/profile"],
    ["Settings", "/settings"],
    ["Help", "/help"],
  ];
  return (
    <aside className="w-64 bg-slate-50 min-h-screen p-4 hidden md:block">
      <div className="mb-6">
        <strong className="text-lg">DocuTrace</strong>
      </div>
      <nav className="space-y-2">
        {links.map(([name, path]) => (
          <Link
            key={path}
            to={path}
            className="block p-2 rounded hover:bg-white"
          >
            {name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

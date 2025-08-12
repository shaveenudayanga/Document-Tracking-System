import React from "react";

export default function PageShell({ title, children, actions }) {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <div className="space-x-2">{actions}</div>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-6">{children}</div>
    </div>
  );
}

import React from "react";

export default function Icon({ children }) {
  return (
    <span className="inline-flex items-center justify-center w-8 h-8 bg-slate-100 rounded-md mr-3">
      {children}
    </span>
  );
}

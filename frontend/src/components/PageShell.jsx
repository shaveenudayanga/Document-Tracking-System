import React from "react";

const PageShell = ({ children }) => {
  return (
    <div className="page-shell">
      {/* You can add a header or navigation here if needed */}
      <main className="main-content">{children}</main>
      {/* You can add a footer here if needed */}
    </div>
  );
};

export default PageShell;

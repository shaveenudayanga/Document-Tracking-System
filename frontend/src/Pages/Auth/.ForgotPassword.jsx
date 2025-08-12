import React from "react";
import PageShell from "../../components/PageShell";

export default function ForgotPassword() {
  return (
    <PageShell title="Reset password">
      <p className="mb-4">Enter your email to receive reset instructions.</p>
      <input className="w-full p-3 border rounded" placeholder="Email" />
      <div className="mt-4">
        <button className="px-4 py-2 rounded bg-sky-600 text-white">
          Send reset email
        </button>
      </div>
    </PageShell>
  );
}

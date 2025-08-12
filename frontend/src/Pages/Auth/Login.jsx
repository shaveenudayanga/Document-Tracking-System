import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="w-full max-w-md">
        <div className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-4">Sign in to DocuTrace</h2>
          <form className="space-y-4">
            <input
              className="w-full p-3 border rounded"
              placeholder="Email or username"
            />
            <input
              className="w-full p-3 border rounded"
              placeholder="Password"
              type="password"
            />
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Remember me
              </label>
              <Link className="text-sky-600" to="/forgot">
                Forgot?
              </Link>
            </div>
            <div>
              <button className="w-full py-3 rounded bg-sky-600 text-white font-medium">
                Sign in
              </button>
            </div>
          </form>
          <p className="text-sm text-center mt-4">
            New here?{" "}
            <Link to="/onboarding" className="text-sky-600">
              Get started
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

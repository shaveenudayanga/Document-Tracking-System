import React from "react";
import PageShell from "../../components/PageShell";

export default function Onboarding() {
  return (
    <PageShell title="Welcome to DocuTrace">
      <p className="mb-4">
        Quick setup — company info, timezone, and default pipeline.
      </p>
      <div className="space-y-4">
        <input
          className="w-full p-3 border rounded"
          placeholder="Organization name"
        />
        <select className="w-full p-3 border rounded">
          <option>Timezone</option>
        </select>
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded bg-sky-600 text-white">
            Finish
          </button>
        </div>
      </div>
    </PageShell>
  );
}

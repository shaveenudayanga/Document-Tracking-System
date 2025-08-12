import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

// Pages
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import DocumentList from "./pages/Documents/DocumentList";
import DocumentDetails from "./pages/Documents/DocumentDetails";
import PipelineList from "./pages/Pipelines/PipelineList";
import PipelineBuilder from "./pages/Pipelines/PipelineBuilder";
import QRVerification from "./pages/Handover/QRVerification";
import HandoverHistory from "./pages/Handover/HandoverHistory";
import DepartmentManager from "./pages/Departments/DepartmentManager";
import Notifications from "./pages/Notifications/Notifications";
import AuditLog from "./pages/Audit/AuditLog";
import UserProfile from "./pages/Profile/UserProfile";
import SystemSettings from "./pages/Settings/SystemSettings";
import HelpCenter from "./pages/Help/HelpCenter";
import BulkOperations from "./pages/Bulk/BulkOperations";
import MobileLite from "./pages/MobileLite/MobileLite";

export default function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-50 p-4">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/documents" element={<DocumentList />} />
          <Route path="/documents/:id" element={<DocumentDetails />} />
          <Route path="/pipelines" element={<PipelineList />} />
          <Route path="/pipelines/builder" element={<PipelineBuilder />} />
          <Route path="/handover/queue" element={<HandoverQueue />} />
          <Route path="/handover/qr" element={<QRVerification />} />
          <Route path="/handover/history" element={<HandoverHistory />} />
          <Route path="/departments" element={<DepartmentManager />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/audit" element={<AuditLog />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/settings" element={<SystemSettings />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/bulk" element={<BulkOperations />} />
          <Route path="/mobile" element={<MobileLite />} />
        </Routes>
      </main>
    </div>
  );
}

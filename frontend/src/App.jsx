import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import PageShell from "./components/PageShell.jsx";
import Sidebar from "./components/Sidebar.jsx";

// Auth Pages
import Login from "./Pages/Auth/Login.jsx";
import ForgotPassword from "./pages/Auth/ForgotPassword.jsx";
import Onboarding from "./pages/Auth/Onboarding.jsx";

// Dashboard
import Dashboard from "./pages/Dashboard/Dashboard.jsx";

// Documents
import DocumentList from "./pages/Documents/DocumentList.jsx";
import DocumentDetails from "./pages/Documents/DocumentDetails.jsx";

// Pipelines
import PipelineList from "./pages/Pipelines/PipelineList.jsx";
import PipelineBuilder from "./pages/Pipelines/PipelineBuilder.jsx";

// Handover
import HandoverQueue from "./Pages/Handover/HandoverQueue.jsx";
import QRVerification from "./pages/Handover/QRVerification.jsx";
import HandoverHistory from "./pages/Handover/HandoverHistory.jsx";

// Departments
import DepartmentManager from "./pages/Departments/DepartmentManager.jsx";

// Notifications
import Notifications from "./pages/Notifications/Notifications.jsx";

// Audit
import AuditLog from "./pages/Audit/AuditLog.jsx";

// Profile
import UserProfile from "./pages/Profile/UserProfile.jsx";

// Settings
import SystemSettings from "./pages/Settings/SystemSettings.jsx";

// Help
import HelpCenter from "./pages/Help/HelpCenter.jsx";

// Bulk
import BulkOperations from "./pages/Bulk/BulkOperations.jsx";

// Mobile
import MobileLite from "./pages/MobileLite/MobileLite.jsx";

function App() {
  return (
    <Router>
      <PageShell>
        <Sidebar />
        <Routes>
          {/* Auth */}
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/onboarding" element={<Onboarding />} />

          {/* Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Documents */}
          <Route path="/documents" element={<DocumentList />} />
          <Route path="/documents/:id" element={<DocumentDetails />} />

          {/* Pipelines */}
          <Route path="/pipelines" element={<PipelineList />} />
          <Route path="/pipelines/builder" element={<PipelineBuilder />} />

          {/* Handover */}
          <Route path="/handover/queue" element={<HandoverQueue />} />
          <Route path="/handover/verify" element={<QRVerification />} />
          <Route path="/handover/history" element={<HandoverHistory />} />

          {/* Departments */}
          <Route path="/departments" element={<DepartmentManager />} />

          {/* Notifications */}
          <Route path="/notifications" element={<Notifications />} />

          {/* Audit */}
          <Route path="/audit" element={<AuditLog />} />

          {/* Profile */}
          <Route path="/profile" element={<UserProfile />} />

          {/* Settings */}
          <Route path="/settings" element={<SystemSettings />} />

          {/* Help */}
          <Route path="/help" element={<HelpCenter />} />

          {/* Bulk */}
          <Route path="/bulk" element={<BulkOperations />} />

          {/* Mobile */}
          <Route path="/mobile" element={<MobileLite />} />
        </Routes>
      </PageShell>
    </Router>
  );
}

export default App;

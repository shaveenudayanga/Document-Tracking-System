import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Components
import PageShell from "./components/PageShell.jsx";

// Auth Pages
import Login from "./Pages/Auth/Login.jsx";
import ForgotPassword from "./Pages/Auth/ForgotPassword.jsx";
import Onboarding from "./Pages/Auth/Onboarding.jsx";

// Dashboard
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";

// Documents
import DocumentList from "./Pages/Documents/DocumentList.jsx";
import DocumentDetails from "./Pages/Documents/DocumentDetails.jsx";

// Pipelines
import PipelineList from "./Pages/Pipelines/PipelineList.jsx";
import PipelineBuilder from "./Pages/Pipelines/PipelineBuilder.jsx";

// Handover
import HandoverQueue from "./Pages/Handover/HandoverQueue.jsx";
import QRVerification from "./Pages/Handover/QRVerification.jsx";
import HandoverHistory from "./Pages/Handover/HandoverHistory.jsx";

// Departments
import DepartmentManager from "./Pages/Departments/DepartmentManager.jsx";

// Notifications
import Notifications from "./Pages/Notifications/Notifications.jsx";

// Audit
import AuditLog from "./Pages/Audit/AuditLog.jsx";

// Profile
import UserProfile from "./Pages/Profile/UserProfile.jsx";

// Settings
import SystemSettings from "./Pages/Settings/SystemSettings.jsx";

// Help
import HelpCenter from "./Pages/Help/HelpCenter.jsx";

// Bulk
import BulkOperations from "./Pages/Bulk/BulkOperations.jsx";

// Mobile
import MobileLite from "./Pages/MobileLite/MobileLite.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth - no PageShell */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/onboarding" element={<Onboarding />} />
        {/* Redirect root to /login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        {/* Main app - with PageShell */}
        <Route element={<PageShell />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/documents" element={<DocumentList />} />
          <Route path="/documents/:id" element={<DocumentDetails />} />
          <Route path="/pipelines" element={<PipelineList />} />
          <Route path="/pipelines/builder" element={<PipelineBuilder />} />
          <Route path="/handover/queue" element={<HandoverQueue />} />
          <Route path="/handover/verify" element={<QRVerification />} />
          <Route path="/handover/history" element={<HandoverHistory />} />
          <Route path="/departments" element={<DepartmentManager />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/audit" element={<AuditLog />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/settings" element={<SystemSettings />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/bulk" element={<BulkOperations />} />
          <Route path="/mobile" element={<MobileLite />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

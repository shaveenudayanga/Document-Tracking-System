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

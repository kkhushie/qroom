import React from "react";
import { Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import JoinRoom from "./pages/JoinRoom";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./pages/DashboardLayout";
import CreateQroom from "./pages/CreateQroom";
import NotFound from './pages/NotFound';
import QroomParticipant from './pages/QroomParticipant';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="join" element={<JoinRoom />} />
        <Route path="/qroom/:code" element={<QroomParticipant />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />

        {/* Protected Dashboard routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="create-qroom" element={<CreateQroom />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import JoinRoom from "./pages/JoinRoom";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./pages/DashboardLayout";
import CreateQroom from "./pages/CreateQroom";

const App = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="join" element={<JoinRoom />} />

      {/* Protected Dashboard routes with shared layout */}
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
        {/* later add: <Route path="create-qroom" element={<CreateQroom />} /> */}
      </Route>
    </Routes>
  );
};

export default App;

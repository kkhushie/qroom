import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { logoutUser } from "../utils/logout";

const DashboardLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser(navigate);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ✅ Shared Header */}
      <header className="bg-white shadow-md border-b-2 border-black p-4">
        <div className="flex justify-between items-center">
          <h1
            onClick={() => navigate("/dashboard")}
            className="text-2xl font-bold text-gray-900 cursor-pointer"
          >
            Qroom Dashboard
          </h1>
          <nav className="flex gap-4">
            <button
              onClick={() => navigate("/dashboard")}
              className="px-3 py-1 text-gray-700 border-2 rounded hover:border-black"
            >
              Home
            </button>
            <button
              onClick={() => navigate("/profile")}
              className="px-3 py-1 text-gray-700 border-2 rounded hover:border-black"
            >
              Profile
            </button>
            <button
              onClick={handleLogout}
              className="px-3 py-1 bg-black text-white rounded hover:bg-gray-800"
            >
              Logout
            </button>
          </nav>
        </div>
      </header>

      {/* ✅ Dynamic content will render here */}
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;

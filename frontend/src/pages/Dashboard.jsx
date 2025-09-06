import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../utils/logout';
import axios from 'axios';
const url="http://localhost:3000"
const Dashboard = () => {
  const navigate = useNavigate();
  const [qrooms, setQrooms] = useState([]);

  const user = JSON.parse(localStorage.getItem("qroom_user"));
  const host = user?.id;

  const handleLogout = () => {
    logoutUser(navigate);
  };

  const handleNewQroom = () => {
    navigate('/create-qroom');
  };

  const handleJoinQroom = () => {
    navigate('/join');
  };

  const handleViewQroom = (code) => {

    navigate(`/qroom/${code}`);
  };
  // ✅ Fetch Qrooms on mount
  useEffect(() => {
    if (host) {
      axios.post(`${url}/api/qroom/list`, { hostId: host })
        .then(res => setQrooms(res.data))
        .catch(err => console.error("Error fetching qrooms:", err));
    }
  }, [host]);
  return (
    <div className="min-h-screen">


      {/* Welcome Section */}
      <div className="bg-white rounded-xl shadow-2xl border-2 border-black p-6 mb-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome back! 👋</h2>
          <p className="text-gray-600 mb-6">Ready to create engaging sessions and gather valuable feedback?</p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border-2 border-blue-200">
              <div className="text-2xl font-bold text-blue-800">5</div>
              <div className="text-xs text-blue-600">Active Rooms</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border-2 border-green-200">
              <div className="text-2xl font-bold text-green-800">23</div>
              <div className="text-xs text-green-600">Live Participants</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border-2 border-purple-200">
              <div className="text-2xl font-bold text-purple-800">147</div>
              <div className="text-xs text-purple-600">Total Responses</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border-2 border-orange-200">
              <div className="text-2xl font-bold text-orange-800">98%</div>
              <div className="text-xs text-orange-600">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white shadow-2xl rounded-xl border-2 border-gray-800 p-8 hover:shadow-3xl transition-all duration-300">
          <div className="text-center">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h2 className="font-bold text-2xl mb-4 text-gray-900">Create New Qroom</h2>
            <p className="text-gray-600 mb-6">Start a new interactive session and generate a unique room code for your audience to join.</p>
            <button
              onClick={handleNewQroom}
              className="w-full py-4 px-8 bg-black text-white rounded-lg font-bold hover:bg-gray-800 transition-all duration-200 border-3 border-black hover:scale-105 shadow-lg"
            >
              ✨ Create Qroom
            </button>
          </div>
        </div>

        <div className="bg-white shadow-2xl rounded-xl border-2 border-black p-8 hover:shadow-3xl transition-all duration-300">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h2 className="font-bold text-2xl mb-4 text-gray-900">Join Existing Room</h2>
            <p className="text-gray-600 mb-6">Enter a room code to participate in an ongoing session and share your feedback.</p>
            <button
              onClick={handleJoinQroom}
              className="w-full py-4 px-8 bg-gray-800 text-white rounded-lg font-bold hover:bg-black transition-all duration-200 border-3 border-gray-800 hover:scale-105 shadow-lg"
            >
              🎯 Join Room
            </button>
          </div>
        </div>
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* My Qrooms */}
        <div className="xl:col-span-2 bg-white shadow-2xl rounded-xl border-2 border-black p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold text-2xl text-gray-900">📋 My Active Qrooms</h2>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full border-2 border-gray-300 font-medium">
                2 Active Sessions
              </span>
              <button
                onClick={handleNewQroom}
                className="px-4 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition text-sm"
              >
                + New
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-6 border-2 border-gray-200 rounded-xl hover:border-black  transition-all duration-200 cursor-pointer group hover:shadow-lg">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-black">
                      Marketing Strategy Session
                    </h3>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full border border-green-300">
                      Live
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <p className="text-sm text-gray-600">
                      Code: <span className="font-mono bg-gray-100 px-3 py-1 rounded-lg font-bold border-2 border-gray-300">12345</span>
                    </p>
                    <p className="text-sm text-gray-500">Created 2 hours ago</p>
                  </div>
                  <div className="flex items-center gap-6 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      5 participants
                    </span>
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      12 responses
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => handleViewQroom('12345')}
                  className="px-4 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-200 hover:scale-105"
                >
                  Manage
                </button>
              </div>
            </div>

            <div className="p-6 border-2 border-gray-200 rounded-xl hover:border-black transition-all duration-200 cursor-pointer group hover:shadow-lg">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-black">
                      Team Feedback Collection
                    </h3>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full border border-green-300">
                      Live
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <p className="text-sm text-gray-600">
                      Code: <span className="font-mono bg-gray-100 px-3 py-1 rounded-lg font-bold border-2 border-gray-300">67890</span>
                    </p>
                    <p className="text-sm text-gray-500">Created 5 hours ago</p>
                  </div>
                  <div className="flex items-center gap-6 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      12 participants
                    </span>
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      28 responses
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => handleViewQroom('67890')}
                  className="px-4 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-200 hover:scale-105"
                >
                  Manage
                </button>
              </div>
            </div>

            <div className="p-6 border-3 border-dashed border-gray-300 rounded-xl text-center bg-gray-50">
              <div className="py-8">
                <div className="text-4xl mb-3">🎯</div>
                <p className="text-gray-600 text-lg mb-4">Ready to create another room?</p>
                <button
                  onClick={handleNewQroom}
                  className="px-6 py-3 bg-black text-white rounded-lg font-bold hover:bg-gray-800 transition-all duration-200 hover:scale-105"
                >
                  + Create New Room
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics & Tools Sidebar */}
        <div className="space-y-6">
          {/* Live Analytics */}
          <div className="bg-white shadow-2xl rounded-xl border-2 border-black p-6">
            <h2 className="font-bold text-xl mb-6 text-gray-900 flex items-center gap-2">
              📊 Live Analytics
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </h2>
            <div className="space-y-4">
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border-2 border-blue-200">
                <div className="text-3xl font-bold text-blue-800">17</div>
                <div className="text-xs text-blue-600 font-medium">Total Participants</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border-2 border-green-200">
                <div className="text-3xl font-bold text-green-800">45</div>
                <div className="text-xs text-green-600 font-medium">Responses Today</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border-2 border-purple-200">
                <div className="text-2xl font-bold text-purple-800 flex items-center justify-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  LIVE
                </div>
                <div className="text-xs text-purple-600 font-medium">Real-time Updates</div>
              </div>
            </div>
          </div>

          {/* Quick Tools */}
          <div className="bg-white shadow-2xl rounded-xl border-2 border-black p-6">
            <h2 className="font-bold text-xl mb-6 text-gray-900">🎨 Quick Tools</h2>
            <div className="space-y-3">
              <button className="w-full p-4 text-left border-2 border-gray-200 rounded-lg hover:border-black transition-all duration-200 hover:shadow-md group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center border-2 border-green-300">
                    📈
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 group-hover:text-black">Export Data</div>
                    <div className="text-xs text-gray-600">Download responses as CSV</div>
                  </div>
                </div>
              </button>

              <button
                onClick={() => navigate('/profile')}
                className="w-full p-4 text-left border-2 border-gray-200 rounded-lg hover:border-black transition-all duration-200 hover:shadow-md group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center border-2 border-blue-300">
                    ⚙️
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 group-hover:text-black">Settings</div>
                    <div className="text-xs text-gray-600">Manage preferences</div>
                  </div>
                </div>
              </button>

              <button className="w-full p-4 text-left border-2 border-gray-200 rounded-lg hover:border-black transition-all duration-200 hover:shadow-md group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center border-2 border-yellow-300">
                    ❓
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 group-hover:text-black">Help & Support</div>
                    <div className="text-xs text-gray-600">Get assistance</div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          {/* <div className="bg-white shadow-2xl rounded-xl border-3 border-black p-6">
            <h2 className="font-bold text-xl mb-6 text-gray-900">🕒 Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border-2 border-gray-200">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-sm">✅</div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900">Room created</div>
                  <div className="text-xs text-gray-600">Marketing Strategy - 2h ago</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border-2 border-gray-200">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm">👤</div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900">New participant joined</div>
                  <div className="text-xs text-gray-600">Team Feedback - 3h ago</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border-2 border-gray-200">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-sm">💬</div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900">Response received</div>
                  <div className="text-xs text-gray-600">Room 12345 - 5h ago</div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
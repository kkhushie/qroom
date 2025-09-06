import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  
  // Mock user data - replace with actual user data from context/API
  const [userProfile, setUserProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Team Lead',
    joinDate: 'January 2024',
    avatar: '', // Empty for now, will show initials
    bio: 'Passionate about team collaboration and effective communication.',
    notifications: {
      emailNotifications: true,
      roomUpdates: true,
      weeklyDigest: false
    }
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name: userProfile.name,
    email: userProfile.email,
    role: userProfile.role,
    bio: userProfile.bio
  });

  // Statistics data
  const stats = {
    totalRooms: 8,
    totalResponses: 142,
    averageParticipants: 12,
    mostActiveRoom: 'Marketing Strategy'
  };

  const handleSave = () => {
    setUserProfile(prev => ({
      ...prev,
      ...editForm
    }));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditForm({
      name: userProfile.name,
      email: userProfile.email,
      role: userProfile.role,
      bio: userProfile.bio
    });
    setIsEditing(false);
  };

  const handleNotificationChange = (key) => {
    setUserProfile(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: !prev.notifications[key]
      }
    }));
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="min-h-screen bg-[#eaf7ea]">
 

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Info Card */}
          <div className="bg-white shadow-2xl rounded-lg border-2 border-black p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold text-xl text-gray-900">📝 Profile Information</h2>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-4 py-2 bg-black text-white rounded font-bold hover:bg-gray-800 transition border-2 border-black"
              >
                {isEditing ? '✖️ Cancel' : '✏️ Edit'}
              </button>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gray-800 text-white rounded-full flex items-center justify-center text-2xl font-bold border-4 border-black">
                  {getInitials(userProfile.name)}
                </div>
                <button className="mt-2 text-sm text-gray-600 hover:text-black font-medium">
                  Change Photo
                </button>
              </div>

              {/* Profile Form */}
              <div className="flex-1 space-y-4">
                {isEditing ? (
                  <>
                    <div>
                      <label className="block font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        value={editForm.name}
                        onChange={(e) => setEditForm(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-2 border-2 border-black rounded focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        value={editForm.email}
                        onChange={(e) => setEditForm(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-4 py-2 border-2 border-black rounded focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-gray-700 mb-1">Role</label>
                      <input
                        type="text"
                        value={editForm.role}
                        onChange={(e) => setEditForm(prev => ({ ...prev, role: e.target.value }))}
                        className="w-full px-4 py-2 border-2 border-black rounded focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-gray-700 mb-1">Bio</label>
                      <textarea
                        value={editForm.bio}
                        onChange={(e) => setEditForm(prev => ({ ...prev, bio: e.target.value }))}
                        rows="3"
                        className="w-full px-4 py-2 border-2 border-black rounded focus:outline-none"
                      />
                    </div>
                    <div className="flex gap-3 pt-4">
                      <button
                        onClick={handleSave}
                        className="px-6 py-2 bg-black text-white rounded font-bold hover:bg-gray-800 transition border-2 border-black"
                      >
                        ✅ Save Changes
                      </button>
                      <button
                        onClick={handleCancel}
                        className="px-6 py-2 bg-gray-200 text-gray-700 rounded font-bold hover:bg-gray-300 transition border-2 border-gray-400"
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="space-y-3">
                    <div>
                      <label className="block font-medium text-gray-700 text-sm">Full Name</label>
                      <p className="text-lg font-semibold text-gray-900">{userProfile.name}</p>
                    </div>
                    <div>
                      <label className="block font-medium text-gray-700 text-sm">Email</label>
                      <p className="text-lg text-gray-900">{userProfile.email}</p>
                    </div>
                    <div>
                      <label className="block font-medium text-gray-700 text-sm">Role</label>
                      <p className="text-lg text-gray-900">{userProfile.role}</p>
                    </div>
                    <div>
                      <label className="block font-medium text-gray-700 text-sm">Bio</label>
                      <p className="text-gray-900">{userProfile.bio}</p>
                    </div>
                    <div>
                      <label className="block font-medium text-gray-700 text-sm">Member Since</label>
                      <p className="text-gray-900">{userProfile.joinDate}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Notification Preferences */}
          <div className="bg-white shadow-2xl rounded-lg border-2 border-black p-6">
            <h2 className="font-bold text-xl text-gray-900 mb-4">🔔 Notification Preferences</h2>
            <div className="space-y-4">
              {Object.entries(userProfile.notifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between p-3 border-2 border-gray-200 rounded hover:border-black transition">
                  <div>
                    <h3 className="font-medium text-gray-900 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {key === 'emailNotifications' && 'Receive notifications via email'}
                      {key === 'roomUpdates' && 'Get updates when rooms are active'}
                      {key === 'weeklyDigest' && 'Weekly summary of your activities'}
                    </p>
                  </div>
                  <button
                    onClick={() => handleNotificationChange(key)}
                    className={`w-12 h-6 rounded-full border-2 border-black transition ${
                      value ? 'bg-black' : 'bg-gray-200'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                      value ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics & Quick Actions */}
        <div className="space-y-6">
          {/* Statistics */}
          <div className="bg-white shadow-2xl rounded-lg border-2 border-black p-6">
            <h2 className="font-bold text-xl mb-4 text-gray-900">📊 Your Statistics</h2>
            <div className="space-y-4">
              <div className="text-center p-3 bg-gray-50 rounded border-2 border-gray-200">
                <div className="text-2xl font-bold text-gray-900">{stats.totalRooms}</div>
                <div className="text-xs text-gray-600">Rooms Created</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded border-2 border-gray-200">
                <div className="text-2xl font-bold text-gray-900">{stats.totalResponses}</div>
                <div className="text-xs text-gray-600">Total Responses</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded border-2 border-gray-200">
                <div className="text-2xl font-bold text-gray-900">{stats.averageParticipants}</div>
                <div className="text-xs text-gray-600">Avg. Participants</div>
              </div>
              <div className="p-3 bg-gray-50 rounded border-2 border-gray-200">
                <div className="text-sm font-medium text-gray-900">Most Active Room</div>
                <div className="text-lg font-bold text-gray-900">{stats.mostActiveRoom}</div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white shadow-2xl rounded-lg border-2 border-black p-6">
            <h2 className="font-bold text-xl mb-4 text-gray-900">⚡ Quick Actions</h2>
            <div className="space-y-3">
              <button 
                onClick={() => navigate('/dashboard')}
                className="w-full p-3 text-left border-2 border-gray-200 rounded hover:border-black transition"
              >
                <div className="font-medium text-gray-900">🎯 Go to Dashboard</div>
                <div className="text-xs text-gray-600">View all your rooms</div>
              </button>
              <button className="w-full p-3 text-left border-2 border-gray-200 rounded hover:border-black transition">
                <div className="font-medium text-gray-900">📈 Export Data</div>
                <div className="text-xs text-gray-600">Download your activity</div>
              </button>
              <button className="w-full p-3 text-left border-2 border-gray-200 rounded hover:border-black transition">
                <div className="font-medium text-gray-900">🔒 Privacy Settings</div>
                <div className="text-xs text-gray-600">Manage data preferences</div>
              </button>
              <button className="w-full p-3 text-left border-2 border-red-300 rounded hover:border-red-500 transition text-red-600">
                <div className="font-medium">🗑️ Delete Account</div>
                <div className="text-xs">Permanently remove account</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
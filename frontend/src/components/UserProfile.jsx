import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const API = 'http://localhost:3000';

const UserProfile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    preferences: {
      darkMode: false,
      notifications: true,
    },
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState({});

  // Fetch user profile data on mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`${API}/api/user/profile`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("qroom_token")}` },
        });
        setProfile(res.data);
      } catch (err) {
        toast.error("Failed to load profile.");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const validate = () => {
    let errs = {};
    if (!profile.name.trim()) errs.name = "Name is required";
    if (!profile.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(profile.email)) errs.email = "Invalid email";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    if (name in profile.preferences) {
      setProfile(prev => ({
        ...prev,
        preferences: { ...prev.preferences, [name]: checked }
      }));
    } else {
      setProfile(prev => ({ ...prev, [name]: value }));
    }
    setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validate()) return;
    setSaving(true);
    try {
      await axios.put(`${API}/api/user/profile`, profile, {
        headers: { Authorization: `Bearer ${localStorage.getItem("qroom_token")}` },
      });
      toast.success("Profile updated successfully!");
    } catch {
      toast.error("Failed to update profile.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p>Loading profile...</p>;

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow mt-6">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className={`w-full p-2 border ${errors.name ? "border-red-500" : "border-gray-300"} rounded`}
          />
          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
        </div>
        
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className={`w-full p-2 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded`}
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="darkMode"
            name="darkMode"
            checked={profile.preferences.darkMode}
            onChange={handleChange}
            className="h-4 w-4"
          />
          <label htmlFor="darkMode" className="font-medium">Enable Dark Mode</label>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="notifications"
            name="notifications"
            checked={profile.preferences.notifications}
            onChange={handleChange}
            className="h-4 w-4"
          />
          <label htmlFor="notifications" className="font-medium">Receive Notifications</label>
        </div>

        <button
          type="submit"
          disabled={saving}
          className="w-full bg-black text-white py-2 rounded font-semibold disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save Profile"}
        </button>
      </form>
    </div>
  );
};

export default UserProfile;

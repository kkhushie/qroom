// src/pages/JoinRoom.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const JoinRoom = () => {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleJoin = (e) => {
    e.preventDefault();
    if (!code.trim()) return;

    // You can send this info to backend or context later
    localStorage.setItem("qroom_participant_name", name || "Anonymous");

    // Redirect to the Qroom page
    navigate(`/qroom/${code}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eaf7ea] px-4">
      <div className="bg-white p-8 rounded-lg shadow-2xl border-4 border-black max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
          🎯 Join a Qroom
        </h2>
        <form onSubmit={handleJoin} className="space-y-5">
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Room Code <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="e.g. 7X3P1"
              className="w-full px-4 py-2 border-2 border-black rounded focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Your Name <span className="text-gray-400">(Optional)</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Khushi"
              className="w-full px-4 py-2 border-2 border-black rounded focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white rounded font-bold hover:bg-gray-800 transition"
          >
            🚀 Join Room
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinRoom;

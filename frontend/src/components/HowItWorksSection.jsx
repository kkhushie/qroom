// src/components/HowItWorksSection.jsx
import { Link } from "react-router-dom";

const HowItWorksSection = () => {
  return (
    <section className=" py-24 px-6 border-b-4 border-black">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">🚀 How Qroom Works</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Host Flow */}
        <div className="bg-white p-6 border-[3px] border-black rounded-xl shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-4 text-teal-500">👨‍🏫 For Hosts</h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li>Register/Login to your account</li>
              <li>Create a Qroom and add questions</li>
              <li>Share room code with audience</li>
              <li>View real-time responses</li>
            </ol>
          </div>
          <Link
            to="/register"
            className="mt-auto bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded font-semibold text-center transition"
          >
            ✍️ Get Started as Host
          </Link>
        </div>

        {/* Participant Flow */}
        <div className="bg-white p-6 border-[3px] border-black rounded-xl shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-4 text-zinc-700">👥 For Participants</h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li>Join using Qroom code (no login)</li>
              <li>See the active question on screen</li>
              <li>Submit your vote or response</li>
              <li>See live results instantly</li>
            </ol>
          </div>
          <Link
            to="/join"
            className="mt-auto bg-zinc-700 hover:bg-zinc-800 text-white py-2 px-4 rounded font-semibold text-center transition"
          >
            🚀 Join a Room
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

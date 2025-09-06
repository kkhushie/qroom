// src/components/HeroSection.jsx
import { Link } from "react-router-dom";
import heroImg from "../assets/hero-illustration.svg"; // Add your own SVG or image

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center border-b-4 border-black px-6">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT Content */}
        <div className="text-left space-y-6 ">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
            Engage Smarter with <span className="text-teal-500 ">Qroom</span>
          </h1>

          <p className="text-lg text-gray-700 max-w-md">
            Host interactive polls, word clouds, and real-time Q&A – all from your browser. No downloads, no logins for guests.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Link
              to="/create-qroom"
              className="bg-black text-white px-6 py-3 rounded font-bold hover:bg-gray-800 transition"
            >
              🎤 Start as Host
            </Link>
            <Link
              to="/join"
              className="border-2 border-black text-black px-6 py-3 rounded font-bold hover:bg-gray-100 transition"
            >
              🚀 Join a Room
            </Link>
          </div>

          <p className="text-sm text-gray-500 pt-2">No signup needed to join as a participant.</p>
        </div>

        {/* RIGHT Image */}
        <div className="hidden md:block">
          <img
            src={heroImg}
            alt="Interactive session illustration"
            className="w-full max-w-lg mx-auto animate-fade-in"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

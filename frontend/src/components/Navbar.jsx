// src/components/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#eaf7ea] border-b-4 border-black px-16 py-4 flex justify-between items-center shadow-sm">
      <Link to="/" className="text-3xl font-black text-gray-900">
        Qroom ✨
      </Link>
      <div className="space-x-4 text-md font-medium">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/join" className="hover:underline">Join Room</Link>
        <Link to="/login" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Login</Link>
        <Link to="/register" className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-green-700">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;

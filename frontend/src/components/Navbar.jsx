// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#eaf7ea] border-b-4 border-black px-4 sm:px-8 lg:px-16 py-4 flex justify-between items-center shadow-sm">
      {/* Logo */}
      <Link to="/" className="text-2xl sm:text-3xl font-black text-gray-900" onClick={closeMenu}>
        Qroom ✨
      </Link>

      {/* Desktop Navigation - Hidden on mobile */}
      <div className="hidden md:flex space-x-4 text-md font-medium items-center">
        <Link to="/" className="hover:underline px-3 py-2">Home</Link>
        <Link to="/join" className="hover:underline px-3 py-2">Join Room</Link>
        <Link to="/login" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
          Login
        </Link>
        <Link to="/register" className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
          Register
        </Link>
      </div>

      {/* Mobile Menu Button - Hidden on desktop */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="p-2 rounded-md text-gray-700 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
          aria-label="Toggle menu"
        >
          {/* Animated Hamburger Icon */}
          <div className="w-6 h-6 relative">
            <span className={`absolute left-0 top-1 w-6 h-0.5 bg-black transform transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}></span>
            <span className={`absolute left-0 top-3 w-6 h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`absolute left-0 top-5 w-6 h-0.5 bg-black transform transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobile Menu - Slides in from right */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-[#eaf7ea] border-l-4 border-black z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6">
          {/* Close Button */}
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-black text-gray-900">Menu</span>
            <button
              onClick={closeMenu}
              className="p-2 rounded-md hover:bg-green-100 transition-colors"
              aria-label="Close menu"
            >
              <div className="w-6 h-6 relative">
                <span className="absolute left-0 top-3 w-6 h-0.5 bg-black transform rotate-45"></span>
                <span className="absolute left-0 top-3 w-6 h-0.5 bg-black transform -rotate-45"></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="space-y-4">
            <Link 
              to="/" 
              className="block py-3 px-4 text-lg font-medium hover:bg-green-100 rounded-lg transition-colors"
              onClick={closeMenu}
            >
              🏠 Home
            </Link>
            <Link 
              to="/join" 
              className="block py-3 px-4 text-lg font-medium hover:bg-green-100 rounded-lg transition-colors"
              onClick={closeMenu}
            >
              🔗 Join Room
            </Link>
            <Link 
              to="/login" 
              className="block py-3 px-4 text-lg font-medium bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-center"
              onClick={closeMenu}
            >
              🔐 Login
            </Link>
            <Link 
              to="/register" 
              className="block py-3 px-4 text-lg font-medium bg-teal-500 text-white rounded-lg hover:bg-green-700 transition-colors text-center"
              onClick={closeMenu}
            >
              📝 Register
            </Link>
          </div>

          {/* Decorative Element */}
          <div className="mt-8 pt-6 border-t border-green-300">
            <p className="text-sm text-gray-600 text-center">
              Join interactive sessions!
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

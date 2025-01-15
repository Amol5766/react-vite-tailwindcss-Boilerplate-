import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-brown-800 text-yellow-200 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-4xl font-cowboy tracking-wide hover:text-red-400 transition"
        >
          Wild West
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-lg">
          <Link
            to="/"
            className="hover:text-red-400 transition transform hover:scale-110"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-red-400 transition transform hover:scale-110"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-red-400 transition transform hover:scale-110"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Navigation Button */}
        <button
          onClick={toggleMenu}
          className="block md:hidden text-yellow-200 text-3xl focus:outline-none hover:text-red-400 transition"
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <nav className="md:hidden bg-brown-700 text-yellow-200 p-4 animate-dropdownFade">
          <Link to="/" className="block py-2 hover:text-red-400 transition">
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 hover:text-red-400 transition"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block py-2 hover:text-red-400 transition"
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

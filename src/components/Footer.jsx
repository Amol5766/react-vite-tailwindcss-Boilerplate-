import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brown-800 text-yellow-200 py-8 border-t-4 border-yellow-400">
      <div className="container mx-auto px-4 text-center">
        <h2
          className="text-2xl font-cowboy tracking-wide mb-4 drop-shadow-md"
          style={{ animation: 'fadeIn 2s ease-out' }}
        >
          Saddle Up & Stay Connected
        </h2>

        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="#"
            className="text-yellow-200 text-3xl hover:text-red-400 transition transform hover:scale-125"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="#"
            className="text-yellow-200 text-3xl hover:text-red-400 transition transform hover:scale-125"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="#"
            className="text-yellow-200 text-3xl hover:text-red-400 transition transform hover:scale-125"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="#"
            className="text-yellow-200 text-3xl hover:text-red-400 transition transform hover:scale-125"
            aria-label="YouTube"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>

        <nav className="flex justify-center space-x-6 text-lg mb-6">
          <Link to="/" className="hover:text-red-400 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-red-400 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-red-400 transition">
            Contact
          </Link>
        </nav>

        <p className="text-sm opacity-80 mb-4">
          © {new Date().getFullYear()} Wild West. Made by Amol❤️‍🔥. All rights
          reserved.
        </p>

        <div
          className="flex justify-center mt-4"
          style={{ animation: 'floatSlow 5s infinite ease-in-out' }}
        >
          <i className="fas fa-hat-cowboy text-5xl text-yellow-400"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

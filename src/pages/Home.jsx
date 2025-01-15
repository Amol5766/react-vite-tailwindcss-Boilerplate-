import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-200 via-yellow-300 to-red-500 font-cowboy text-gray-900 overflow-hidden relative">
      {/* Background Animation */}
      <div className="absolute top-0 left-0 w-full h-full cowboy-pattern opacity-20 pointer-events-none"></div>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center text-center mt-20 space-y-8">
        <h2
          className="text-6xl md:text-7xl text-brown-800 font-extrabold drop-shadow-md cowboy-text"
          style={{ animation: 'fadeIn 2s ease-out, glowPulse 3s infinite' }}
        >
          Welcome to the Frontier!
        </h2>
        <p
          className="text-lg md:text-xl text-gray-700 max-w-3xl mb-10 px-4"
          style={{ animation: 'fadeInUp 1.5s ease-out' }}
        >
          Dust off your boots and saddle up, partner. Experience the untamed
          wild west like never before with a retro cowboy twist.
        </p>
        <button
          className="bg-red-700 text-yellow-300 px-8 py-4 text-lg font-bold rounded-full shadow-xl cowboy-btn hover:scale-110 transform transition duration-300 relative group"
          style={{ animation: 'bounceIn 1.5s ease-out' }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500 opacity-0 group-hover:opacity-20 transition duration-300 rounded-full"></span>
          Ride Now
        </button>
      </main>

      {/* Floating Icons */}
      <div className="absolute bottom-10 left-10 animate-float-slow">
        <i className="fas fa-hat-cowboy text-4xl text-brown-800"></i>
      </div>
      <div className="absolute top-10 right-10 animate-float-fast">
        <i className="fas fa-horse text-5xl text-brown-700"></i>
      </div>
    </div>
  );
};

export default Home;

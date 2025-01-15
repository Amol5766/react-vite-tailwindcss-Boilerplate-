import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer'; // Import the Footer component
import Navbar from './components/Navbar'; // Import the Navbar component

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-orange-200 via-yellow-300 to-red-500 font-cowboy">
        {/* Navigation */}
        <Navbar />

        {/* Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;

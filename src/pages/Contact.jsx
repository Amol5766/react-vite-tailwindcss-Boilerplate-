import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-t from-yellow-400 to-orange-200 font-cowboy text-gray-900">
      <div className="p-10 max-w-xl mx-auto bg-white shadow-md rounded-md mt-20">
        <h1 className="text-4xl font-bold text-brown-800 mb-6 text-center">
          Get in Touch
        </h1>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border-2 border-brown-600 rounded-md px-4 py-2 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border-2 border-brown-600 rounded-md px-4 py-2 focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="border-2 border-brown-600 rounded-md px-4 py-2 focus:outline-none"
          ></textarea>
          <button className="bg-red-700 text-yellow-300 px-6 py-2 rounded-md shadow-xl hover:scale-105 transform transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

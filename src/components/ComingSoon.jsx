import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const ComingSoon = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/banner1.png')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-center z-10 text-white">
        <h1 className="text-5xl font-bold mb-4">Coming Soon</h1>
        <p className="text-lg mb-8">
          We're working hard to get our site up and running. Stay tuned!
        </p>
        <div className="flex justify-center mb-8">
          <div className="w-24 h-1 bg-teal-500 rounded-full"></div>
        </div>
        <input
          type="email"
          placeholder="Enter your email to get updates"
          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md w-80 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <button className="ml-2 px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition">
          Notify Me
        </button>
        <div className="mt-10">
          <p className="text-gray-300">
            Follow us on social media:
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-gray-300 hover:text-teal-500 transition">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-teal-500 transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-teal-500 transition">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;

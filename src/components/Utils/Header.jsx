import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

const Header = () => {
  return (
    <header className="w-full h-20 flex items-center bg-gray-100 shadow">
      <div className="container flex items-center justify-between mx-auto px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="w-10 h-10 bg-indigo-500 text-white text-lg font-semibold rounded-full flex items-center justify-center">
            LS
          </span>
          <div>
            <h2 className="text-base md:text-xl font-bold">LogicTech Studio</h2>
          </div>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-gray-600 hover:text-gray-900 transition duration-300">Home</Link>
          <Link to="/services" className="text-gray-600 hover:text-gray-900 transition duration-300">Services</Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900 transition duration-300">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition duration-300">Contact</Link>
        </nav>

        {/* Chat Icon */}
        <div className="flex items-center gap-4">
            <button
              className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 
              rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300"
            >
              <i className="ri-send-plane-line"></i>Lets' Talk
            </button>
            <span className="text-2xl text-smallTextColor md:hidden cursor-pointer">
              <i className="ri-menu-line"></i>
            </span>
          </div>
      </div>
    </header>
  );
};

export default Header;

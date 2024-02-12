import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../components/Logo"
import Chaticon from "../components/chaticon";

const Header = () => {
  return (
    <header className="w-full h-20 flex items-center ">
      <div className="container flex items-center justify-between mx-auto px-4">
        
      <LOGO/>
        {/* Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-gray-600 hover:text-gray-900 transition duration-300">Home</Link>
          <Link to="/Service" className="text-gray-600 hover:text-gray-900 transition duration-300">Services</Link>
          <Link to="/About" className="text-gray-600 hover:text-gray-900 transition duration-300">About</Link>
          <Link to="/Contact" className="text-gray-600 hover:text-gray-900 transition duration-300">Contact</Link>
        </div>

        {/* Chat Icon */}
       <Chaticon/>
      </div>
    </header>
  );
};

export default Header;

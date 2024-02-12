import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import LOGO from "../components/Logo"
import Chaticon from "../components/chaticon";
const Header = () => {
  const headerRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener('scroll', stickyHeaderFunc);
  }, []);

  return (
    <header ref={headerRef} className="w-full h-20 flex items-center ">
      <div className="container flex items-center justify-between mx-auto px-4">
        
      <LOGO/>
        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-gray-600 hover:text-gray-900 transition duration-300">Home</Link>
          <Link to="/services" className="text-gray-600 hover:text-gray-900 transition duration-300">Services</Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900 transition duration-300">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition duration-300">Contact</Link>
        </nav>

        {/* Chat Icon */}
       <Chaticon/>
      </div>
    </header>
  );
};

export default Header;

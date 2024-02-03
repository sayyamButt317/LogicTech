import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutPage from "../About/AboutPage";
import ContactPage from "../Contact/ContactPage";
import ServicePage from "../Services/ServicePage";
import HomePage from "../Home/HomePage";

function Navbar() {
  return (
    <div className="menu">
      <ul className="flex items-center gap-10">
        <li>
          <Link to="/" className="text-smallTextColor font-sans md:font-serif">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/Services/ServicePage"
            className="text-smallTextColor font-sans md:font-serif"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/About/AboutPage"
            className="text-smallTextColor font-sans md:font-serif"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/Contact/ContactPage"
            className="text-smallTextColor font-sans md:font-serif"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About/AboutPage" element={<AboutPage />} />
          <Route path="/Services/ServicePage" element={<ServicePage />} />
          <Route path="/Contact/ContactPage" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

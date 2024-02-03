import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "../About/AboutPage";
import ContactPage from "../Contact/ContactPage";
import ServicePage from "../Services/ServicePage";

function navbar() {
  return (
    <div className="menu">
      <ul className="flex items-center gap-10">
        <li>
          <a className="text-smallTextColor font-sans md:font-serif ">Home</a>
        </li>
        <li>
          <a className="text-smallTextColor font-sans md:font-serif ">
            Services
          </a>
        </li>
        <li>
          <a className="text-smallTextColor font-sans md:font-serif ">About</a>
        </li>
        <li>
          <a className="text-smallTextColor font-sans md:font-serif ">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
  {
    /* <BrowserRouter>
        <Routes>
            <Route path = '/Home' element={
                <HomePage/>
            }/>
            <Route path = "/About" element={
                <AboutPage/>
            }/>
            <Route path = "/Services" element={
                <ServicesPage/>
            }/>
            <Route path = "/Contact" element={
                <ContactPage/>
            }/>


        
        </Routes>
    </BrowserRouter> */
  }
}

export default navbar;

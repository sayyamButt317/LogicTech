import { useEffect } from "react";
import Aos from "aos";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "../src/pages/Home";
import Service from "../src/pages/Service";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import { Route,Routes } from 'react-router-dom';
function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
        <Header/>
      <div>
    <Routes>        
      <Route path="/"  element={<Home/>} />
      <Route path="/Service"  element={<Service />}/>
      <Route path="/About"  element={<About/>}/>
      <Route path="/Contact"  element={<Contact/>}/>
    </Routes>
    
    </div>

      <Footer />
    </>
  );
}

export default App;

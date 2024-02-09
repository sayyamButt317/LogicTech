import { useEffect } from "react";
import Aos from "aos";
import "./App.css";
import Header from "./components/Utils/Header";
import Footer from "./components/Utils/Footer";
import Frameworks from "./components/Home/frameworks";
import AboutHero from "./components/About/AboutHero";
import Chooseus from "./components/About/chooseus";

import ServicePage from "./components/Services/ServiceHero";
import CompanyServices from "./components/Services/servicetext";
import Servicelist from "./components/Services/servicelist";
import ContactPage from "./components/Contact/ContactPage";
import Form from "./components/Contact/form";
import Home from "./components/Home/Home"
import Contact from "./components/Contact/Contact";
function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Header />
      <main>
       {/* <Home/> */}
<Contact/>
      </main>
      <Footer />
    </>
  );
}

export default App;

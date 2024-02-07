import { useEffect } from "react";
import Aos from "aos";
import "./App.css";
import Header from "./components/Utils/Header";
import Footer from "./components/Utils/Footer";
import Hero from "./components/Home/Hero";
import Service from "./components/Home/Service";
import Card from "./components/Home/Card";
import Frameworks from "./components/Home/frameworks";
import AboutHero from "./components/About/AboutHero";
import Chooseus from "./components/About/chooseus";

import ServicePage from "./components/Services/ServiceHero";
import CompanyServices from "./components/Services/servicetext";
import Servicelist from "./components/Services/servicelist";
import ContactPage from "./components/Contact/ContactPage";
import Form from "./components/Contact/form";
function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Header />
      <main>
        {/* <Hero />
        <Service />
        <Card /> */}
        {/* <AboutHero />
        <Chooseus /> */}
        {/* <ServicePage />
        <CompanyServices />
        <Servicelist /> */}
        <ContactPage />
        <Form />
        {/* <Frameworks /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;

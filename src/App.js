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
function App() {
  useEffect(() =>{
    Aos.init();
  },[]);
  return <>
    <Header/>
    <main>
      {/* <Hero/>
      <Service/>
      <Card/> */}
      <AboutHero/>  
{/* <Frameworks/> */}
    </main>
  <Footer/>
  </>
}

export default App;
                      
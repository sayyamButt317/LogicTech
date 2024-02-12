import { useEffect } from "react";
import Aos from "aos";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "../src/pages/Home";
function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Header />
      <main>
       <Home/> 
      </main>
      <Footer />
    </>
  );
}

export default App;

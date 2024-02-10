import { useEffect } from "react";
import Aos from "aos";
import "./App.css";
import Header from "./components/Utils/Header";
import Footer from "./components/Utils/Footer";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Header />
      <main>
       {/* <Home/> */}
{/* <Contact/> */}
<About/>
      </main>
      <Footer />
    </>
  );
}

export default App;

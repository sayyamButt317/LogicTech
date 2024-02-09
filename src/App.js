import { useEffect } from "react";
import Aos from "aos";
import "./App.css";
import Header from "./components/Utils/Header";
import Footer from "./components/Utils/Footer";
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

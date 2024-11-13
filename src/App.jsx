import './App.css'
import Navbar from "./Navbar.jsx";
import Section from "./Section.jsx";
import FullImage from "./FullImage.jsx";
import Awesome from "./Awesome.jsx";
import Service from "./Service.jsx";
import Advantage from "./Advantage.jsx";
import FaQ from "./FaQ.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <>
     <Navbar/>
     <Section/>
     <FullImage/>
     <Awesome/>
     <Service/>
     <Advantage/>
     <FaQ/>
     <Footer/>
    </>
  );
}

export default App;
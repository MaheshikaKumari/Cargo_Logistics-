import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import AboutSection from "./components/aboutus";
import Services from "./components/services";
import Gallery from "./components/gallery";
import Contact from "./components/contact";
import Footer from "./components/footer";
import TrackShipment from "./components/TrackShipment";
import GetQuote from "./components/getQuote";
import AboutDetails from "./components/AboutDetails";

function Home() {
  return (
    <>
      <Hero />
      <AboutPage />
      <Services/>
      <Gallery/>
      <Contact/>
      <Footer/>

    </>
  );
}

function AboutPage() {
  return (
    <>
      <AboutDetails />
    </>
  );
}



function App() {
  return (
    <>
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-details" element={<AboutPage />} />
        <Route path="/services" element={<Services/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/track" element={<TrackShipment />} />
         <Route path="/quote" element={<GetQuote />} /> 
         <Route path="/about-details" element={<AboutDetails />} />
        

      </Routes>
    </>
  );
}

export default App;

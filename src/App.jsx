import Navbar from "./components/navbar";
import Flashback from "./components/Flashback";
import Hero from "./components/Hero";
import About from "./components/About";
import Tracks from "./components/Tracks";
import Timeline from "./components/Timeline";
import Prizes from "./components/Prizes";
import Benefits from "./components/Benefits";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Location from "./components/Location";
import CyberBackground from "./effects/CyberBackground";

function App() {
  return (
    <>
      <CyberBackground/>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Flashback />
        <Tracks />
        <Timeline />
        <Prizes />
        <Benefits />
        <FAQ />
        <Location/>
        <CTA />
        <Footer/>
      </main>
    </>
  );
}

export default App;
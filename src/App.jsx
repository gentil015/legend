import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Members from "./sections/Members";
import MusicSection from "./sections/MusicSection";
import Videos from "./sections/Videos";
import Gallery from "./sections/Gallery";
import Events from "./sections/Events";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div className="bg-void min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Members />
        <MusicSection />
        <Videos />
        <Gallery />
        <Events />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

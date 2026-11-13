import Preloader from "./components/Preloader";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import FeaturedProjects from "./components/FeaturedProjects";
import AlsoBuilt from "./components/AlsoBuilt";
import Journey from "./components/Journey";
import Leadership from "./components/Leadership";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:bg-violet focus:px-4 focus:py-2 focus:text-white">
        Skip to content
      </a>
      <Preloader />
      <Nav />
      <main>
        <Hero />
        <About />
        <TechStack />
        <FeaturedProjects />
        <AlsoBuilt />
        <Journey />
        <Leadership />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

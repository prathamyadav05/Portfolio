import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;

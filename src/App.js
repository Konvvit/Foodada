import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Testimonial from "./Components/Testimonial";
import Work from "./Components/Work";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="testimonials">
        <Testimonial />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;

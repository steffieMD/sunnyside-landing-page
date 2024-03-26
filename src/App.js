import "./App.css";
import Header from "./Header";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Gallery from "./Gallery";
import Footer from "./Footer";
import Accordion from "./Accordion";

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Testimonials />
      <Accordion />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;

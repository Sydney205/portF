import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from './components/Footer'

function App() {
  return (
    <main className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import Footer from './components/Footer';
import About from './components/about/About';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className='mainapp'>
      <Navbar />
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

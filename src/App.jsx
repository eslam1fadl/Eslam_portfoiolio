import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'// src/App.jsx
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import Footer from './components/Footer';
import About from './components/about/About';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';

function App() {

  return (
    <>
      <div className='mainapp'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>





    </>
  );
}

export default App;

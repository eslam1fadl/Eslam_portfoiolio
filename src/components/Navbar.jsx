import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="shadow flex items-center justify-between px-6 md:px-16 py-4 text-white top-0 fixed w-full z-10 bg-[#0E0B16]/90 backdrop-blur-md">
      {/* Logo */}
      <div
        className="text-3xl md:text-4xl font-extrabold cursor-pointer bg-gradient-to-r from-[#9D4EDD] via-[#C77DFF] to-[#FFB347] bg-clip-text text-transparent 
                   hover:scale-110 transition-transform duration-300 tracking-wide"
      >
        Eslam
      </div>

      {/* Hamburger (Mobile) */}
      <button
        className="md:hidden text-white focus:outline-none text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✖' : '☰'}
      </button>

      {/* Nav Links */}
      <ul
        className={`flex flex-col md:flex-row gap-6 md:gap-8 text-lg absolute md:static left-0 top-16 md:top-auto w-full md:w-auto 
                    bg-[#1A1A2E] md:bg-transparent p-6 md:p-0 transition-all duration-300 
                    ${isOpen ? 'block' : 'hidden md:flex'}`}
      >
        {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
          <li key={index} onClick={scrollToTop}>
            <NavLink
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `font-medium tracking-wide transition-colors duration-300 hover:text-[#FFB347] 
                 ${isActive ? 'text-[#FFB347]' : 'text-gray-200'}`
              }
              onClick={() => setIsOpen(false)}
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

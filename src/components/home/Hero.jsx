import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="text-white min-h-screen flex flex-col justify-center items-center text-center px-6 scroll">
      
      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="text-[#3B82F6]">Eslam Fadl</span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-lg md:text-2xl mb-8 max-w-2xl text-gray-300"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        A <span className="text-[#FFB347]">Front-End Developer</span> passionate about 
        creating clean, modern, and interactive web experiences using 
        <span className="text-[#3B82F6]"> React</span> & the latest web technologies. <br />
       
      </motion.p>

      {/* Button Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        {/* View Work */}
        <a
          href="#projects"
          className="bg-[#FFB347] text-[#0E0B16] px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#ffca66] transition duration-300"
        >
          View My Work
        </a>

        {/* Contact Me */}
        <NavLink
          to="contact"
          className="border-2 border-[#FFB347] text-[#FFB347] px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#FFB347] hover:text-[#0E0B16] transition duration-300"
        >
          Contact Me
        </NavLink>
      </motion.div>
    </section>
  );
};

export default Hero;

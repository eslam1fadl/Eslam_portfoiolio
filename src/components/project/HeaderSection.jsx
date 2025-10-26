import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const HeaderSection = () => {
  return (
    <section className="bg-[#0E0B16] text-[#F8F9FA] min-h-screen flex flex-col justify-center items-center px-6 md:px-20 text-center">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
      >
        Hi, I'm{" "}
        <span className="text-[#3B82F6]">Eslam Fadl</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-6 text-lg sm:text-xl md:text-2xl max-w-2xl text-gray-300"
      >
        A passionate{" "}
        <span className="text-[#FFB347] font-semibold">Front-End Developer</span>{" "}
        focused on building clean, interactive, and user-friendly web experiences using{" "}
        <span className="text-[#3B82F6] font-semibold">React</span> and modern technologies.
      </motion.p>

      {/* Call to Action Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-10 flex flex-wrap gap-4 justify-center"
      >
        <a
          href="#project"
          className="bg-[#FFB347] text-[#0E0B16] px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#ffca66] transition duration-300"
        >
          View My Work
        </a>
        <NavLink
          to="/contact"
          className="border-2 border-[#3B82F6] text-[#3B82F6] px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#3B82F6] hover:text-white transition duration-300"
        >
          Contact Me
        </NavLink>
      </motion.div>
    </section>
  );
};

export default HeaderSection;

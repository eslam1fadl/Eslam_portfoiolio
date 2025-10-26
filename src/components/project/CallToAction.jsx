import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="bg-[#0E0B16] text-[#F8F9FA] py-20 px-6 text-center min-h-screen flex items-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-3xl mx-auto"
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#FFB347]">
          Let’s Build Something Great Together
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
          I'm <span className="text-[#FFB347] font-semibold">Eslam Fadl</span>, a{" "}
          <span className="text-[#3B82F6] font-semibold">Frontend Developer</span>{" "}
          passionate about creating clean, responsive, and modern web
          applications using <span className="text-[#FFB347] font-semibold">React.js</span>,{" "}
          <span className="text-[#FFB347] font-semibold">Tailwind CSS</span>, and{" "}
          <span className="text-[#FFB347] font-semibold">Next.js</span>. <br />
          I’m currently expanding my skills in{" "}
          <span className="text-[#FFB347] font-semibold">Backend Development</span>{" "}
          with Node.js and Express to become a full-stack developer.  
          Let’s turn your vision into a fully functional and visually stunning project.
        </p>

        {/* Button */}
        <motion.div whileHover={{ scale: 1.1 }}>
          <NavLink
            to="/contact"
            className="bg-[#FFB347] text-[#0E0B16] px-8 py-3 rounded-full text-lg font-semibold 
                       hover:bg-[#ffca66] transition duration-300 shadow-lg hover:shadow-[#3B82F6]/50"
          >
            Contact Me
          </NavLink>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CallToAction;

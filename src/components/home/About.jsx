import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-[#0E0B16] text-[#F8F9FA] py-16 px-6 md:px-20 scroll min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

        {/* Image */}
        <motion.div
          className="overflow-hidden flex justify-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          
        >
          <img
            src="/images/Gemini_Generated_Image_5lu65m5lu65m5lu6.png"
            loading="lazy"
            alt="Galaxy"
            className="rounded-2xl hover:scale-110 transition-transform ease-in-out duration-700 cursor-pointer w-full max-w-sm md:max-w-full shadow-lg shadow-[#3B82F6]/40"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="flex flex-col gap-6 rounded-2xl md:col-span-2 text-center md:text-left"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#3B82F6]">
            About Me
          </h2>

          <p className="tracking-wide text-base md:text-lg leading-relaxed">
            I’m <span className="text-[#FFB347] font-semibold">Eslam Fadl</span>, a passionate 
            <span className="text-[#3B82F6] font-semibold"> Front-End Developer</span> who loves crafting 
            modern and responsive web interfaces using React, Tailwind, and Framer Motion.  
            Currently, I’m expanding my skills into the 
            <span className="text-[#FFB347] font-semibold"> Back-End world</span> with Node.js and Express 
            to become a <span className="text-[#3B82F6] font-semibold">Full-Stack Developer</span>.  
            I enjoy building real-world projects that merge creativity with functionality, 
            especially in medical and AI-driven web applications.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <NavLink
              to="/about"
              className="bg-[#FFB347] text-[#0E0B16] px-6 py-3 rounded-full text-base md:text-lg font-semibold w-fit mx-auto md:mx-0 hover:bg-[#ffca66] transition duration-300"
            >
              Read More
            </NavLink>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;

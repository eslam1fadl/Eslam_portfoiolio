import React from "react";
import { motion } from "framer-motion";

const AboutIntro = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-[#0E0B16] text-[#F8F9FA] px-6 py-20">
      
      {/* Profile Image */}
      <motion.div
        className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-[#3B82F6] shadow-lg shadow-[#3B82F6]/40 mb-8"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src="/images/Gemini_Generated_Image_9cr4g39cr4g39cr4.png"
          alt="Eslam Fadl Profile"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Heading */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-3"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      >
        Hi, I’m <span className="text-[#3B82F6]">Eslam Fadl</span>
      </motion.h1>

      {/* Sub Heading */}
      <motion.h2
        className="text-lg md:text-2xl text-gray-300 mb-6"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      >
        Front-End Developer | MERN Stack | Tech Enthusiast
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        className="max-w-2xl text-gray-400 leading-relaxed text-base md:text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1.2 }}
      >
        I’m a passionate <span className="text-[#3B82F6]">Front-End Developer</span> focused on building
        modern, responsive, and user-friendly web experiences. I love transforming
        complex ideas into clean, interactive designs that look great and perform
        seamlessly.
        <br />
        <br />
         Graduate of <span className="text-[#FFB347]">Faculty of Science</span>, IT Department.
      </motion.p>

      {/* Button */}
      <motion.a
        href="/contact"
        className="mt-10 px-8 py-3 bg-gradient-to-r from-[#3B82F6] to-[#FFB347] text-[#0E0B16] font-semibold rounded-full shadow-md shadow-[#3B82F6]/40 hover:opacity-90 transition duration-300"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Let’s Connect
      </motion.a>
    </section>
  );
};

export default AboutIntro;

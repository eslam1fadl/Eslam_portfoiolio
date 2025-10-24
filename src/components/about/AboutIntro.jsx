import React from "react";
import { motion } from "framer-motion";
import img from "../../assets/Gemini_Generated_Image_9cr4g39cr4g39cr4.png";

const AboutIntro = () => {
  return (
    <section className="min-h-screen justify-center text-[#F8F9FA] py-20 px-6 flex flex-col items-center text-center bg-[#0E0B16]">
      {/* Profile Image */}
      <motion.div
        className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-[#9D4EDD] shadow-lg shadow-[#9D4EDD]/40 mb-6"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={img}
          alt="Eslam Fadl Profile"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Heading */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-4"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
      >
        Hi, I’m <span className="text-[#9D4EDD]">Eslam Fadl</span>
      </motion.h1>

      {/* Sub Heading */}
      <motion.h2
        className="text-xl md:text-2xl text-gray-300 mb-6"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
      >
        Front-End Developer | Mearn stuck | Tech Enthusiast
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        className="max-w-2xl text-gray-400 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1.2 }}
      >
        I’m a passionate Front-End Developer focused on creating modern,
        responsive, and user-friendly web experiences. I love transforming
        complex ideas into clean, interactive designs that not only look great
        but also perform seamlessly. Always learning, always improving 
      </motion.p>

      {/* Button */}
      <motion.a
        href="/contact"
        className="mt-8 px-6 py-3 bg-[#9D4EDD] text-white font-semibold rounded-2xl shadow-md shadow-[#9D4EDD]/50 hover:bg-[#7b2cbf] transition-colors"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Let’s Connect 
      </motion.a>
    </section>
  );
};

export default AboutIntro;

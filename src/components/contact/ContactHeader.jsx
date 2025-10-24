import React from "react";
import { motion } from "framer-motion";

const ContactHeader = () => {
  return (
    <section className="bg-[#0E0B16] text-[#F8F9FA] py-20 px-6 text-center min-h-screen flex items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl mx-auto"
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#9D4EDD] to-[#FFB347]"
        >
          Let’s Build Something Amazing Together
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          Hi, I'm <span className="text-[#FFB347] font-semibold">Eslam Fadl</span>, 
          a passionate Front-End Developer focused on crafting clean, interactive, and user-friendly web experiences using React. 
          Whether you have a project in mind or just want to collaborate, I’d love to connect and bring your vision to life.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default ContactHeader;

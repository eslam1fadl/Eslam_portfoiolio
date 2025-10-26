import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiExpress } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3]" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "Git & GitHub", icon: <FaGitAlt className="text-[#F05032]" /> },
];

const Skills = () => {
  return (
    <section className="bg-[#0E0B16] text-[#F8F9FA] py-16 px-6 md:px-20 min-h-screen">
      {/* Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text bg-gradient-to-r text-[#3B82F6]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills
        <span className="block w-16 h-1 bg-[#F7DF1E] mx-auto mt-3 rounded"></span>
      </motion.h2>


      {/* Skills Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="group flex flex-col items-center justify-center p-6 bg-[#1A1A2E] rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[#3B82F6]/30 hover:shadow-xl cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* <div className="text-5xl mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_#3B82F6]">
              {skill.icon}
            </div> */}
            <div className="text-5xl mb-3 transition-transform duration-300 group-hover:scale-110">
              {skill.icon}
            </div>
            <span className="text-sm font-semibold text-gray-200 group-hover:text-[#FFB347] transition-colors duration-300">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

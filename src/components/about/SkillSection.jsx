import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiBootstrap, SiExpress, SiMongodb, SiMysql, SiPostman, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" /> },
  { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
  { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-[#68A063]" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#4DB33D]" /> },
  { name: "MySQL", icon: <SiMysql className="text-[#00758F]" /> },
    { name: "Postman", icon: <SiPostman className="text-[#12927F]" /> },
  { name: "Git & GitHub", icon: <FaGitAlt className="text-[#F05033]" /> },
];

const SkillsSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-16 bg-[#0E0B16] text-white min-h-screen">
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-center bg-clip-text bg-gradient-to-r text-[#3B82F6] "
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Skills
      </motion.h2>

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

export default SkillsSection;

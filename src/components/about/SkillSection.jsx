import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", percent: 90 },
  { name: "CSS", percent: 85 },
  { name: "JavaScript", percent: 80 },
  { name: "React", percent: 75 },
  { name: "Node.js", percent: 70 },
  { name: "Express.js", percent: 65 },
  { name: "MongoDB", percent: 60 },
  { name: "Git & GitHub", percent: 75 },
];

const SkillsSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-16 bg-[#0E0B16] text-white min-h-screen">
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#9D4EDD] to-[#FFB347]"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Skills
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
          >
            <div className="flex justify-between mb-1 text-sm sm:text-base">
              <span className="font-medium">{skill.name}</span>
              <span className="font-semibold">{skill.percent}%</span>
            </div>
            <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-4 bg-gradient-to-r from-[#9D4EDD] to-[#FFB347] rounded-full hover:scale-105 transition-transform duration-300"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percent}%` }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;

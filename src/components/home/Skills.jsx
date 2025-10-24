import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript (ES6+)", level: 85 },
  { name: "React.js", level: 90 },
  // { name: "Next.js", level: 80 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Bootstrap", level: 85 },
  { name: "Node.js", level: 70 },
  { name: "Express.js", level: 70 },
  { name: "Git & GitHub", level: 85 },
];

const Skills = () => {
  return (
    <section className="w-full py-16 px-6 bg-[#0E0B16] text-[#F8F9FA] scroll min-h-screen">
      {/* Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills
        <span className="block w-16 h-1 bg-[#9D4EDD] mx-auto mt-3 rounded"></span>
      </motion.h2>

      {/* Skills Grid */}
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="space-y-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            {/* Skill Name & Percentage */}
            <div className="flex justify-between items-center">
              <span className="text-base md:text-lg font-medium">{skill.name}</span>
              <span className="text-[#FFB347] font-semibold text-sm md:text-base">
                {skill.level}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-[#1A1A2E] rounded-full h-3 overflow-hidden">
              <motion.div
                className="h-3 rounded-full shadow-lg"
                style={{ backgroundColor: "#9D4EDD" }}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

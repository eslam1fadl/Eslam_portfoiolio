import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Personal Projects & Route Academy",
    duration: "2024 - Present",
    description: `
      I am a front-end developer passionate about building interactive and scalable web applications 
      using modern technologies. I specialize in creating responsive, user-friendly interfaces with 
      React.js, Next.js, JavaScript (ES6+), Tailwind CSS, and Bootstrap — ensuring smooth, optimized, 
      and accessible designs across all devices.`,
  },
  {
    role: "Backend Developer (Node.js & Express.js)",
    company: "Self-Learning & MERN Stack Projects",
    duration: "2025 - Present",
    description: `
      In addition to front-end development, I have strong backend experience using Node.js and Express.js. 
      I work on building RESTful APIs, designing server-side logic, and managing databases with MongoDB, 
      including schema design and data modeling. I enjoy integrating front-end and back-end applications 
      to deliver complete, full-stack web solutions.`,
  },
  {
    role: "Education & Training",
    company: "Route Academy & Minia University",
    duration: "2025 - 2025",
    description: `
      I earned a diploma in Front-End Development from Route Academy, where I learned modern 
      web practices and project-based development. I’m also a graduate of the Department of 
      Information Technology, Faculty of Science, Minia University (2025). I’m eager to join 
      a professional development team to contribute my skills, grow technically, and collaborate 
      on innovative projects.`,
  },
];

const Experience = () => {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-16 text-white min-h-screen bg-[#0E0B16]">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#FFB347]"
      >
        My Experience
      </motion.h2>

      {/* Experience Cards */}
      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-[#161024] p-6 rounded-2xl shadow-lg hover:shadow-[#3B82F6]/30 transition-shadow sm:flex sm:justify-between sm:items-start sm:gap-6"
          >
            {/* Left Column */}
            <div className="sm:w-1/3 mb-4 sm:mb-0">
              <h3 className="text-xl sm:text-2xl font-bold text-[#FFB347]">
                {exp.role}
              </h3>
              <p className="text-gray-400">{exp.company}</p>
              <p className="text-gray-500 text-sm">{exp.duration}</p>
            </div>

            {/* Right Column */}
            <div className="sm:w-2/3 text-gray-300 text-base sm:text-lg leading-relaxed whitespace-pre-line">
              {exp.description}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

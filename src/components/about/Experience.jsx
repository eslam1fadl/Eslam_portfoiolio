import React from "react";
import { motion } from "framer-motion";


const experiences = [
  {
    role: "MERN Stack Developer",
    company: "Route Academy",
    duration: "2024 - 2025",
    description: `
      I build full-stack web applications using the MERN stack, with a strong focus on
      React.js, Next.js, Node.js, Express.js, and MongoDB. I develop responsive and
      user-friendly interfaces, build RESTful APIs, implement server-side logic, and
      integrate front-end and back-end systems to create complete, scalable web solutions.
    `,
  },
  {
    role: "Education",
    company: "Minia University – Faculty of Science, IT Department",
    duration: "2021 - 2025",
    description: `
      I graduated from the Department of Information Technology, Faculty of Science, Minia University in 2025, building a strong foundation in software development, web technologies, and information technology.
    `,
  },
  {
    role: "Frontend Developer",
    company: "IonBit (Remote)",
    duration: "2026 - Present",
    description: `
      I work remotely as a Frontend Developer at IonBit, contributing to real-world
      web applications using React.js, Tailwind CSS, and modern JavaScript.
      I focus on building responsive user interfaces, reusable components,
      and maintaining a smooth and consistent user experience across projects.
    `,
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

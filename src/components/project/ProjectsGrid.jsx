import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Agency Website",
    description:
      "Modern digital agency website built with React and Tailwind CSS, featuring smooth animations and a responsive layout.",
    image: "/images/images.jpeg",
    link: "https://agency-iota-lemon.vercel.app/",
  },
  {
    id: 2,
    title: "E-Commerce Website",
    description:
      "A complete e-commerce platform with login, product pages, cart system, and responsive UI using React and Redux.",
    image: "/images/images (1).jpeg",
    link: "https://e-commerce2-qiu6.vercel.app/login",
  },
  {
    id: 3,
    title: "Movies App",
    description:
      "A movie browsing app that fetches real-time data from an API, with search, filtering, and detailed pages built using React.",
    image: "/images/e92ed228a6924420a8963bdc6c9ddef1.webp",
    link: "https://movies-nine-lovat.vercel.app/",
  },
  {
    id: 4,
    title: "Medical Website (Graduation Project)",
    description:
      "Graduation project — a medical platform that allows patients to book appointments, consult doctors online, and check medicine conflicts.",
    image: "/images/images (2).jpeg",
    link: "https://g-project-two.vercel.app/",
  },
  {
    id: 5,
    title: "Games Hub",
    description:
      "A fun games listing website displaying trending and popular games with categories and responsive design.",
    image: "/images/100-best-games-hp-b.webp",
    link: "https://eslam1fadl.github.io/Games/",
  },
  {
    id: 6,
    title: "Global Weather App",
    description:
      "A weather app that provides real-time weather updates for any city worldwide using OpenWeather API.",
    image: "/images/изображение_2023-11-15_143610436-1024x576.jpg",
    link: "https://eslam1fadl.github.io/Global-Weather/",
  },
  {
    id: 7,
    title: "Daniels Portfolio",
    description:
      "A responsive personal portfolio template built with HTML, CSS, and JavaScript showcasing animations and sections.",
    image: "/images/habilidades-portfolio-manager-1024x682-1.webp",
    link: "https://eslam1fadl.github.io/Daniels/",
  },
  {
    id: 8,
    title: "Notes Backend API",
    description:
      "A Node.js and Express backend project for managing notes with CRUD operations and MongoDB integration.",
    image: "/images/the-best-ai-tools-for-taking-notes-in-2025_r4at.jpg",
    link: "https://github.com/pjs-backend/project_notes",
  },
  {
    id: 9,
    title: "Saraha Clone Backend",
    description:
      "A backend system built with Express and MongoDB that mimics the Saraha anonymous messaging platform.",
    image: "/images/the-sarahah-app-is-seen-on-an-iphone-on-28-august-2017-in-this-photo-illustration-saraha-means-honesty-in-arabic-and-the-app-lets-users-send-each-other-anonymous-messages-the-app-has.jpg",
    link: "https://github.com/pjs-backend/saraha_project",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const ProjectsGrid = () => {
  return (
    <section
      id="project"
      className="bg-[#0E0B16] text-[#F8F9FA] py-16 px-6 md:px-20 min-h-screen"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-[#9D4EDD]">
          My Projects
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          A collection of my latest frontend and backend work
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.2 }}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px #9D4EDD" }}
            transition={{ duration: 0.3 }}
            className="bg-[#1A1A2E] rounded-2xl shadow-lg overflow-hidden cursor-pointer"
          >
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
            <div className="p-6 flex flex-col justify-between h-[230px]">
              <div>
                <h3 className="text-xl font-bold text-[#FFB347] mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="mt-4 bg-[#FFB347] text-[#0E0B16] px-4 py-2 rounded-full font-semibold text-sm w-fit hover:bg-[#ffca66] transition duration-300"
              >
                View Project
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectsGrid;

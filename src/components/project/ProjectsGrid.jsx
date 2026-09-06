import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 0,
    title: "Clinic Management System",
    description:
      "A desktop clinic management system for managing patients, appointments, payments, inventory, and WhatsApp reminders with role-based access and financial tracking.",
    image: "https://i.ibb.co/tRhCY47/17341122421585.png",
    link: "https://drive.google.com/file/d/1LHPqEyTOPvyoC4c6mANjwtdeGkjZKLlj/view?usp=sharing",
  },
  {
    id: 1,
    title: "Agency Website",
    description:
      "Modern digital agency website built with React and Tailwind CSS, featuring smooth animations and a responsive layout.",
    image: "https://g.top4top.io/p_3782m3vtq1.jpg",
    link: "https://agency-iota-lemon.vercel.app/",
  },
  {
    id: 2,
    title: "Basta E-Commerce Platform",
    description:
      "A production e-commerce platform developed at Ionbit, featuring a responsive interface, Zustand state management, and RESTful API integration. Currently in the testing phase.",
    image: "https://i.ibb.co/MkF42PjP/21424887.jpg",
    link: "https://bs6a.com/",
  },
  {
    id: 3,
    title: "Medical Website (Graduation Project)",
    description:
  "Graduation project at the Faculty of Science, Minya University. A modern travel website built with React.js",   
   image: "https://i.ibb.co/27Pk3HRd/special-img.jpg",
    link: "https://g-project-two.vercel.app/",
  },
  {
    id: 4,
    title: "travel-site",
    description:
      "Nomadica – Travel landing page built with Next.js, showcasing top destinations with modern design and smooth animations.",
    image: "https://i.ibb.co/gZD9d9n0/globaltravelandtourism.jpg",
    link: "https://travel-site-aqbl.vercel.app/",
  },
  {
    id: 5,
    title: "E-Commerce Website",
    description:
      "Graduation project for the Front-End Development Diploma at Route Academy. An e-commerce platform built with React and Redux",
       image: "https://i.ibb.co/8gdnPzkc/showing-cart-trolley-shopping-online-sign-graphic-53876-133967.avif",
    link: "https://ecommerce-wheat-eight-45.vercel.app/",
  },
  
  {
    id: 6,
    title: "Movies App",
    description:
      "A movie browsing app that fetches real-time data from an API, with search, filtering, and detailed pages built using React.",
    image: "/images/e92ed228a6924420a8963bdc6c9ddef1.webp",
    link: "https://movies-nine-lovat.vercel.app/",
  },
  
  {
    id:7,
    title: "Games Hub",
    description:
      "A fun games listing website displaying trending and popular games with categories and responsive design.",
    image: "/images/100-best-games-hp-b.webp",
    link: "https://eslam1fadl.github.io/Games/",
  },
  {
    id: 8,
    title: "Global Weather App",
    description:
      "A weather app that provides real-time weather updates for any city worldwide using OpenWeather API.",
    image: "https://i.ibb.co/VY09fD6S/com-precisedefend-vitiaz-icon-2023-09-21-21-55-05.png",
    link: "https://eslam1fadl.github.io/Global-Weather/",
  },
  {
    id: 9,
    title: "Daniels Portfolio",
    description:
      "A responsive personal portfolio template built with HTML, CSS, and JavaScript showcasing animations and sections.",
    image: "/images/habilidades-portfolio-manager-1024x682-1.webp",
    link: "https://eslam1fadl.github.io/Daniels/",
  },
  {
    id: 10,
    title: "Notes Backend API",
    description:
      "A Node.js and Express backend project for managing notes with CRUD operations and MongoDB integration.",
    image: "/images/the-best-ai-tools-for-taking-notes-in-2025_r4at.jpg",
    link: "https://github.com/pjs-backend/project_notes",
  },
  {
    id: 11,
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
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ProjectsGrid = () => {
  return (
    <section
      id="project"
      className="bg-[#0E0B16] text-[#F8F9FA] py-16 px-4 sm:px-6 md:px-20 min-h-screen"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-[#3B82F6]">
          My Projects
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          A collection of my latest frontend and backend work
        </p>
      </div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px #3B82F6" }}
            transition={{ duration: 0.3 }}
            className="bg-[#1A1A2E] rounded-2xl shadow-lg overflow-hidden cursor-pointer"
          >
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
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

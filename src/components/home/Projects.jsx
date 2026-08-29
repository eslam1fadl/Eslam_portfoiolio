import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const projects = [
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
    title: "E-Commerce Website",
    description:
      "Graduation project for the Front-End Development Diploma at Route Academy. An e-commerce platform built with React and Redux",
    image: "https://i.ibb.co/8gdnPzkc/showing-cart-trolley-shopping-online-sign-graphic-53876-133967.avif",
    link: "https://eccommerce-ebon.vercel.app/",
  },
  {
    id: 3,
    title: "Medical Website (Graduation Project)",
    description:
      "Graduation project at the Faculty of Science, Minya University. A modern travel website built with React.js",
    image: "https://i.ibb.co/27Pk3HRd/special-img.jpg",
    link: "https://g-project-two.vercel.app/",
  }
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  hover: { scale: 1.05, y: -10, rotate: 1, transition: { duration: 0.3, ease: "easeInOut" } },
}

const FeaturedProjects = () => {
  return (
    <section id='projects' className="bg-[#0E0B16] text-[#F8F9FA] py-16 px-6 md:px-20 min-h-screen">
      {/* Section Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-[#3B82F6]">
          Featured Projects
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          A selection of projects I've worked on recently
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px #3B82F6" }}
            transition={{ duration: 0.3 }}
            className="bg-[#1A1A2E] rounded-2xl shadow-lg overflow-hidden cursor-pointer"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
              referrerPolicy="no-referrer"
              loading="eager"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/images/fallback.jpg";
              }}
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

      {/* See More Button */}
      <motion.div
        className="flex justify-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <NavLink
          to="/projects"
          className="bg-[#FFB347] text-[#0E0B16] px-6 py-3 rounded-full text-base md:text-lg font-semibold hover:bg-[#ffca66] transition duration-300"
        >
          See More
        </NavLink>
      </motion.div>
    </section>
  )
}

export default FeaturedProjects
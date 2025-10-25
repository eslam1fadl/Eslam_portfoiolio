import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

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
    title: "Medical Website (Graduation Project)",
    description:
      "Graduation project — a medical platform that allows patients to book appointments, consult doctors online, and check medicine conflicts.",
    image: "/images/images (2).jpeg",
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
        <h2 className="text-3xl md:text-5xl font-bold text-[#9D4EDD]">
          Featured Projects
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          A selection of projects I’ve worked on recently
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

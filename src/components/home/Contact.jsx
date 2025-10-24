import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section className="bg-[#0E0B16] text-[#F8F9FA] py-20 px-6 text-center scroll min-h-screen flex flex-col justify-center">
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-5xl font-bold mb-6 text-[#9D4EDD]"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Let's Work Together
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        I'm <span className="text-[#FFB347] font-semibold">Eslam Fadl</span>, a
        <span className="text-[#9D4EDD] font-semibold"> Frontend Developer</span>
        learning <span className="text-[#FFB347] font-semibold">Backend</span>
        to become full-stack. Let’s build something great together!
      </motion.p>


      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <NavLink
          to="/contact"
          className="bg-[#FFB347] text-[#0E0B16] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#ffca66] transition duration-300"
        >
          Contact Me
        </NavLink>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=eslam.fadl2338@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#FFB347] text-[#FFB347] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#FFB347] hover:text-[#0E0B16] transition duration-300"
        >
          Send Email
        </a>



      </motion.div>
    </section>
  )
}

export default Contact

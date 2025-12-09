import React from "react";
import { motion } from "framer-motion";

const DetailedBio = () => {
  return (
    <section className="text-[#F8F9FA] py-16 px-4 sm:px-6 md:px-16 min-h-screen bg-[#0E0B16]">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* My Journey */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3B82F6] mb-4 text-center sm:text-left">
            My Journey
          </h3>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
            My journey in web development started out of pure curiosity — I
            wanted to understand how the websites I use every day actually work.
            Over time, this curiosity turned into a deep passion. I joined{" "}
            <span className="text-[#FFB347] font-semibold">Route Academy</span>{" "}
            where I studied front-end development and built my skills in HTML,
            CSS, JavaScript, React, and modern frameworks. Through consistent
            practice, I’ve grown from writing simple layouts to creating
            complete interactive applications. Now, I’m expanding my knowledge
            by studying{" "}
            <span className="text-[#FFB347] font-semibold">Back-End
              development</span> to understand how servers, databases, and APIs
            power the web.
          </p>
        </motion.div>

        {/* What I Do */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3B82F6] mb-4 text-center sm:text-left">
            What I Do
          </h3>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
            I’m a <span className="text-[#FFB347] font-semibold">Front-End Developer </span>
            specializing in building responsive and scalable web applications.
            I work with modern technologies like{" "}
            <span className="text-[#FFB347] font-semibold">React.js</span>,{" "}
            <span className="text-[#FFB347] font-semibold">JavaScript (ES6+)</span>,{" "}
            <span className="text-[#FFB347] font-semibold">Tailwind CSS</span>,{" "}
            and <span className="text-[#FFB347] font-semibold">Bootstrap</span>{" "}
            to deliver clean, maintainable, and high-performance user interfaces.
            I focus on writing clean code, optimizing performance, and ensuring cross-browser
            compatibility while integrating RESTful APIs to build complete, real-world applications.
          </p>
        </motion.div>


        {/* Future Goals */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3B82F6] mb-4 text-center sm:text-left">
            Future Goals
          </h3>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
            My next step is to master back-end development with{" "}
            <span className="text-[#FFB347] font-semibold">Node.js</span> and{" "}
            <span className="text-[#FFB347] font-semibold">Express</span> to
            become a full-stack developer. I aim to work on{" "}
            <span className="text-[#FFB347] font-semibold">
              real-world projects
            </span>
            , collaborate with talented teams, and keep learning new
            technologies that push me forward as a developer.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DetailedBio;

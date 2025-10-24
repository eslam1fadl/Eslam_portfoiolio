import React from "react";
import { motion } from "framer-motion";

const personalInfo = {
    name: "Eslam Fadl",
    email: "eslamfadl.dev@gmail.com",
    location: "Egypt",
    github: "https://github.com/eslam1fadl",
    linkedin: "https://www.linkedin.com/in/eslam-fadl-4688742a9/",
    hobby: "Coding, Reading Tech Blogs",
    statement:
        "I’m a dedicated web developer passionate about building modern, responsive, and user-friendly web applications. I studied Front-End Development at Route Academy, mastering HTML, CSS, JavaScript, React, and modern frameworks. Currently, I’m expanding my skills by studying Back-End development to become a Full Stack Developer.",
};

const PersonalSection = () => {
    return (
        <section className="py-16 px-4 sm:px-6 md:px-16 text-white min-h-screen">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#9D4EDD] to-[#FFB347]">
                Personal Info
            </h2>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto bg-[#1A1A2E] p-8 rounded-2xl shadow-lg space-y-6"
            >
                {/* Statement */}
                <p className="text-gray-300 text-base sm:text-lg">{personalInfo.statement}</p>

                {/* Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-300">
                    <div>
                        <h4 className="font-semibold text-[#FFB347]">Name</h4>
                        <p>{personalInfo.name}</p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-[#FFB347]">Email</h4>
                        <p>{personalInfo.email}</p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-[#FFB347]">Location</h4>
                        <p>{personalInfo.location}</p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-[#FFB347]">Hobby</h4>
                        <p>{personalInfo.hobby}</p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-[#FFB347]">GitHub</h4>
                        <a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#9D4EDD] hover:underline break-all"
                        >
                            {personalInfo.github}
                        </a>
                    </div>

                    <div>
                        <h4 className="font-semibold text-[#FFB347]">LinkedIn</h4>
                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#9D4EDD] hover:underline break-all"
                        >
                            {personalInfo.linkedin}
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default PersonalSection;

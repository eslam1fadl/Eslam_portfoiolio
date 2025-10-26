import React from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiMapPin,
  FiFacebook,
} from "react-icons/fi";

const ContactInfo = () => {
  const infoData = [
    {
      id: 1,
      icon: <FiMail size={24} />,
      title: "Email",
      value: "eslam.fadl2338@gmail.com",
      link: "mailto:eslam.fadl2338@gmail.com",
    },
    {
      id: 2,
      icon: <FiGithub size={24} />,
      title: "GitHub",
      value: "github.com/eslamfadl",
      link: "https://github.com/eslam1fadl",
    },
    {
      id: 3,
      icon: <FiLinkedin size={24} />,
      title: "LinkedIn",
      value: "linkedin.com/in/eslam-fadl",
      link: "https://www.linkedin.com/in/eslam-fadl-4688742a9/",
    },
    {
      id: 4,
      icon: <FiInstagram size={24} />,
      title: "Instagram",
      value: "@eslam_fadl10",
      link: "https://www.instagram.com/eslam_fadl10?igsh=Yzd4Ync0MGl0a2Ft",
    },
    {
      id: 5,
      icon: <FiFacebook size={24} />,
      title: "Facebook",
      value: "Eslam Fadl",
      link: "https://www.facebook.com/share/1PSh7usRVE/",
    },
    {
      id: 6,
      icon: <FiMapPin size={24} />,
      title: "Location",
      value: "Egypt",
      link: "#",
    },
  ];

  return (
    <section className="bg-[#0E0B16] text-[#F8F9FA] py-16 px-6 md:px-20 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#FFB347]"
        >
          Contact Information
        </motion.h3>

        {/* Info Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {infoData.map((info, index) => (
            <motion.a
              href={info.link}
              key={info.id}
              target={info.link.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-[#1A1A2E] p-6 rounded-2xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-[#3B82F6]/20 cursor-pointer"
            >
              <div className="text-[#FFB347] mb-4">{info.icon}</div>
              <h4 className="text-lg font-semibold text-[#3B82F6] mb-1">
                {info.title}
              </h4>
              <p className="text-gray-300 text-sm">{info.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;

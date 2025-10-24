import React from "react";
import { NavLink } from "react-router-dom";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiFacebook,
} from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="text-[#F8F9FA] py-12 px-6 md:px-20 bg-[#0E0B16]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo / Brand */}
        <div>
          <h2 className="text-2xl font-bold text-[#9D4EDD]">Eslam Fadl</h2>
          <p className="text-gray-400 mt-3 text-sm">
            Frontend Developer passionate about crafting modern and responsive web
            applications — currently learning Backend to become a Full-Stack Developer.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-semibold text-[#FFB347] mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li onClick={scrollToTop}>
              <NavLink to="/" className="hover:text-[#9D4EDD] transition">
                Home
              </NavLink>
            </li>
            <li onClick={scrollToTop}>
              <NavLink to="/about" className="hover:text-[#9D4EDD] transition">
                About
              </NavLink>
            </li>
            <li onClick={scrollToTop}>
              <NavLink to="/projects" className="hover:text-[#9D4EDD] transition">
                Projects
              </NavLink>
            </li>
            <li onClick={scrollToTop}>
              <NavLink to="/contact" className="hover:text-[#9D4EDD] transition">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-[#FFB347] mb-4">Contact</h3>
          <p className="text-gray-300 text-sm">Email:</p>
          <a
            href="mailto:eslam.fadl2338@gmail.com"
            className="text-[#9D4EDD] hover:underline text-sm"
          >
            eslam.fadl2338@gmail.com
          </a>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/eslamfadl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub size={22} className="hover:text-[#FFB347] transition" />
            </a>
            <a
              href="https://linkedin.com/in/eslam-fadl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin size={22} className="hover:text-[#9D4EDD] transition" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiTwitter size={22} className="hover:text-[#FFB347] transition" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiInstagram size={22} className="hover:text-[#9D4EDD] transition" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiFacebook size={22} className="hover:text-[#FFB347] transition" />
            </a>
          </div>
        </div>

        {/* Quick CTA + Mailchimp Subscribe */}
        <div>
          <h3 className="text-xl font-semibold text-[#FFB347] mb-4">
            Let’s Connect
          </h3>
          <NavLink
            to="/contact"
            className="bg-[#FFB347] text-[#0E0B16] px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#ffca66] transition duration-300"
          >
            Hire Me
          </NavLink>

          {/* Mailchimp Subscribe Form */}
          <form
            action="https://YOUR-USERNAME.usX.list-manage.com/subscribe/post?u=123abc456&id=789xyz"
            method="post"
            target="_blank"
            className="mt-6 flex flex-col gap-3"
          >
            <input
              type="email"
              name="EMAIL"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-full bg-[#1A1A2E] border border-[#9D4EDD] text-sm focus:outline-none focus:ring-2 focus:ring-[#9D4EDD] flex-1"
              required
            />
            <button
              type="submit"
              className="bg-[#9D4EDD] hover:bg-[#7d3ac9] transition text-white px-6 py-2 rounded-full text-sm font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Eslam Fadl. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

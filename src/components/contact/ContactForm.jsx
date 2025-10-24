import React from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "2d4e7e07-a3d8-42ba-8e61-e42c276828bb");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully");
        event.target.reset();
      } else {
        toast.error(data.message || "Something went wrong!");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#0E0B16] text-[#F8F9FA] py-16 px-6 md:px-20 min-h-screen">
      <div className="max-w-3xl mx-auto">
        {/* Section Title */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#9D4EDD] to-[#FFB347]"
        >
          Contact Me
        </motion.h3>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-300 mb-8 text-lg leading-relaxed"
        >
          Have an idea, a project, or a collaboration in mind?  
          Feel free to drop me a message — I’d love to hear from you!
        </motion.p>

        {/* Contact Form */}
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#1A1A2E] p-8 rounded-2xl shadow-lg space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-[#9D4EDD] mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full p-3 rounded-lg bg-[#0E0B16] text-white border border-[#9D4EDD] focus:outline-none focus:ring-2 focus:ring-[#FFB347] transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-[#9D4EDD] mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              required
              className="w-full p-3 rounded-lg bg-[#0E0B16] text-white border border-[#9D4EDD] focus:outline-none focus:ring-2 focus:ring-[#FFB347] transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-[#9D4EDD] mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              placeholder="Type your message..."
              required
              className="w-full p-3 rounded-lg bg-[#0E0B16] text-white border border-[#9D4EDD] focus:outline-none focus:ring-2 focus:ring-[#FFB347] transition resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: loading ? 1 : 1.05 }}
            whileTap={{ scale: loading ? 1 : 0.95 }}
            disabled={loading}
            className={`w-full py-3 rounded-full font-semibold text-lg transition duration-300 ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-[#FFB347] text-[#0E0B16] hover:bg-[#ffca66]"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
      <ToastContainer position="bottom-right" theme="dark" />
    </section>
  );
};

export default ContactForm;

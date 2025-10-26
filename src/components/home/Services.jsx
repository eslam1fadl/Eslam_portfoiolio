import React from 'react'
import { Code, Layout, Smartphone } from 'lucide-react'

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Building responsive, high-performance websites and applications with modern technologies like React, Node.js, and Express.",
    icon: <Code size={40} className="text-[#3B82F6]" />,
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Designing clean, user-friendly interfaces with focus on usability, accessibility, and modern design principles.",
    icon: <Layout size={40} className="text-[#3B82F6]" />,
  },
  {
    id: 3,
    title: "Mobile-Friendly Solutions",
    description:
      "Creating mobile-first, responsive designs that work seamlessly across devices for the best user experience.",
    icon: <Smartphone size={40} className="text-[#3B82F6]" />,
  },
]

const Services = () => {
  return (
    <section className="bg-[#0E0B16] text-[#F8F9FA] py-16 px-6 md:px-20 scroll min-h-screen">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-[#3B82F6]">
          My Services
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          What I can do to help you build your next project
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-[#1A1A2E] p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500 text-center"
          >
            <div className="flex justify-center mb-6">{service.icon}</div>
            <h3 className="text-xl font-bold text-[#FFB347] mb-4">
              {service.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services

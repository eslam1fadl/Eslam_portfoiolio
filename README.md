<h1 align="center">
  🌐 Eslam Fadl — Frontend Developer Portfolio
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-7.1-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-12-EF0066?style=for-the-badge&logo=framer&logoColor=white" />
  <img src="https://img.shields.io/badge/Node-22.x-339933?style=for-the-badge&logo=node.js&logoColor=white" />
</p>

<p align="center">
  A modern, fast personal portfolio website showcasing my projects, skills, and experience as a Frontend Developer specialized in React and modern web technologies.
</p>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Pages](#-pages)
- [Projects](#-projects)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Color System](#-color-system)
- [Contact](#-contact)

---

## 🌟 Overview

This is the personal portfolio of **Eslam Fadl**, a passionate Frontend Developer who loves building clean, modern, and interactive web experiences.  
The site showcases projects, skills, and contact information within an elegant, fully responsive interface.

---

## ✨ Features

- ⚡ **Blazing Fast** — Built with Vite for the best development and build performance
- 🎨 **Modern Design** — Professional dark UI with a carefully chosen color palette
- 💫 **Smooth Animations** — Polished motion effects powered by Framer Motion
- 📱 **Fully Responsive** — Works perfectly across all screen sizes and devices
- 🧭 **Single Page App** — Instant navigation without full page reloads
- 🔔 **Toast Notifications** — Interactive feedback when submitting the contact form
- 🔝 **Scroll To Top** — Auto scroll-to-top button for better navigation
- 🔍 **SEO Optimized** — Full Meta tags and Open Graph tags configured

---

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| 🏠 Home | `/` | Hero section, Skills, Featured Projects, Services, Contact form |
| 👤 About | `/about` | Personal intro, detailed bio, work experience, and skills |
| 💼 Projects | `/projects` | Full interactive grid of all projects |
| 📬 Contact | `/contact` | Contact form with Toast Notifications |

---

## 🚀 Projects

| # | Project | Technologies | Link |
|---|---------|-------------|------|
| 1 | Clinic Management System | Desktop App | [View](https://drive.google.com/file/d/1LHPqEyTOPvyoC4c6mANjwtdeGkjZKLlj/view) |
| 2 | Agency Website | React, Tailwind CSS | [View](https://agency-iota-lemon.vercel.app/) |
| 3 | Basta E-Commerce Platform | React, Zustand, REST API | [View](https://bs6a.com/) |
| 4 | Medical Website *(Graduation Project)* | React.js | [View](https://g-project-two.vercel.app/) |
| 5 | Nomadica Travel Site | Next.js | [View](https://travel-site-aqbl.vercel.app/) |
| 6 | E-Commerce *(Route Academy)* | React, Redux | [View](https://ecommerce-wheat-eight-45.vercel.app/) |
| 7 | Movies App | React, API Integration | [View](https://movies-nine-lovat.vercel.app/) |
| 8 | Games Hub | HTML, CSS, JS | [View](https://eslam1fadl.github.io/Games/) |
| 9 | Global Weather App | OpenWeather API | [View](https://eslam1fadl.github.io/Global-Weather/) |
| 10 | Daniels Portfolio Template | HTML, CSS, JS | [View](https://eslam1fadl.github.io/Daniels/) |
| 11 | Notes Backend API | Node.js, Express, MongoDB | [View](https://github.com/pjs-backend/project_notes) |
| 12 | Saraha Clone Backend | Express, MongoDB | [View](https://github.com/pjs-backend/saraha_project) |

---

## 🛠️ Tech Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.1.1 | Core UI framework |
| React Router DOM | 7.8.2 | Client-side routing (SPA) |
| Framer Motion | 12.x | Animations and motion effects |
| Tailwind CSS | 3.4 | Utility-first styling |
| React Icons | 5.5 | Skill and UI icons |
| Lucide React | 0.542 | Additional icon set |
| React Toastify | 11.x | Toast notifications |
| React Intersection Observer | 9.x | Trigger animations on scroll |

### Build & Dev Tools

| Tool | Version | Purpose |
|------|---------|---------|
| Vite | 7.1.2 | Build tool & dev server |
| PostCSS | 8.x | CSS processing |
| Autoprefixer | 10.x | Cross-browser CSS support |
| ESLint | 9.x | Code quality linting |

---

## 📁 Project Structure

```
my-portfolio-main/
├── public/
│   └── images/                   # Local project images
├── src/
│   ├── components/
│   │   ├── home/                  # Home page components
│   │   │   ├── Home.jsx           # Home page container
│   │   │   ├── Hero.jsx           # Hero section with CTA buttons
│   │   │   ├── Skills.jsx         # Technical skills display
│   │   │   ├── Projects.jsx       # Featured projects preview
│   │   │   ├── Services.jsx       # Services offered
│   │   │   ├── About.jsx          # Short personal intro
│   │   │   └── Contact.jsx        # Contact form (home version)
│   │   ├── about/                 # About page components
│   │   │   ├── About.jsx          # About page container
│   │   │   ├── AboutIntro.jsx     # Page introduction
│   │   │   ├── DetailedBio.jsx    # Detailed biography
│   │   │   ├── Experience.jsx     # Work experience timeline
│   │   │   ├── PersonalSection.jsx # Personal information
│   │   │   └── SkillSection.jsx   # Detailed skills breakdown
│   │   ├── project/               # Projects page components
│   │   │   ├── Project.jsx        # Projects page container
│   │   │   ├── ProjectsGrid.jsx   # Full projects grid
│   │   │   ├── HeaderSection.jsx  # Page header
│   │   │   └── CallToAction.jsx   # CTA section
│   │   ├── contact/               # Contact page components
│   │   ├── Navbar.jsx             # Top navigation bar
│   │   ├── Footer.jsx             # Footer
│   │   ├── Loader.jsx             # Loading screen
│   │   └── ScrollToTop.jsx        # Scroll-to-top button
│   ├── assets/                    # Static assets
│   ├── App.jsx                    # Main router + layout
│   ├── App.css                    # Global styles
│   ├── index.css                  # Global CSS + Tailwind imports
│   └── main.jsx                   # App entry point
├── index.html                     # Main HTML + Meta tags + SEO
├── package.json                   # Dependencies and scripts
├── tailwind.config.js             # Tailwind configuration
├── vite.config.js                 # Vite configuration
└── eslint.config.js               # ESLint configuration
```

---

## 💻 Getting Started

### Prerequisites

- **Node.js** `v22.x` or higher
- **npm** or **yarn**

### Installation & Running

```bash
# 1. Clone the repository
git clone https://github.com/eslam1fadl/my-portfolio-main.git

# 2. Navigate to the project folder
cd my-portfolio-main

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Then open your browser at: **http://localhost:5173**

### Additional Scripts

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview

# Lint the codebase
npm run lint
```

---

## 🎨 Color System

| Name | Hex | Usage |
|------|-----|-------|
| Background | `#0E0B16` | Main site background |
| Card Background | `#1A1A2E` | Cards and container elements |
| Primary Blue | `#3B82F6` | Headings and links |
| Accent Orange | `#FFB347` | Buttons and highlights |
| Text Light | `#F8F9FA` | Primary text |
| Text Muted | `#9CA3AF` | Secondary / description text |

---

## 📬 Contact

| Platform | Link |
|----------|------|
| 💼 LinkedIn | [linkedin.com/in/eslam-fadl](https://linkedin.com/in/eslam-fadl) |
| 🐙 GitHub | [github.com/eslam1fadl](https://github.com/eslam1fadl) |
| 🌐 Website | [eslamfadl.dev](https://eslamfadl.dev) |

---

<p align="center">
  Made with ❤️ by <strong>Eslam Fadl</strong> — Frontend Developer
</p>


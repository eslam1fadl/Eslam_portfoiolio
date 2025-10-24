import React from 'react'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import FeaturedProjects from './Projects'
import Contact from './Contact'


const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Skills />
            <FeaturedProjects />
            <Contact />
        </div>
    )
}

export default Home

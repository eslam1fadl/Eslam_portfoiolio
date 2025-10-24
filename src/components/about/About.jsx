import React from 'react'
import AboutIntro from './AboutIntro'
import DetailedBio from './DetailedBio'
import SkillsSection from './SkillSection'
import Experience from './Experience'
import PersonalSection from './PersonalSection'
import Contact from '../home/Contact'

const About = () => {
    return (
        <div>
            <AboutIntro />
            <DetailedBio />
            <SkillsSection />
            <Experience />
            <PersonalSection />
            <Contact />
        </div>
    )
}

export default About

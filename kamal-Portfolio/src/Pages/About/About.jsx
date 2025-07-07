import React from 'react'
import HeroSection from '../Home/components/HeroSection'
import ContactSection from '../../component/ContactSection'
import AboutSection from './AboutSection'
import TimelineSection from './TimelineSection'
import EducationSection from './EducationSection'
import GoalsSection from './GoalsSection'

const About = () => {
  return (
   <main>
    <HeroSection/>
    <AboutSection />
    <TimelineSection />
    <EducationSection />
    <GoalsSection />
    <ContactSection/>
   </main>
  )
}

export default About
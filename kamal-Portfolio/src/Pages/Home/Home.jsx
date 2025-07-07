import React from 'react';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import './Home.css';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import TestimonialSection from './components/TestimonialSection';
import TechnicalSkillsSection from './components/TechnicalSkillsSection';
import InsightSection from './components/InsightSection';
import ContactSection from '../../component/ContactSection';

const Home = () => {
  return (
    <main className="homeContainer">
      <HeroSection />
    <ServicesSection />
    <SkillsSection />
    <ProjectsSection/>
    <TestimonialSection/>
    <TechnicalSkillsSection/>
    <InsightSection />
    <ContactSection/>

    </main>
  );
};

export default Home;
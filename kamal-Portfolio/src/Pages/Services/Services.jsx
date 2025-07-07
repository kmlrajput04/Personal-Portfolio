import React from 'react'
import ContactSection from '../../component/ContactSection'
import TestimonialSection from '../Home/components/TestimonialSection'
import TechnicalSkillsSection from '../Home/components/TechnicalSkillsSection'
import ServicesShowcase from './ServicesShowcase'
import ServiceHero from './ServiceHero'


const Services = () => {
  return (
    <main>
      <ServiceHero />
      <ServicesShowcase />
<TestimonialSection/>
      <TechnicalSkillsSection />
        <ContactSection/>
    </main>
  )
}

export default Services
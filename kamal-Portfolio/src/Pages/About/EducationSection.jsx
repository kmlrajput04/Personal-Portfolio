import React from 'react';
import './EducationSection.scss';
import ptu from '../../assets/PTU.png'
import microsoft from '../../assets/microsoft.png'
import drda from '../../assets/DRDA.png'

const EducationSection = () => {
  const educationData = [
    {
      id: 1,
      logo: ptu,
      logoClass: "edu-logo",
      title: "Bachelor in Business Administration",
      institution: "Punjab Technical University",
      date: "Sep 2021 - Jun 2024",
      description: "Human Resources Management | Grade: 78%",
      skills: ["Operational Management", "Leadership", "Work Handling", "Relationship Management"]
    },
    {
      id: 2,
      logo: microsoft,
      logoClass: "edu-logo",
      title: "Career Essentials in Business Analysis",
      institution: "Microsoft and LinkedIn",
      date: "Issued Jan 2025",
      description: "",
      skills: ["Project Management", "Requirements Gathering", "Business Analysis", "Agile Requirements"]
    },
    {
      id: 3,
      logo: drda,
      logoClass: "edu-logo-extra",
      title: "Diploma in Computer Application",
      institution: "DRDA - Ludhiana Computer Education",
      date: "Issued Jul 2023",
      description: "",
      skills: ["HTML5", "CSS", "JavaScript", "MS Office"]
    }
  ];

  return (
    <section className="education-section">
      <h2 className="section-title">Education & <span className="gradient-text">Certifications</span></h2>
      <div className="education-grid">
        {educationData.map((item) => (
          <div className="education-card" key={item.id}>
            <div className={item.logoClass}>
              <img src={item.logo} alt={item.institution} />
            </div>
            <h3>{item.title}</h3>
            <h4>{item.institution}</h4>
            <p>{item.date}</p>
            {item.description && <p>{item.description}</p>}
            <div className="skills">
              {item.skills.map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
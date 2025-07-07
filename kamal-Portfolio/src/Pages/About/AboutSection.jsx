import React from 'react';
import './AboutSection.scss'; // We'll create this SCSS file next

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2 className="section-title">My <span className="gradient-text">Journey</span></h2>
          <p>
            As a passionate and results-driven professional, I have built a strong foundation in business analysis, web development, and technology. 
            I hold a BBA in HR, a +2 in commerce, and a Business Analyst certification from Microsoft. 
            Additionally, I have completed a computer diploma course, where I honed my skills in HTML5, CSS, and JavaScript.
          </p>
          <p>
            My deep interest in data analytics, software development, and business strategy has motivated me to explore both the business and technical aspects of the industry.
          </p>
        </div>
        <div className="skills-cloud">
          {[
            'Business Intelligence', 'MERN Stack', 'React.js', 'Redux', 'Node.js', 'AWS', 
            'Docker', 'CI/CD', 'HTML5', 'CSS', 'JavaScript', 'MongoDB', 'Agile', 
            'Cloudflare', 'BOOSTRAP', 'TypeScript', 'Terraform', 'next.js', 
            'Kubernetes', 'GitHub', 'Git', 'linux', 'API-Design', 'MySQL', 'AI', 'postman', 'Swagger', 'Bitbucket', 'Deepseek', 'Sass', 'tailwind', ''
          ].map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
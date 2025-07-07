import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';  // <-- Add this import
import './SkillsSection.css';

const SkillsSection = () => {
  const progressBarsRef = useRef([]);
  const navigate = useNavigate();  // <-- Now this will work

  useEffect(() => {
    const animateOnScroll = () => {
      progressBarsRef.current.forEach(bar => {
        if (!bar) return;
        
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight * 0.8;
        
        if (barPosition < screenPosition) {
          const width = bar.dataset.width;
          bar.style.width = width + '%';
        }
      });
    };

    // Initial check
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <section className="container3">
      {/* Left Section */}
      <div className="inner-container3">
        <h2 className="section-title-skills">My Special Skill Field Here.</h2>

        <div className="skills-intro">
          <p className="skills-description">
            With expertise in both frontend and backend technologies, I deliver comprehensive web solutions
            that are performant, scalable, and user-friendly. Here's a quick overview of my core competencies:
          </p>

          <div className="cta-box">
            <p>Ready to bring your project to life? Let's discuss how I can help!</p>
          </div>
        </div>
        <div className="buttons1">
          <button className="btn-skill" onClick={() => navigate('/hire')}>
            <span className="btn-text">Available for Work</span>
            <span className="hover-text">Available for Work</span>
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="inner-container3">
        <div className="container3-right">
          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-name">React Development</span>
              <span className="skill-percent">90%</span>
            </div>
            <div className="progress-container">
              <div 
                className="progress-bar" 
                data-width="90"
                ref={el => progressBarsRef.current[0] = el}
              ></div>
            </div>
          </div>
        </div>

        <div className="container3-right">
          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-name">Node.js & API Design</span>
              <span className="skill-percent">85%</span>
            </div>
            <div className="progress-container">
              <div 
                className="progress-bar" 
                data-width="85"
                ref={el => progressBarsRef.current[1] = el}
              ></div>
            </div>
          </div>
        </div>

        <div className="container3-right">
          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-name">UI/UX Design</span>
              <span className="skill-percent">90%</span>
            </div>
            <div className="progress-container">
              <div 
                className="progress-bar" 
                data-width="90"
                ref={el => progressBarsRef.current[2] = el}
              ></div>
            </div>
          </div>
        </div>

        <div className="container3-right">
          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-name">DevOps & Cloud</span>
              <span className="skill-percent">75%</span>
            </div>
            <div className="progress-container">
              <div 
                className="progress-bar" 
                data-width="75"
                ref={el => progressBarsRef.current[3] = el}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
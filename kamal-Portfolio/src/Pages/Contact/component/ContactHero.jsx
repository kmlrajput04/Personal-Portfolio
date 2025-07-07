import { useEffect, useRef } from 'react';
import './ContactHero.scss';

const ContactHero = () => {
  const heroRef = useRef(null);
  const shapesRef = useRef(null);
  const techStackRef = useRef(null);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact-methods');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+919872090704';
  };

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    // Floating shapes animation
    const shapes = shapesRef.current?.children;
    if (shapes) {
      Array.from(shapes).forEach((shape, index) => {
        shape.style.setProperty('--delay', `${index * 0.5}s`);
        shape.style.setProperty('--duration', `${6 + index * 2}s`);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="contact-hero" ref={heroRef}>
      <div className="hero-background"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="gradient-text">
            <span className="title-line">Let's Build</span>
            <span className="title-line highlight">Something Amazing</span>
          </h1>
          <p className="hero-subtitle">
            I'm excited to collaborate on your next project. Whether you need a stunning website, 
            powerful web application, or just want to discuss tech possibilities, let's connect!
          </p>
          <div className="hero-buttons">
            <button 
              onClick={handleContactClick} 
              className="hire-btn pulse-animate"
              aria-label="Contact me"
            >
              <span className="btn-icon">
                <i className="fas fa-envelope"></i>
              </span>
              <span>Contact Me</span>
            </button>
            <button 
              onClick={handleCallClick} 
              className="btn-secondary"
              aria-label="Call now"
            >
              <span className="btn-icon">
                <i className="fas fa-phone-alt"></i>
              </span>
              <span>Call Now</span>
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="tech-stack" ref={techStackRef}>
            {['html5', 'css3-alt', 'js', 'react','node-js', "database", "bootstrap", "git", "github","figma", "sass"].map((tech, index) => (
              <div 
                key={tech}
                className="tech-item"
                data-tooltip={tech.replace('-', ' ').toUpperCase()}
                style={{ '--i': index }}
              >
                <i className={`fab fa-${tech}`}></i>
              </div>
            ))}
          </div>
          <div className="floating-shapes" ref={shapesRef}>
            <div className="shape circle"></div>
            <div className="shape triangle"></div>
            <div className="shape square"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
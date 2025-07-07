import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faGlobe, faShieldAlt, faChartLine } from '@fortawesome/free-solid-svg-icons';
import './ServiceHero.scss';

const ServiceHero = () => {
  return (
    <section className="service-hero">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-subtitle">Premium Development Services</span>
          <h1 className="hero-title">Transform Your Digital Presence</h1>
          <p className="hero-description">
            We deliver cutting-edge web solutions tailored to your business needs, 
            combining innovative technology with proven methodologies to drive growth 
            and maximize your online potential.
          </p>
          <div className="hero-cta">
            {/* <button className="primary-btn">Get Started</button> */}
            {/* <button className="secondary-btn">Learn More</button> */}
          </div>
        </div>

        <div className="hero-features">
          <div className="feature-card">
            <div className="feature-icon">
              <FontAwesomeIcon icon={faRocket} />
            </div>
            <h3>Rapid Deployment</h3>
            <p>Get your project live in record time without compromising quality</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FontAwesomeIcon icon={faGlobe} />
            </div>
            <h3>Global Reach</h3>
            <p>Solutions optimized for international markets and audiences</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FontAwesomeIcon icon={faShieldAlt} />
            </div>
            <h3>Enterprise Security</h3>
            <p>Built with the highest security standards from day one</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FontAwesomeIcon icon={faChartLine} />
            </div>
            <h3>Performance Focused</h3>
            <p>Optimized for speed and conversion rate optimization</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLaptopCode, 
  faServer, 
  faCode, 
  faCloudUploadAlt, 
  faChartLine, 
  faShieldAlt, 
  faArrowRight 
} from '@fortawesome/free-solid-svg-icons';
import './ServicesShowcase.scss';

const ServicesShowcase = () => {
  const services = [
    {
      id: 'frontend',
      icon: faLaptopCode,
      title: 'Frontend Development',
      description: 'Pixel-perfect, responsive interfaces that work across all devices and regions',
      features: [
        'Internationalization (i18n) ready',
        'Accessibility compliant (WCAG)',
        '90+ PageSpeed score',
        'Progressive Web Apps'
      ],
      price: '$1,500 - $15,000+'
    },
    {
      id: 'backend',
      icon: faServer,
      title: 'Backend Development',
      description: 'Scalable, secure backend systems with global infrastructure',
      features: [
        'Multi-region deployment',
        'GDPR/CCPA compliance',
        'Real-time capabilities',
        'Microservices architecture'
      ],
      price: '$3,000 - $25,000+'
    },
    {
      id: 'fullstack',
      icon: faCode,
      title: 'Full Stack Solutions',
      description: 'Complete web applications from concept to deployment',
      features: [
        'MERN stack specialization',
        'CI/CD pipeline setup',
        'Automated testing',
        'Documentation included'
      ],
      price: '$5,000 - $50,000+'
    },
    {
      id: 'devops',
      icon: faCloudUploadAlt,
      title: 'DevOps & Cloud',
      description: 'Enterprise-grade deployment and infrastructure',
      features: [
        'AWS/Azure/GCP setup',
        'Docker & Kubernetes',
        'Auto-scaling solutions',
        '24/7 monitoring'
      ],
      price: '$2,000 - $20,000+'
    },
    {
      id: 'consulting',
      icon: faChartLine,
      title: 'Tech Consulting',
      description: 'Strategic guidance for digital transformation',
      features: [
        'Architecture reviews',
        'Performance audits',
        'Team training',
        'Roadmap planning'
      ],
      price: '$100/hr - Enterprise'
    },
    {
      id: 'maintenance',
      icon: faShieldAlt,
      title: 'Ongoing Maintenance',
      description: 'Reliable support for your digital products',
      features: [
        'Security updates',
        'Feature enhancements',
        'Bug fixes',
        'Priority support'
      ],
      price: 'Monthly retainer'
    }
  ];

  return (
    <section className="services-showcase">
      <div className="section-header">
        <h2 className="section-title">Comprehensive Web Solutions</h2>
        <p className="section-subtitle">End-to-end development services for global markets</p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article key={service.id} className="service-card" data-service={service.id}>
            <div className="service-header">
              <div className="service-icon">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h3>{service.title}</h3>
            </div>
            <div className="service-body">
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="service-footer">
              <span className="price-range">{service.price}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ServicesShowcase;
import React from 'react';
import './GoalsSection.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faAws, 
  faDocker, 
//   faKubernetes, 
  faReact, 
  faNodeJs 
} from '@fortawesome/free-brands-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import goalImg from '../../assets/Aspirations.png';

const GoalsSection = () => {
  const techIcons = [
    { icon: faAws, title: "AWS" },
    { icon: faDocker, title: "Docker" },
    // { icon: faKubernetes, title: "Kubernetes" },
    { icon: faReact, title: "React" },
    { icon: faNodeJs, title: "Node.js" },
    { icon: faServer, title: "DevOps" }
  ];

  return (
    <section className="goals-section">
      <div className="goals-container">
        <div className="goals-image">
          <img 
            src={goalImg} 
            alt="Future Goals" 
          />
        </div>
        <div className="goals-text">
          <h2 className="section-title">My <span className="gradient-text">Aspirations</span></h2>
          <p>
            Looking ahead, my goal is to become a Full Stack Developer and DevOps Engineer, specializing in cloud computing, 
            CI/CD pipelines, containerization (Docker, Kubernetes), and microservices architecture.
          </p>
          <p>
            I am committed to continuous learning and innovation, focusing on scalable web applications, automation, 
            and cloud infrastructure. With my background in business intelligence and software development, 
            I aim to create efficient, high-performance digital solutions that drive business success.
          </p>
          <div className="tech-stack">
            <h3>Technologies I'm Exploring:</h3>
            <div className="tech-icons">
              {techIcons.map((tech, index) => (
                <FontAwesomeIcon 
                  key={index}
                  icon={tech.icon} 
                  title={tech.title}
                  className="tech-icon"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
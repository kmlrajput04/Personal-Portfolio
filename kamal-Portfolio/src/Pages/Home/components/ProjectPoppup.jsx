//ProjectPoppup.jsx

import React from 'react'
import {
  FaTimes,
  FaGithub,
} from "react-icons/fa";
import "./ProjectsSection.css";

const ProjectPoppup = ({onClose, selectedProject}) => {
  return (
    <>
         {selectedProject && (
        <div className="project-detail-overlay active">
          <div className="project-detail-container">
            <button className="close-detail" onClick={onClose}>
              <FaTimes />
            </button>
            <div className="detail-grid">
              <div className="detail-header">
                <h2 className="detail-title">{selectedProject.title}</h2>
                <div className="tech-stack">
                  {selectedProject.techStack.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
              </div>
              <div className="detail-description">
                <h3>Project Overview</h3>
                <div className="description-content">
                  {selectedProject.detailedDescription}
                </div>
                <h3>Key Features</h3>
                <ul className="features-list">
                  {selectedProject.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <h3>Technical Details</h3>
                <div className="technical-details">
                  {selectedProject.technical}
                </div>
                <button
                  className="github-btn"
                  onClick={() =>
                    window.open(selectedProject.githubUrl, "_blank")
                  }
                >
                  <FaGithub /> View on GitHub
                </button>
              </div>
              <div className="detail-media">
                {selectedProject.images?.length > 0 ? (
                  <>
                    <div className="detail-main-image">
                      <img
                        // src={VITE_PROJECT_IMG`${selectedProject.images[0]}`}
                        src={`${import.meta.env.VITE_PROJECT_IMG}${
                          selectedProject.images[0]
                        }`}
                        alt={selectedProject.title}
                      />
                    </div>
                    <div className="detail-gallery">
                      {selectedProject.images.map((img, i) => (
                        <img
                          key={i}
                          src={`${import.meta.env.VITE_PROJECT_IMG}${img}`}
                          alt={`${selectedProject.title} screenshot ${i + 1}`}
                          onClick={() => {
                            const mainImg = document.querySelector(
                              ".detail-main-image img"
                            );
                            if (mainImg) {
                              mainImg.src = `${
                                import.meta.env.VITE_PROJECT_IMG
                              }${img}`;
                            }
                          }}
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="no-images-message">No images available</div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>

  )  
}

export default ProjectPoppup
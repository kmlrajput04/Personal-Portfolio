//ProjectsSection.jsx

import React, { useState, useEffect, useRef } from "react";
import {
  FaTimes,
  FaGithub,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import "./ProjectsSection.css";
import getProjectsData from "../../../assets/database/projectsData";
import ProjectPoppup from "./ProjectPoppup";
// const VITE_PROJECT_IMG = import.meta.env.VITE_PROJECT_IMG;

const ProjectsSection = ({ isStandalonePage = false }) => {
  const [projectsData, setProjectsData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  const projects = Object.entries(projectsData).map(([id, data]) => ({
    id,
    ...data,
  }));

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProjectsData();
      setProjectsData(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (isStandalonePage || projects.length === 0) return;
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, [projects.length, isStandalonePage]);

  useEffect(() => {
    if (carouselRef.current && projects.length) {
      const cardWidth = carouselRef.current.children[0]?.offsetWidth + 30;
      carouselRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex, projects]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    clearInterval(intervalRef.current);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    clearInterval(intervalRef.current);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    clearInterval(intervalRef.current);
  };

  const openProjectDetail = (projectId) => {
    setSelectedProject(projectsData[projectId]);
    document.body.style.overflow = "hidden";
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && selectedProject) closeProjectDetail();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  return (
    <section
      className={`projects-section ${isStandalonePage ? "standalone" : ""}`}
    >
      <h2 className="section-title">My Complete Projects</h2>

      <div className="projects-carousel">
        <div className="carousel-container" ref={carouselRef}>
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => openProjectDetail(project.id)}
            >
              <div className="project-media">
                {project.images && project.images.length > 0 && (
                  <img
                    src={`${import.meta.env.VITE_PROJECT_IMG}${
                      project.images[0]
                    }`}
                    alt={project.title}
                  />
                )}
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <button
                  className="explore-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    openProjectDetail(project.id);
                  }}
                >
                  Explore More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {!isStandalonePage && (
          <>
            <button className="carousel-btn prev-btn" onClick={handlePrev}>
              <FaChevronLeft />
            </button>
            <button className="carousel-btn next-btn" onClick={handleNext}>
              <FaChevronRight />
            </button>
          </>
        )}
      </div>

      {!isStandalonePage && (
        <div className="carousel-nav">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`nav-dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      )}
      {selectedProject && (
<ProjectPoppup onClose={closeProjectDetail} selectedProject={selectedProject}/>

   )} 
    </section>
  );
};

export default ProjectsSection;

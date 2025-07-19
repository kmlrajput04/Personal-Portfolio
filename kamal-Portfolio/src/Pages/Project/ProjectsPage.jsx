import React, { useState, useEffect } from 'react';
import { FaTimes, FaGithub } from 'react-icons/fa';
import getProjectsData from '../../assets/database/projectsData';
import ProjectPoppup from '../Home/components/ProjectPoppup';
import './ProjectsPage.css';

const ProjectsPage = () => {
  const [projectsData, setProjectsData] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProjectsData();
      setProjectsData(data);
    };
    fetchData();
  }, []);

  const openProjectDetail = (projectId) => {
    setSelectedProject(projectsData[projectId]);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedProject) closeProjectDetail();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <main>
      <section className="projects-page">
        <div className="container">
          <h1 className="section-title">My Projects</h1>
          <div className="projects-grid">
            {Object.entries(projectsData).map(([id, project]) => (
              <div key={id} className="project-card" onClick={() => openProjectDetail(id)}>
                
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
                  <button className="explore-btn" onClick={(e) => { e.stopPropagation(); openProjectDetail(id); }}>
                    Explore More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

          {selectedProject && (
<ProjectPoppup onClose={closeProjectDetail} selectedProject={selectedProject}/>

   )} 
      </section>
    </main>
  );
};

export default ProjectsPage;

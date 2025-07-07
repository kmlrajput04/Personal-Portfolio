import React, { useEffect, useRef, useState } from "react";
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaCloud,
  FaRobot,
  FaMagic,
  FaVial,
  FaChartLine,
} from "react-icons/fa";
import "./TechnicalSkillsSection.css";
import {
  getTechnicalSkills,
  getAISkills,
} from "../../../assets/database/technicalSkillData";

const iconMap = {
  FaCode: <FaCode />,
  FaLaptopCode: <FaLaptopCode />,
  FaServer: <FaServer />,
  FaCloud: <FaCloud />,
  FaMagic: <FaMagic />,
  FaVial: <FaVial />,
  FaChartLine: <FaChartLine />,
};

const TechnicalSkillsSection = () => {
  const skillsRef = useRef(null);
  const [skillsData, setSkillsData] = useState([]);
  const [aiData, setAiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const techSkills = await getTechnicalSkills();
        const aiSkills = await getAISkills();
        
        // Ensure all skills have a valid level (default to 0 if missing)
        const processedSkills = techSkills.map(category => ({
          ...category,
          skills: category.skills.map(skill => ({
            ...skill,
            level: skill.level || 0
          }))
        }));
        
        setSkillsData(processedSkills);
        setAiData(aiSkills);
      } catch (error) {
        console.error("Error fetching skills data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (isLoading || !skillsRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll(".progress-bar");
            progressBars.forEach((bar) => {
              const width = bar.getAttribute("data-width");
              // Ensure width is a valid number between 0 and 100
              const validWidth = Math.min(100, Math.max(0, Number(width) || 0));
              bar.style.width = `${validWidth}%`;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(skillsRef.current);

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, [isLoading]); // Re-run when loading state changes

  if (isLoading) {
    return <div className="loading-spinner">Loading skills...</div>;
  }

  return (
    <section className="TechnicalSkillsSection" ref={skillsRef}>
      <div className="section-header">
        <h2 className="section-title">My Technical Arsenal</h2>
        <p className="section-subtitle">
          Tools and technologies I use to build powerful, efficient web
          applications
        </p>
      </div>
      <div className="skills-container">
        {skillsData.map((category, index) => (
          <div className="skill-category" key={index}>
          <div className="category-header">
              <div className="category-icon">
                {iconMap[category.icon] || <FaCode />}
              </div>
              <h3 className="category-title">{category.title}</h3>
            </div>
            <ul className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <li className="skill-item" key={skillIndex}>
                  <span className="skill-name">{skill.name}</span>
                  <div className="progress-container">
                    <div
                      className="progress-bar"
                      data-width={skill.level}
                      style={{ width: '0%' }} // Initialize at 0%
                    ></div>
                  </div>
                 <div className="skill-tools">
                    {skill.tools.map((tool, toolIndex) => (
                      <span className="tool-tag" key={toolIndex}>
                        {typeof tool === "object"
                          ? Object.values(tool).join("")
                          : Object.values(tool).join("")}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
  
      <div className="ai-section">
        <div className="ai-header">
          <h2>
            <FaRobot /> AI-Powered Workflow
          </h2>
          <p>Tools that supercharge my development process</p>
        </div>

        {aiData.map((aiCategory, index) => (
          <div className="ai-card" key={index}>
            <h3>
              {iconMap[aiCategory.icon] || <FaMagic />} {aiCategory.title}
            </h3>
            <ul className="skills-list">
              {aiCategory.items.map((item, itemIndex) => (
                <li className="skill-item" key={itemIndex}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkillsSection;
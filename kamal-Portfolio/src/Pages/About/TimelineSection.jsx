import React from 'react';
import './TimelineSection.scss';
import mender_software from '../../assets/mender software.png';
import jio from '../../assets/jio.png'

const TimelineSection = () => {
  const experiences = [
    {
      date: "Mar 2025 - Present",
      logo: mender_software,
      company: "Meander Software",
      title: "MERN Stack Developer",
      type: "Internship",
      location: "Sector 118, Sahibzada Ajit Singh Nagar, Punjab, India · On-site",
      responsibilities: [
        "Developing full-stack applications using MongoDB, Express.js, React.js, and Node.js",
        "Implementing RESTful APIs and database design",
        "Collaborating with cross-functional teams in agile environment"
      ]
    },
    {
      date: "Jan 2022 - Nov 2022",
      logo: jio,
      company: "Reliance Jio Infocomm Limited",
      title: "Business Intelligence Analyst",
      type: "Internship",
      location: "Jagraon, Punjab, India · On-site",
      responsibilities: [
        "Cultivated and maintained strong relationships with key clients",
        "Conducted market research to identify new business opportunities",
        "Prepared detailed sales reports and presentations for management",
        "Analyzed customer feedback for product improvement"
      ]
    }
  ];

  return (
    <section className="timeline-section">
      <h2 className="section-title">Professional <span className="gradient-text">Experience</span></h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-date">{exp.date}</div>
            <div className="timeline-content">
              <div className="company-logo">
                <img src={exp.logo} alt={exp.company} />
              </div>
              <h3>{exp.title}</h3>
              <h4>{exp.company} · {exp.type}</h4>
              <p>{exp.location}</p>
              <ul>
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
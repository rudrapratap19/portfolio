import React from 'react'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaLightbulb, FaCogs } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Academic Secretary",
      organization: "Council of Student Affairs, IIIT Raichur",
      duration: "2024 – Present",
      type: "Leadership Role",
      location: "IIIT Raichur",
      icon: <FaUsers />,
      responsibilities: [
        "Advocated for a structured exam pattern to ensure fairness and consistency across courses",
        "Led revival of Aurora Club (Mental Wellbeing) and initiated monthly student feedback system",
        "Collaborated with faculty and administration to improve academic policies and student experience"
      ],
      skills: ["Leadership", "Policy Advocacy", "Student Welfare", "Communication"]
    },
    {
      id: 2,
      title: "Member, Placement Cell",
      organization: "IIIT Raichur",
      duration: "Jan 2025 – Present",
      type: "Administrative Role",
      location: "IIIT Raichur",
      icon: <FaBriefcase />,
      responsibilities: [
        "Restructured Placement Cell processes to improve efficiency and student outcomes",
        "Coordinated with recruiters and organized placement drives for various companies",
        "Facilitated communication between students and potential employers"
      ],
      skills: ["Recruitment", "Process Optimization", "Corporate Relations", "Event Management"]
    },
    {
      id: 3,
      title: "Project Lead",
      organization: "Dev Club, IIIT Raichur",
      duration: "Oct 2023 – Present",
      type: "Technical Leadership",
      location: "IIIT Raichur",
      icon: <FaCogs />,
      responsibilities: [
        "Mentored teams in full-stack development and guided project implementations",
        "Organized tech workshops and coding sessions for students",
        "Led development of multiple student-focused applications and platforms"
      ],
      skills: ["Full-Stack Development", "Mentoring", "Technical Leadership", "Workshop Organization"]
    }
  ]

  return (
    <section id="experience" className="section experience">
      <h2 className="section-title">Experience</h2>
      
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content card">
              <div className="experience-header">
                <div className="experience-icon">
                  {exp.icon}
                </div>
                <div className="experience-meta">
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-org">{exp.organization}</p>
                  <div className="experience-details">
                    <div className="detail-item">
                      <FaCalendarAlt />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="detail-item">
                      <FaMapMarkerAlt />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <span className="experience-type">{exp.type}</span>
                </div>
              </div>
              
              <div className="experience-content">
                <h4>Key Responsibilities</h4>
                <ul className="responsibilities-list">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
                
                <div className="experience-skills">
                  <h4>Skills Applied</h4>
                  <div className="skill-tags">
                    {exp.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline-dot"></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience

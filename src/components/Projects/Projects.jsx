import React from 'react'
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaUsers, FaClock } from 'react-icons/fa'
import { SiFlutter, SiFirebase, SiSupabase } from 'react-icons/si'
import './Projects.css'

const Projects = () => {
  const projects = [
    
    {
      id: 1,
      title: "Virtual Study Environment (VSE)",
      description: "A comprehensive Flutter application designed to enhance student productivity through personalized study tracking, group collaboration, and performance analytics.",
      longDescription: "Led the development of VSE, a student productivity platform that combines individual study tracking with collaborative group features. The app provides personalized login systems, supports both solo and group study sessions, and includes comprehensive productivity tracking with detailed analytics.",
      technologies: ["Flutter", "Supabase", "Firebase"],
      duration: "Dec 2024 – Present",
      status: "In Development",
      features: [
        "Personalized user authentication and profiles",
        "Group and solo study session management",
        "Real-time productivity tracking and analytics",
        "Cross-platform compatibility (iOS/Android)",
        "Cloud-based data synchronization"
      ],
      achievements: [
        "Successfully integrated multiple backend services",
        "Implemented real-time collaboration features",
        "Designed intuitive UI/UX for enhanced user experience"
      ],
      role: "Project Lead & Full-Stack Developer",
      teamSize: "3 members",
      github: "https://github.com/priyanshiiitr/Virtual-Study-Environment-",
      
    },
    {
      id: 2,
      title: "ArenaFlow - Tournament Management App",
      description: "A sophisticated mobile application for managing multi-game tournaments with automated matchmaking algorithms and real-time updates.",
      longDescription: "Developed ArenaFlow to streamline tournament organization and management. The app features automated bracket generation, real-time match tracking, and comprehensive admin dashboard for managing participants and schedules.",
      technologies: ["Flutter", "Firebase"],
      duration: "Jan 2024 – May 2024",
      status: "Completed",
      features: [
        "Automated matchmaking algorithms",
        "Real-time match updates and standings",
        "Admin dashboard for tournament management",
        "Participant registration and bracket generation",
        "Push notifications for match schedules"
      ],
      achievements: [
        "Reduced manual scheduling time by 80%",
        "Successfully tested with 3 college tournaments",
        "Managed 100+ players seamlessly",
        "Implemented efficient bracket generation algorithms"
      ],
      role: "Lead Developer",
      teamSize: "Solo Project",
      github: "https://github.com/rudrapratap19/ArenaFlow-main",
      
    },
    {
      id: 3,
      title: "CampusCare - College Complaint App",
      description: "A role-based complaint management system designed to streamline issue reporting and resolution within college campuses.",
      longDescription: "Created CampusCare to address the need for efficient complaint handling in educational institutions. The app features role-based access control, real-time status tracking, and push notifications to ensure transparency and accountability.",
      technologies: ["Flutter", "Firebase"],
      duration: "Aug 2024 – Nov 2024",
      status: "Completed",
      features: [
        "Role-based access control system",
        "Real-time complaint status tracking",
        "Push notifications via Firebase Cloud Messaging",
        "Intuitive Material Design UI",
        "Admin dashboard for complaint management"
      ],
      achievements: [
        "Reduced complaint resolution delays by 40%",
        "Achieved 70% adoption rate within the institute",
        "Handled 80+ complaints in the first month",
        "Implemented transparent tracking system"
      ],
      role: "Full-Stack Developer",
      teamSize: "Solo Project",
      github: "https://github.com/rudrapratap19/Campus-care",
      
    },
    {
  id: 4,
  title: "🎬 Movie Recommender System",
  description: "A Content-Based Movie Recommender System built using Natural Language Processing (NLP) and Machine Learning that suggests similar movies based on content features.",
  longDescription: "Developed an intelligent movie recommendation system that analyzes movie content including genres, keywords, cast, and crew to suggest 5 similar movies. The system uses advanced NLP techniques and cosine similarity for accurate recommendations with TMDB 5000 Movie Dataset.",
  technologies: ["Python", "Pandas", "Scikit-learn", "Streamlit", "NumPy"],
  duration: "2024",
  status: "Completed",
  features: [
    "Content-based filtering using movie metadata",
    "NLP processing of genres, keywords, cast, and crew",
    "Cosine similarity for movie matching",
    "Interactive Streamlit web application",
    "Dropdown selection with instant recommendations"
  ],
  achievements: [
    "Successfully processed TMDB 5000 Movie Dataset",
    "Implemented efficient vectorization using CountVectorizer",
    "Built user-friendly web interface with Streamlit",
    "Achieved accurate content-based recommendations"
  ],
  role: "ML Engineer & Developer",
  teamSize: "Solo Project",
  github: "https://github.com/rudrapratap19/content-based-movie-recommender",
  
},

  ]

  const getTechnologyIcon = (tech) => {
    switch (tech) {
      case 'Flutter':
        return <SiFlutter />
      case 'Firebase':
        return <SiFirebase />
      case 'Supabase':
        return <SiSupabase />
      default:
        return null
    }
  }

  return (
    <section id="projects" className="section projects">
      <h2 className="section-title">Featured Projects</h2>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card card">
            <div className="project-header">
              <div className="project-title-section">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
              
              <div className="project-status">
                <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
              </div>
            </div>

            <div className="project-meta">
              <div className="meta-item">
                <FaCalendarAlt />
                <span>{project.duration}</span>
              </div>
              <div className="meta-item">
                <FaUsers />
                <span>{project.teamSize}</span>
              </div>
              <div className="meta-item">
                <FaClock />
                <span>{project.role}</span>
              </div>
            </div>

            <div className="project-technologies">
              <h4>Technologies Used</h4>
              <div className="tech-stack">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="tech-item">
                    {getTechnologyIcon(tech)}
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="project-details">
              <div className="project-section">
                <h4>Key Features</h4>
                <ul className="features-list">
                  {project.features.slice(0, 3).map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-section">
                <h4>Key Achievements</h4>
                <ul className="achievements-list">
                  {project.achievements.slice(0, 2).map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="project-actions">
              <a href={project.github} className="btn-project github" target="_blank" rel="noopener noreferrer">
                <FaGithub />
                <span>GitHub</span>
              </a>
              
            </div>
          </div>
        ))}
      </div>

      <div className="projects-summary">
        <div className="summary-stats">
          <div className="stat-item">
            <div className="stat-number">3</div>
            <div className="stat-label">Major Projects</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100+</div>
            <div className="stat-label">Users Impacted</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">80%</div>
            <div className="stat-label">Efficiency Improvement</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects

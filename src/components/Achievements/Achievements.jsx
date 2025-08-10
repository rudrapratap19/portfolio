import React from 'react'
import { FaTrophy, FaMedal, FaCode, FaStar, FaUsers, FaGraduationCap } from 'react-icons/fa'
import './Achievements.css'

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "District Topper in 10th Standard",
      description: "Achieved the highest score in the district during 10th standard examinations, demonstrating academic excellence from an early age.",
      category: "Academic",
      icon: <FaGraduationCap />,
      year: "2020",
      highlight: "1st Position"
    },
    {
      id: 2,
      title: "Smart India Hackathon (SIH) 2024",
      description: "Team selected at college level for Smart India Hackathon 2024, showcasing innovative problem-solving skills and technical expertise.",
      category: "Competition",
      icon: <FaCode />,
      year: "2024",
      highlight: "Team Selected"
    },
    {
      id: 3,
      title: "Academic Secretary Election",
      description: "Elected as Academic Secretary of IIIT Raichur for 2024-25, representing student interests and leading academic initiatives.",
      category: "Leadership",
      icon: <FaUsers />,
      year: "2024",
      highlight: "Elected Position"
    },
    {
      id: 4,
      title: "200+ DSA Problems Solved",
      description: "Successfully solved over 200 Data Structures and Algorithms problems across various coding platforms, demonstrating strong problem-solving skills.",
      category: "Programming",
      icon: <FaCode />,
      year: "2023-2024",
      highlight: "200+ Problems"
    }
  ]

  const stats = [
    {
      number: "1st",
      label: "District Position",
      description: "10th Standard"
    },
    {
      number: "200+",
      label: "DSA Problems",
      description: "Solved Successfully"
    },
    {
      number: "7.3",
      label: "Current CGPA",
      description: "B.Tech Program"
    },
    {
      number: "3",
      label: "Leadership Roles",
      description: "Currently Active"
    }
  ]

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Academic':
        return <FaGraduationCap />
      case 'Competition':
        return <FaTrophy />
      case 'Leadership':
        return <FaUsers />
      case 'Programming':
        return <FaCode />
      default:
        return <FaStar />
    }
  }

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Academic':
        return '#4CAF50'
      case 'Competition':
        return '#FF9800'
      case 'Leadership':
        return '#2196F3'
      case 'Programming':
        return '#9C27B0'
      default:
        return '#667eea'
    }
  }

  return (
    <section id="achievements" className="section achievements">
      <h2 className="section-title">Achievements & Recognition</h2>
      
      <div className="achievements-container">
        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="achievement-card card">
              <div className="achievement-header">
                <div 
                  className="achievement-icon"
                  style={{ background: `linear-gradient(135deg, ${getCategoryColor(achievement.category)} 0%, ${getCategoryColor(achievement.category)}CC 100%)` }}
                >
                  {achievement.icon}
                </div>
                <div className="achievement-meta">
                  <div className="achievement-category">
                    {getCategoryIcon(achievement.category)}
                    <span>{achievement.category}</span>
                  </div>
                  <div className="achievement-year">{achievement.year}</div>
                </div>
              </div>
              
              <div className="achievement-content">
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
                
                <div className="achievement-highlight">
                  <FaStar />
                  <span>{achievement.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="achievements-stats">
          <h3>Key Statistics</h3>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-description">{stat.description}</div>
              </div>
            ))}
          </div>
        </div> */}
      </div>

      {/* <div className="achievements-timeline">
        <h3>Achievement Timeline</h3>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-year">2020</div>
            <div className="timeline-content">
              <FaGraduationCap />
              <span>District Topper - 10th Standard</span>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2023</div>
            <div className="timeline-content">
              <FaCode />
              <span>Started DSA Journey - 200+ Problems</span>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2024</div>
            <div className="timeline-content">
              <FaTrophy />
              <span>SIH Selection & Academic Secretary</span>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  )
}

export default Achievements

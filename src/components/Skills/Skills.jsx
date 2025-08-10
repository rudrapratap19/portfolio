import React from 'react'
import { 
  FaCode, 
  FaMobile, 
  FaDatabase, 
  FaBrain, 
  FaTools, 
  FaGitAlt,
  FaPython,
  FaJs,
  FaReact,
  FaNodeJs,
  FaChartLine,
  FaFlask,
  FaRobot,
  FaEye,
  FaSitemap,
  FaCogs,
  FaCubes,
  FaDesktop

} from 'react-icons/fa'
import { 
  SiFlutter, 
  SiFirebase, 
  SiCplusplus, 
  SiC, 
  SiNumpy, 
  SiPandas,
  SiDart,
  SiOpencv,
  SiScikitlearn
} from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: "Programming Languages",
      icon: <FaCode />,
      skills: [
        { name: "C", icon: <SiC />, level: 85 },
        { name: "C++", icon: <SiCplusplus />, level: 90 },
        { name: "Python", icon: <FaPython />, level: 88 },
        { name: "Dart", icon: <SiDart />, level: 85 },
        { name: "JavaScript", icon: <FaJs />, level: 82 }
      ]
    },
    {
      id: 2,
      title: "Frameworks & Tools",
      icon: <FaTools />,
      skills: [
        { name: "Flutter", icon: <SiFlutter />, level: 90 },
        { name: "Node.js", icon: <FaNodeJs />, level: 80 },
        
        { name: "Firebase", icon: <SiFirebase />, level: 85 },
        { name: "Git", icon: <FaGitAlt />, level: 82 }
      ]
    },
    {
      id: 3,
      title: "Data Science & ML",
      icon: <FaBrain />,
      skills: [
        { name: "NumPy", icon: <SiNumpy />, level: 85 },
        { name: "Pandas", icon: <SiPandas />, level: 82 },
        { name: "Matplotlib", icon: <FaChartLine />, level: 80 },
        { name: "SciPy", icon: <FaFlask />, level: 75 },
        { name: "Machine Learning", icon: <SiScikitlearn />, level: 78 },
        { name: "OpenCV", icon: <SiOpencv />, level: 30 }

      ]
    },
    {
      id: 4,
      title: "Computer Science Fundamentals",
      icon: <FaDatabase />,
      skills: [
        { name: "Data Structures", icon: <FaSitemap />, level: 90 },
        { name: "Algorithms", icon: <FaCogs />, level: 88 },
        { name: "OOP", icon: <FaCubes />, level: 85 },
        { name: "DBMS", icon: <FaDatabase />, level: 80 },
        { name: "Operating Systems", icon: <FaDesktop />, level: 78 }
      ]
    }
  ]

  const achievements = [
    {
      title: "DSA Problems Solved",
      count: "200+",
      description: "Across various coding platforms"
    },
    {
      title: "Projects Completed",
      count: "3",
      description: "Major full-stack applications"
    },
    {
      title: "Programming Languages",
      count: "5+",
      description: "Proficient in multiple languages"
    }
  ]

  return (
    <section id="skills" className="section skills">
      <h2 className="section-title">Technical Skills</h2>
      
      <div className="skills-container">
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.id} className="skill-category card">
              <div className="category-header">
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info">
                      {skill.icon && <span className="skill-icon">{skill.icon}</span>}
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    {skill.level && (
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* <div className="skills-achievements">
          <h3>Achievements</h3>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-count">{achievement.count}</div>
                <div className="achievement-title">{achievement.title}</div>
                <div className="achievement-desc">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Skills

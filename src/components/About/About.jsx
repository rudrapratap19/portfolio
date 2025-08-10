import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="section about">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-content">
        <div className="about-text">
          <p className="about-intro">
            I'm a passionate B.Tech student specializing in Artificial Intelligence and Data Science 
            at the Indian Institute of Information Technology, Raichur.
          </p>
          
          <p className="about-description">
            Currently serving as the Academic Secretary of the Council of Student Affairs, I'm 
            committed to both academic excellence and student welfare. I have advocated for structured 
            exam patterns and led the revival of the Aurora Club for mental wellbeing initiatives.
          </p>

          <p className="about-description">
            My passion lies in creating innovative solutions through full-stack development, 
            with expertise in Flutter, React, and backend technologies. I enjoy solving complex 
            problems and have solved over 200 DSA questions across various coding platforms.
          </p>

          <p className="about-description">
            As a Project Lead at Dev Club and Member of the Placement Cell, I mentor teams in 
            development while coordinating with recruiters to enhance placement opportunities for students.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat-card">
            <div className="stat-number">7.3</div>
            <div className="stat-label">Current CGPA</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number">3</div>
            <div className="stat-label">Leadership Roles</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number">200+</div>
            <div className="stat-label">DSA Problems Solved</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number">5+</div>
            <div className="stat-label">Programming Languages</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

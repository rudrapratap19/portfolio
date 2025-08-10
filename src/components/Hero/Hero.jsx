import React from 'react'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Rudra Pratap Singh</span>
          </h1>
          <h2 className="hero-subtitle">
            AI & Data Science Student | Full-Stack Developer
          </h2>
          <p className="hero-description">
            B.Tech student at IIIT Raichur passionate about Artificial Intelligence, 
            Data Science, and creating innovative solutions through code. Currently serving 
            as Academic Secretary and leading multiple development projects.
          </p>
          
          <div className="hero-cta">
            <button className="btn primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View My Work
            </button>
            <button className="btn secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get In Touch
            </button>
            <a href="../../public/rudra-resume.pdf" className="btn outline" download="Rudra_Pratap_Singh_Resume.pdf">
              <FaDownload /> Resume
            </a>
          </div>

          <div className="hero-contact">
            <div className="contact-item">
              <FaEnvelope />
              <span>rpsinghiiitr@gmail.com</span>
            </div>
            <div className="contact-item">
              <FaPhone />
              <span>+91 7309719048</span>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="floating-card">
            <h3>Current CGPA</h3>
            <div className="cgpa">7.3</div>
          </div>
          <div className="floating-card">
            <h3>DSA Problems</h3>
            <div className="count">200+</div>
          </div>
          <div className="floating-card">
            <h3>Projects</h3>
            <div className="count">4</div>
          </div>
          <div className="floating-card">
            <h3>Leadership Roles</h3>
            <div className="count">3</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

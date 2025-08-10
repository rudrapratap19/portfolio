import React from 'react'
import { FaHeart, FaCode, FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    { icon: <FaGithub />, href: '#', label: 'GitHub' },
    { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
    { icon: <FaEnvelope />, href: 'mailto:rpsinghiiitr@gmail.com', label: 'Email' }
  ]

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-section">
            <div className="footer-brand">
              <h3>Rudra Pratap Singh</h3>
              <p>AI & Data Science Student | Full-Stack Developer</p>
              <p>Building innovative solutions with code and creativity.</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <div className="footer-links">
              {quickLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  aria-label={social.label}
                  className="social-icon"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="footer-contact">
              <p>rpsinghiiitr@gmail.com</p>
              <p>+91 7309719048</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Current Status</h4>
            <div className="status-info">
              <p><strong>Education:</strong> B.Tech at IIIT Raichur</p>
              <p><strong>Role:</strong> Academic Secretary</p>
              <p><strong>CGPA:</strong> 7.3</p>
              <p><strong>Available for:</strong> Internships & Projects</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>
                © {currentYear} Rudra Pratap Singh. Made with <FaHeart className="heart" /> and <FaCode className="code" />
              </p>
            </div>
            
            <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

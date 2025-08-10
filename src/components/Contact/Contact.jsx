import React, { useState } from 'react'
import { 
  FaEnvelope, 
  FaPhone, 
  FaLinkedin, 
  FaGithub, 
  FaTwitter, 
  FaMapMarkerAlt,
  FaPaperPlane,
  FaUser,
  FaEdit
} from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I will get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "rpsinghiiitr@gmail.com",
      link: "mailto:rpsinghiiitr@gmail.com"
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: "+91 7309719048",
      link: "tel:+917309719048"
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "IIIT Raichur, Karnataka, India",
      link: "#"
    }
  ]

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/rudrapratap2340",
      color: "#0077B5"
    },
    {
      icon: <FaGithub />,
      label: "GitHub", 
      link: "https://github.com/rudrapratap19",
      color: "#333"
    },
    
  ]

  return (
    <section id="contact" className="section contact">
      <h2 className="section-title">Let's Connect</h2>
      
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-intro">
            <h3>Get In Touch</h3>
            <p>
              I'm always interested in discussing new opportunities, innovative projects, 
              or just connecting with fellow developers and students. Feel free to reach out!
            </p>
          </div>

          <div className="contact-details">
            {contactInfo.map((info, index) => (
              <a 
                key={index} 
                href={info.link} 
                className="contact-item"
                target={info.link.startsWith('http') ? '_blank' : '_self'}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
              >
                <div className="contact-icon">
                  {info.icon}
                </div>
                <div className="contact-content">
                  <div className="contact-label">{info.label}</div>
                  <div className="contact-value">{info.value}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="social-links">
            <h4>Follow Me</h4>
            <div className="social-grid">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ '--social-color': social.color }}
                >
                  {social.icon}
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form card" onSubmit={handleSubmit}>
            <h3>Send a Message</h3>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">
                  <FaUser />
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">
                  <FaEnvelope />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">
                <FaEdit />
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                <FaEdit />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell me more about your project or inquiry..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  <FaPaperPlane />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      <div className="contact-footer">
        <div className="availability">
          <h4>Current Availability</h4>
          <p>
            I'm currently open to internship opportunities, collaboration on interesting projects, 
            and networking with professionals in AI/ML and software development.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact

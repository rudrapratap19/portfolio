import React from 'react'
import { FaGraduationCap, FaCalendarAlt, FaTrophy } from 'react-icons/fa'
import './Education.css'

const Education = () => {
  return (
    <section id="education" className="section education">
      <h2 className="section-title">Education</h2>
      
      <div className="education-container">
        <div className="education-card card">
          <div className="education-header">
            <div className="education-icon">
              <FaGraduationCap />
            </div>
            <div className="education-meta">
              <h3>B.Tech - Artificial Intelligence and Data Science</h3>
              <p className="institution">Indian Institute of Information Technology, Raichur</p>
              <div className="education-details">
                <div className="detail-item">
                  <FaCalendarAlt />
                  <span>Aug 2023 – May 2027</span>
                </div>
                <div className="detail-item">
                  <FaTrophy />
                  <span>CGPA: 7.3</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="education-description">
            <p>
              Pursuing a comprehensive program in Artificial Intelligence and Data Science, 
              focusing on machine learning, deep learning, data analysis, and software development. 
              Active in student governance and technical communities.
            </p>
          </div>
          
          <div className="coursework">
            <h4>Relevant Coursework</h4>
            <div className="course-tags">
              <span className="course-tag">Data Structures & Algorithms</span>
              <span className="course-tag">Machine Learning</span>
              <span className="course-tag">Database Management Systems</span>
              <span className="course-tag">Operating Systems</span>
              <span className="course-tag">Object-Oriented Programming</span>
              <span className="course-tag">Statistics & Probability</span>
              <span className="course-tag">Data Mining and Data Warehousing</span>
            </div>
          </div>
        </div>

        <div className="academic-achievements">
          <h3>Academic Highlights</h3>
          <div className="achievement-grid">
            <div className="achievement-item">
              <div className="achievement-number">7.3</div>
              <div className="achievement-label">Current CGPA</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-number">1st</div>
              <div className="achievement-label">District Topper (10th)</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-number">SIH</div>
              <div className="achievement-label">Selected for Hackathon</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education

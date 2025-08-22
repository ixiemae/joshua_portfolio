import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';
import profileImage from '../josh.jpg';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import healthSystemImg from '../images/website.jpg';
import healthAppImg from '../images/app.jpg';

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="home-hero">
        <div className="hero-text">
          <h1>Welcome to My Portfolio</h1>
          <h2>Hi, I'm Joshua Manuzon</h2>
          <p>
            I'm thrilled to show you the projects I've worked on and share my experiences.
          </p>
          
          <div className="social-icons">
            <a href="https://facebook.com/joshua.manuzon.17" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="icon facebook" />
            </a>
            <a href="https://github.com/joshoeee" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon github" />
            </a>
          </div>
        </div>
        
        <div className="hero-image">
          <img 
            src={profileImage} 
            alt="Profile" 
            className="profile-pic"
          />
        </div>
      </div>

      {/* Projects Preview */}
      <section className="preview-section projects-preview">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image-container">
              <img src={healthSystemImg} alt="Health Monitoring System" className="project-image" />
            </div>
            <h3>Health Monitoring System</h3>
            <p>A comprehensive system that tracks and monitors patient health metrics in real-time...</p>
            <div className="technologies">
              <span className="tech-tag">HTML</span>
              <span className="tech-tag">PHP</span>
              <span className="tech-tag">JavaScript</span>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image-container">
              <img src={healthAppImg} alt="Health Monitoring App" className="project-image" />
            </div>
            <h3>Health Monitoring App</h3>
            <p>Mobile application for residents to track their health metrics...</p>
            <div className="technologies">
              <span className="tech-tag">PHP</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">XML</span>
            </div>
          </div>
        </div>
        <div className="view-all">
          <Link to="/projects" className="view-more">View All Projects →</Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="preview-section contact-cta">
        <h2>Interested in working together?</h2>
        <Link to="/contact" className="cta-button">Get In Touch</Link>
      </section>
    </div>
  );
}

export default Home;
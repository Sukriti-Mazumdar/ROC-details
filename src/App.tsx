import { useState } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>ROC Details</h2>
          </div>
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" className="nav-link">Home</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-col1">
            <h1 className="hero-title">Professional ROC Filing Services</h1>
            <p className="hero-subtitle">
              Streamline your company's compliance with our expert ROC filing services.
              We handle all your regulatory requirements efficiently and accurately.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn-primary">Get Started</a>
              <a href="#services" className="btn-secondary">Our Services</a>
            </div>
          </div>
          <div className="hero-col2">
            {/* Hero background image will be applied via CSS */}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive ROC compliance solutions for your business</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">📋</div>
              <h3>Annual Filing</h3>
              <p>Complete annual compliance filings including AOC-4, MGT-7, and other mandatory returns.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🏢</div>
              <h3>Company Registration</h3>
              <p>End-to-end company registration services for new businesses and entrepreneurs.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>Compliance Management</h3>
              <p>Ongoing compliance monitoring and management to keep your business legally compliant.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📞</div>
              <h3>Consultation</h3>
              <p>Expert consultation on ROC matters and regulatory compliance requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About ROC Details</h2>
              <p>
                ROC Details is your trusted partner for all ROC (Registrar of Companies) related services.
                With years of experience in corporate compliance, we ensure that your business stays
                compliant with all regulatory requirements.
              </p>
              <p>
                Our team of experts handles everything from annual filings to complex regulatory matters,
                allowing you to focus on growing your business while we take care of the paperwork.
              </p>
              <div className="stats">
                <div className="stat">
                  <h3>500+</h3>
                  <p>Clients Served</p>
                </div>
                <div className="stat">
                  <h3>98%</h3>
                  <p>Success Rate</p>
                </div>
                <div className="stat">
                  <h3>10+</h3>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="placeholder-image">
                <span>Business Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Contact Us</h2>
            <p>Get in touch with our experts for your ROC compliance needs</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Address</h4>
                  <p>123 Business District, Mumbai, Maharashtra 400001</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <h4>Email</h4>
                  <p>info@rocdetails.com</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Your Phone" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows={5} required></textarea>
                </div>
                <button type="submit" className="btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>ROC Details</h3>
              <p>Your trusted partner for ROC compliance services.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li>Annual Filing</li>
                <li>Company Registration</li>
                <li>Compliance Management</li>
                <li>Consultation</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 ROC Details. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
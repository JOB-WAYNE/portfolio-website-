import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./style.css";

const Home = () => (
  <section className="hero">
    <div className="hero-content">
        {/* Profile Image */}
     
      <h1>Job Wayne Otieno</h1>
      <p className="subtitle">
        Professional website developer, junior software developer and student at Moringa School.
      </p>
      <h2>Welcome to My Portfolio</h2>
      <p className="intro">
        Hi! I'm Job Wayne Otieno, a passionate junior software developer and web designer dedicated to creating engaging
        and responsive websites.
      </p>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="section">
    <div className="container">
      <h2>About Me</h2>
      <p>
        I am a junior software developer and web designer with a keen interest in building user-friendly and visually
        appealing websites.
      </p>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="section">
    <div className="container">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill-card">
          <h3>Web Design</h3>
          <p>Proficient in HTML, CSS, and JavaScript.</p>
        </div>
        <div className="skill-card">
          <h3>Front-End Development</h3>
          <p>Experienced in frameworks like Bootstrap and Tailwind CSS.</p>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="section">
    <div className="container">
      <h2>Services</h2>
      <div className="services-grid">
        <div className="service-card">
          <h3>Custom Website Design</h3>
          <p>Tailored website designs that reflect your brand.</p>
        </div>
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="section">
    <div className="container">
      <h2>Projects</h2>
      <div className="projects-grid">
        <article className="project-card">
          <h3>Project One</h3>
          <p>Brief description of the project.</p>
        </article>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="section">
    <div className="container">
      <h2>Contact Me</h2>
      <p>Email: otienojobwayneotieno@gmail.com</p>
      <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
        <button>Visit My LinkedIn</button>
      </a>
    </div>
  </section>
);

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/skills">Skills</Link>
    <Link to="/services">Services</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/contact">Contact</Link>
  </nav>
);

const App = () => (
  <Router>
    <header>
      <Navbar />
    </header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <footer>
      <p>&copy; 2025 Job Wayne Otieno. All rights reserved.</p>
    </footer>
  </Router>
);

export default App;

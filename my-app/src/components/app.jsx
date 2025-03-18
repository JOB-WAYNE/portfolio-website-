import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <img
        src="images/pexels-joaojesusdesign-925743.jpg"
        alt="background"
        className="background-image"
      />
      
      <header>
        <nav>
          <button id="theme-toggle">Toggle Dark/Light Mode</button>
          <a href="#about">About Me</a>
          <a href="#skills">Skills</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      
      <section className="hero">
        <div className="hero-content">
          <img src="images/avator.jpg" alt="Job Wayne Otieno" />
          <h1>Job Wayne Otieno</h1>
          <p className="subtitle">Professional website developer, junior software developer, and student at Moringa School.</p>
          <h2>Welcome to My Portfolio</h2>
          <p className="intro">Hi! I'm Job Wayne Otieno, a passionate junior software developer and web designer...</p>
        </div>
      </section>
      
      <Section id="about" title="About Me" content="I am a junior software developer and web designer..." />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      
      <footer>
        <p>&copy; 2025 Job Wayne Otieno. All rights reserved.</p>
      </footer>
    </div>
  );
};

const Section = ({ id, title, content }) => (
  <section id={id} className="section">
    <div className="container">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  </section>
);

const Skills = () => (
  <Section id="skills" title="Skills" content="Proficient in web design, front-end, back-end development, and more." />
);

const Services = () => (
  <Section id="services" title="Services Offered" content="Custom website design, responsive development, and more." />
);

const Projects = () => (
  <Section id="projects" title="Featured Projects" content="Showcasing some of my best work." />
);

const Contact = () => (
  <section id="contact" className="section">
    <div className="container">
      <h2>Contact Me</h2>
      <p>If you'd like to get in touch, feel free to reach out via email or LinkedIn!</p>
      <div className="contact-buttons">
        <p>Email: otienojobwayneotieno@gmail.com</p>
        <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
          <button type="button">Visit My LinkedIn</button>
        </a>
      </div>
    </div>
  </section>
);

export default App;

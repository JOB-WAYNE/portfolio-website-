import React from "react";
import "./about.css";




const About = () => (
    <section id="about" className="section">
      <div className="container">
        <h2>About Me</h2>
        <p>
          I am a junior software developer and web designer with a keen interest in building user-friendly and visually appealing websites.
          With a foundation in both front-end and back-end technologies, I strive to create seamless user experiences.
          My goal is to constantly learn and improve my skills in the ever-evolving tech landscape.
        </p>
      </div>
    </section>
  );
  
  
  
  const App = () => (
    <>
      <header></header>
      
      <About />
      
      <footer>
        <p>&copy; 2025 Job Wayne Otieno. All rights reserved.</p>
      </footer>
    </>
  );
  
  export default App ;
  
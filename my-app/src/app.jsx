import React from "react";
import "./style.css";

const Home = () => (
  <section className="hero">
    <div className="hero-content">
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

const App = () => (
  <>
    <header></header>
    <Home />
    <footer>
      <p>&copy; 2025 Job Wayne Otieno. All rights reserved.</p>
    </footer>
  </>
);

export default App;

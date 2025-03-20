import React, { useState } from "react"; // for state management 
import { useNavigate } from "react-router-dom"; // for navigation 
import "./Projects.css";


const Projects = () => {
    return (
      <section id="projects" className="py-10 px-5 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Project One</h3>
              <p className="text-gray-700">Brief description of the project, including its purpose and technologies used.</p>
              <p className="text-gray-600 font-semibold">Technologies: HTML, CSS, JavaScript</p>
            </article>
            <article className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Project Two</h3>
              <p className="text-gray-700">Brief description of the project, including its purpose and technologies used.</p>
              <p className="text-gray-600 font-semibold">Technologies: HTML, CSS, JavaScript</p>
            </article>
            <article className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Project Three</h3>
              <p className="text-gray-700">Brief description of the project, including its purpose and technologies used.</p>
              <p className="text-gray-600 font-semibold">Technologies: HTML, CSS, JavaScript</p>
            </article>
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
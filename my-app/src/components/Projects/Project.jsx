import React from "react"; // Removed unnecessary useState import
import "./Projects.css"; // Ensure this file exists

const Projects = () => {
  return (
    <section id="projects" className="py-10 px-5 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Project One", tech: "HTML, CSS, JavaScript" },
            { name: "Project Two", tech: "React, Tailwind, Firebase" },
            { name: "Project Three", tech: "Node.js, Express, MongoDB" },
          ].map((project, index) => (
            <article key={index} className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="text-gray-700">
                Brief description of the project, including its purpose and technologies used.
              </p>
              <p className="text-gray-600 font-semibold">Technologies: {project.tech}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

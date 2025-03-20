import React, { useState } from "react"; // for state management 
import { useNavigate } from "react-router-dom"; // for navigation 
import "./Services.css";

const Skills = () => {
    return (
      <section id="skills" className="py-10 px-5 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Web Design</h3>
              <p className="text-gray-700">Proficient in HTML, CSS, and JavaScript. Familiar with design tools like Figma and Adobe XD.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Front-End Development</h3>
              <p className="text-gray-700">Experienced in creating responsive designs using frameworks like Bootstrap and Tailwind CSS.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Back-End Development</h3>
              <p className="text-gray-700">Knowledgeable in server-side technologies such as Node.js, Express, and databases like MongoDB and MySQL.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Content Management Systems</h3>
              <p className="text-gray-700">Proficient in WordPress, allowing clients to easily manage their content.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Version Control</h3>
              <p className="text-gray-700">Familiar with Git and GitHub for version control and collaboration.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  
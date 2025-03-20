import React from "react"; // Removed unnecessary useState & useNavigate imports
import "./Service.css"; // Ensure the file is correct, rename if needed

const skillsData = [
  {
    title: "Web Design",
    description: "Proficient in HTML, CSS, and JavaScript. Familiar with design tools like Figma and Adobe XD.",
  },
  {
    title: "Front-End Development",
    description: "Experienced in creating responsive designs using frameworks like Bootstrap and Tailwind CSS.",
  },
  {
    title: "Back-End Development",
    description: "Knowledgeable in server-side technologies such as Node.js, Express, and databases like MongoDB and MySQL.",
  },
  {
    title: "Content Management Systems",
    description: "Proficient in WordPress, allowing clients to easily manage their content.",
  },
  {
    title: "Version Control",
    description: "Familiar with Git and GitHub for version control and collaboration.",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-10 px-5 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((skill, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{skill.title}</h3>
              <p className="text-gray-700">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

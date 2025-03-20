import React from "react"; // Removed unused useState & useNavigate imports
import "./About.css"; // Fixed incorrect import path

const About = () => {
  return (
    <section className="hero bg-gray-100 py-16 px-5 text-center">
      <div className="max-w-2xl mx-auto">
        <img
          src="/images/avator.jpg" // Ensure the image is in 'public/images/' or adjust the path
          alt="Job Wayne Otieno"
          className="w-40 h-40 mx-auto rounded-full shadow-lg object-cover"
        />
        <h1 className="text-4xl font-bold text-gray-900 mt-4">Job Wayne Otieno</h1>
        <p className="text-lg text-gray-600 mt-2">
          Professional Website Developer, Junior Software Developer, and Student at Moringa School.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Welcome to My Portfolio</h2>
        <p className="text-gray-700 mt-4">
          Hi! I'm Job Wayne Otieno, a passionate junior software developer and web designer dedicated to creating
          engaging and responsive websites. I combine creativity with technical skills to deliver digital solutions
          tailored to meet the needs of my clients.
        </p>
      </div>
    </section>
  );
};

export default About;

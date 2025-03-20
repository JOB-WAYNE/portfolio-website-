import React, { useState } from "react"; // for state management 
import { useNavigate } from "react-router-dom"; // for navigation 
import "./Home.css";


const Home = () => (
  <section className="hero bg-gray-100 py-16 px-5 text-center">
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900">Job Wayne Otieno</h1>
      <p className="text-lg text-gray-600 mt-2">
        Professional Website Developer, Junior Software Developer, and Student at Moringa School.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mt-6">Welcome to My Portfolio</h2>
      <p className="text-gray-700 mt-4">
        Hi! I'm Job Wayne Otieno, a passionate junior software developer and web designer dedicated to creating
        engaging and responsive websites.
      </p>
    </div>
  </section>
);

const App = () => (
  <>
    <header className="bg-gray-900 text-white py-4 text-center">
      <h1 className="text-xl font-semibold">My Portfolio</h1>
    </header>
    <Home />
    <footer className="bg-gray-900 text-white text-center py-4">
      <p>&copy; 2025 Job Wayne Otieno. All rights reserved.</p>
    </footer>
  </>
);

export default App;

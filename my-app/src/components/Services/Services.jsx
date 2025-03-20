import React, { useState } from "react"; // for state management 
import { useNavigate } from "react-router-dom"; // for navigation 
import "./Services.css";

const Services = () => {
    return (
      <section id="services" className="py-10 px-5 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Services Offered</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Custom Website Design</h3>
              <p className="text-gray-700">Tailored website designs that reflect your brand and engage your audience.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Responsive Development</h3>
              <p className="text-gray-700">Ensuring your website looks great on all devices, from desktops to mobile phones.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Website Maintenance</h3>
              <p className="text-gray-700">Ongoing support and maintenance to keep your website up-to-date and secure.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Consultation</h3>
              <p className="text-gray-700">One-on-one consultation to discuss your project needs and how I can help.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  
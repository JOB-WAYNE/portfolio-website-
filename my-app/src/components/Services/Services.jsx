import React from "react"; // Removed unused useState & useNavigate imports
import "./Service.css"; // Ensure this file exists

const servicesData = [
  {
    title: "Custom Website Design",
    description: "Tailored website designs that reflect your brand and engage your audience.",
  },
  {
    title: "Responsive Development",
    description: "Ensuring your website looks great on all devices, from desktops to mobile phones.",
  },
  {
    title: "Website Maintenance",
    description: "Ongoing support and maintenance to keep your website up-to-date and secure.",
  },
  {
    title: "Consultation",
    description: "One-on-one consultation to discuss your project needs and how I can help.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-10 px-5 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Services Offered</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {servicesData.map((service, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

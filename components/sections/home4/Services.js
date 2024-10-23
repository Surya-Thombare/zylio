import React, { useState } from "react";
import "./Services.css"; // Import the CSS file
import AI from "../../../public/assets/imgs/oldImages/tcs/AI.png";
import Cloud from "../../../public/assets/imgs/oldImages/tcs/cloud.jpeg";
import Cogniticve from "../../../public/assets/imgs/oldImages/tcs/cognitiveBusinessOps.png";
import Consulting from "../../../public/assets/imgs/oldImages/tcs/consulting.jpeg";
import Cybersecurity from "../../../public/assets/imgs/oldImages/tcs/cybersecurity.jpeg";
import DataAnalytics from "../../../public/assets/imgs/oldImages/tcs/dataAnalytics.png";
import Enterprise from "../../../public/assets/imgs/oldImages/tcs/enterpriseSolutions.jpeg";
import IotDigital from "../../../public/assets/imgs/oldImages/tcs/iotDigital.jpeg";

const ServiceCard = ({ title, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="service-card"
      style={{
        transform: isHovered ? "translateY(-10px)" : "translateY(0)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imageUrl} alt={title} className="service-card-img" />
      <div
        className="service-overlay"
        style={{
          opacity: isHovered ? 1 : 0, // Overlay becomes visible on hover
        }}
      ></div>
      <div className="service-title">{title}</div>
    </div>
  );
};

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  const services = [
    {
      title: "Artificial Intelligence",
      imageUrl: AI.src,
    },
    {
      title: "Cloud",
      imageUrl: Cloud.src,
    },
    {
      title: "Cognitive Business Operations",
      imageUrl: Cogniticve.src,
    },
    {
      title: "Consulting",
      imageUrl: Consulting.src,
    },
    {
      title: "IoT Digital Engineering",
      imageUrl: IotDigital.src,
    },
    {
      title: "Enterprise Solutions",
      imageUrl: Enterprise.src,
    },
    {
      title: "Cybersecurity",
      imageUrl: Cybersecurity.src,
    },
    {
      title: "Data Analytics",
      imageUrl: DataAnalytics.src,
    },
  ];
  const visibleServices = showAll ? services : services.slice(0, 3);

  const toggleView = () => setShowAll(!showAll);

  return (
    <div className="services-container ">
      <div className="services-content container">
        <h3 className="services-heading-two container">SERVICES</h3>
        <h1 className="services-heading container">
          Transform your business with advanced technologies
        </h1>
        <div className="services-grid container">
          {visibleServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <button
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
          onClick={toggleView}
          className="view-button"
          style={{
            backgroundColor: buttonHovered
              ? "rgba(255, 255, 255, 0.1)"
              : "transparent",
          }}
        >
          {showAll ? "View less ↑" : "View all topics ↓"}
        </button>
      </div>
    </div>
  );
};

export default Services;

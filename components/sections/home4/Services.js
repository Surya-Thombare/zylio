import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./Services.css"; // Import the CSS file
import AI from "../../../public/assets/imgs/oldImages/tcs/AI.png";
import Cloud from "../../../public/assets/imgs/oldImages/tcs/cloud.jpeg";
import Cogniticve from "../../../public/assets/imgs/oldImages/tcs/cognitiveBusinessOps.png";
import Consulting from "../../../public/assets/imgs/oldImages/tcs/consulting.jpeg";
import Cybersecurity from "../../../public/assets/imgs/oldImages/tcs/cybersecurity.jpeg";
import DataAnalytics from "../../../public/assets/imgs/oldImages/tcs/dataAnalytics.png";
import Enterprise from "../../../public/assets/imgs/oldImages/tcs/enterpriseSolutions.jpeg";
import IotDigital from "../../../public/assets/imgs/oldImages/tcs/iotDigital.jpeg";
import AppDevelopment from "../../../public/assets/imgs/oldImages/tcs/App_Devlopment_zylivo_innovations.jpg";
import BrandIdentity from "../../../public/assets/imgs/oldImages/tcs/Brand_Identity_zylivo_innovations.jpg";
import Ecommerce from "../../../public/assets/imgs/oldImages/tcs/Ecomerce_Website_Devlopment_zylivo_innovations.jpg";
import SoftwareDevelopment from "../../../public/assets/imgs/oldImages/tcs/Software_Devlopment_zylivo_innovations.jpg";
import UIUX from "../../../public/assets/imgs/oldImages/tcs/UX_UI_Desiner_zylivo_innovations.jpg";
import WebsiteDevelopment from "../../../public/assets/imgs/oldImages/tcs/Website_Devlopment_zylivo_innovations.jpg";

const ServiceCard = ({ title, imageUrl, path }) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter(); // Initialize useRouter

  const handleNavigation = (path) => {
    if (path) {
      router.push(path); // Navigate to the industry-specific page
    }
  };

  return (
    <div
      className="service-card"
      style={{
        transform: isHovered ? "translateY(-10px)" : "translateY(0)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => handleNavigation(path)}
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
  
  // Preserving the original background and styling as per request
  
  const services = [
    {
      title: "Website Development",
      imageUrl: WebsiteDevelopment.src,
      path: "/services/website-development",
    },
    {
      title: "Ecommerce Website Development",
      imageUrl: Ecommerce.src,
      path: "/services/ecommerce",
    },
    {
      title: "Software Development",
      imageUrl: SoftwareDevelopment.src,
      path: "/services/software-development",
    },
    {
      title: "App Development",
      imageUrl: AppDevelopment.src,
      path: "/services/app-development",
    },
    {
      title: "Brand Identity",
      imageUrl: BrandIdentity.src,
      path: "/services/brand-identity",
    },
    {
      title: "UI / UX",
      imageUrl: UIUX.src,
      path: "/services/ui-ux",
    },
    {
      title: "Artificial Intelligence",
      imageUrl: AI.src,
      path: "/services/ai",
    },
    {
      title: "Cloud",
      imageUrl: Cloud.src,
      path: "/services/cloud",
    },
    {
      title: "Cognitive Business Operations",
      imageUrl: Cogniticve.src,
      path: "/services/cognitive-business",
    },
    {
      title: "Consulting",
      imageUrl: Consulting.src,
      path: "/services/consulting",
    },
    {
      title: "IoT Digital Engineering",
      imageUrl: IotDigital.src,
      path: "/services/iot",
    },
    {
      title: "Enterprise Solutions",
      imageUrl: Enterprise.src,
      path: "/services/enterprise",
    },
    {
      title: "Cybersecurity",
      imageUrl: Cybersecurity.src,
      path: "/services/cybersecurity",
    },
    {
      title: "Data Analytics",
      imageUrl: DataAnalytics.src,
      path: "/services/data-analytics",
    },
  ];

  // Calculate rows needed for proper grid layout
  const numRows = Math.ceil(services.length / 3);
  const visibleRows = showAll ? numRows : 1;
  
  // Create an array of visible services based on rows instead of count
  const visibleServices = services.slice(0, visibleRows * 3);

  const toggleView = () => setShowAll(!showAll);

  return (
    <div className="services-container">
      <div className=" container">
        <h3 className="services-heading-two container monda-font">SERVICES</h3>
        <h1 className="services-heading container">
          Transform your business with advanced technologies
        </h1>
        <div className="services-grid container">
          {/* Always display services in groups of 3 to maintain consistent layout */}
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card-wrapper"
              style={{ 
                display: index < visibleRows * 3 ? "block" : "none",
                opacity: index < visibleRows * 3 ? 1 : 0,
                transition: "opacity 0.3s ease-in-out",
                height: index < visibleRows * 3 ? "auto" : 0
              }}
            >
              <ServiceCard {...service} />
            </div>
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
            marginTop: "20px"
          }}
        >
          {showAll ? "View less ↑" : "View all topics ↓"}
        </button>
      </div>
    </div>
  );
};

export default Services;
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
    router.push(path); // Navigate to the industry-specific page
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

  const services = [
    {
      title: "Website Development",
      imageUrl: WebsiteDevelopment.src,
    },
    {
      title: "Ecommerce Website Development",
      imageUrl: Ecommerce.src,
      path: "/services/ecommerce",
    },
    {
      title: "Software Development",
      imageUrl: SoftwareDevelopment.src,
    },
    {
      title: "App Development",
      imageUrl: AppDevelopment.src,
    },
    {
      title: "Brand Identity",
      imageUrl: BrandIdentity.src,
    },
    {
      title: "UI / UX",
      imageUrl: UIUX.src,
    },
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
      <div className=" container">
        <h3 className="services-heading-two container monda-font">SERVICES</h3>
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

import React, { useState } from "react";
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
      style={{
        ...styles.serviceCard,
        transform: isHovered ? "translateY(-10px)" : "translateY(0)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imageUrl} alt={title} style={styles.serviceCardImg} />
      <div
        style={{
          ...styles.serviceOverlay,
          opacity: isHovered ? 1 : 0, // Overlay becomes visible on hover
        }}
      ></div>
      <div style={styles.serviceTitle}>{title}</div>
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
    <div
      style={{
        ...styles.servicesContainer,
        height: showAll ? "auto" : "auto", // Adjust height based on toggle
      }}
    >
      <div style={styles.servicesContent}>
        <h3 style={styles.servicesHeadingTwo}>SERVICES</h3>
        <h1 style={styles.servicesHeading}>
          Transform your business with advanced technologies
        </h1>
        <div style={styles.servicesGrid}>
          {visibleServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <button
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
          onClick={toggleView}
          style={{
            ...styles.viewButton,
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

// CSS-in-JS styling (styles as objects)
const styles = {
  servicesContainer: {
    backgroundColor: "#1a1a1a",
    padding: "2rem",
    overflow: "hidden", // Prevent scroll until expand
    transition: "height 0.3s ease", // Smooth expand/shrink
  },
  servicesContent: {
    maxWidth: "1400px",
    margin: "0 auto",
  },
  servicesHeading: {
    color: "white",
    fontSize: "2.25rem",
    fontWeight: "300",
    marginBottom: "2rem",
  },
  servicesHeadingTwo: {
    color: "white",
    fontSize: "1.55rem",
    fontWeight: "300",
    marginBottom: "2rem",
  },
  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "2.5rem",
  },
  serviceCard: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "0.5rem",
    transition: "transform 0.3s ease",
  },
  serviceCardImg: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    filter: "brightness(50%)",
  },
  serviceOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "50%",
    background: "linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)",
    opacity: 0, // Initially hidden
    transition: "opacity 0.3s ease",
  },
  serviceTitle: {
    position: "absolute",
    bottom: "1.25rem",
    left: "1.25rem",
    color: "white",
    fontSize: "1.5rem",
    fontWeight: "600",
    zIndex: 1,
  },
  viewButton: {
    display: "block",
    width: "200px",
    margin: "2.5rem auto 0",
    padding: "0.625rem 1.25rem",
    backgroundColor: "transparent",
    color: "white",
    border: "2px solid white",
    borderRadius: "9999px",
    textAlign: "center",
    textDecoration: "none",
    transition: "background-color 0.3s ease",
    cursor: "pointer",
  },
};

export default Services;

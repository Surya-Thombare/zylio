import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from Next.js
import shoppingCart from "/public/assets/imgs/icons/shopping_cart.png";
import airplane from "/public/assets/imgs/icons/airplane.png";
import construction from "/public/assets/imgs/icons/construction.png";
import education from "/public/assets/imgs/icons/education.png";
import healthcare from "/public/assets/imgs/icons/healthcare.png";
import insurance from "/public/assets/imgs/icons/insurance.png";
import manufacturing from "/public/assets/imgs/icons/manufacturing.png";
import public_services from "/public/assets/imgs/icons/public_services.png";

const industries = [
  { name: "Retail", icon: shoppingCart.src, path: "/industry/retail" },
  { name: "Online Retail", icon: shoppingCart.src, path: "/retail" },
  {
    name: "Travel and Logistics",
    icon: airplane.src,
    path: "/travel-logistics",
  },
  { name: "Insurance", icon: insurance.src, path: "/insurance" },
  { name: "Healthcare", icon: healthcare.src, path: "/healthcare" },
  {
    name: "Consumer Goods and Distribution",
    icon: shoppingCart.src,
    path: "/retail",
  },
  { name: "Education", icon: education.src, path: "/education" },
  { name: "Construction", icon: construction.src, path: "/construction" },
  {
    name: "Manufacturing",
    icon: manufacturing.src,
    path: "/industry/manufacturing",
  },
  {
    name: "Public Services",
    icon: public_services.src,
    path: "/public-services",
  },
];

const Industry = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const router = useRouter(); // Initialize useRouter

  const handleNavigation = (path) => {
    router.push(path); // Navigate to the industry-specific page
  };

  return (
    <div className="industry-container ">
      <h1 className="industry-title container">
        Select your industry. Discover our impact.
      </h1>
      <div className="industry-grid container">
        {industries.map((industry, index) => (
          <div
            key={index}
            className={`industry-item ${
              hoveredIndex === index ? "hovered" : ""
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleNavigation(industry.path)} // On click, navigate to the respective page
          >
            <span
              className={`industry-icon ${
                hoveredIndex === index ? "icon-hovered" : ""
              }`}
            >
              <img src={industry.icon} alt={industry.name} />
            </span>
            <span
              className={`industry-name ${
                hoveredIndex === index ? "name-hovered" : ""
              }`}
            >
              {industry.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industry;

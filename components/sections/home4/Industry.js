import React, { useState } from "react";
import shoppingCart from "../../../public/assets/imgs/icons/shopping_cart.png"
import airplane from "../../../public/assets/imgs/icons/airplane.png"
import construction from "../../../public/assets/imgs/icons/construction.png"
import education from "../../../public/assets/imgs/icons/education.png"
import healthcare from "../../../public/assets/imgs/icons/healthcare.png"
import insurance from "../../../public/assets/imgs/icons/insurance.png"
import manufacturing from "../../../public/assets/imgs/icons/manufacturing.png"
import public_services from "../../../public/assets/imgs/icons/public_services.png"
 

const industries = [
  { name: "Retail", icon: shoppingCart.src },
  { name: "Online Retail", icon: shoppingCart.src },
  { name: "Travel and Logistics", icon: airplane.src },
  { name: "Insurance", icon: insurance.src },
  { name: "Healthcare", icon: healthcare.src },
  { name: "Consumer Goods and Distribution", icon: shoppingCart.src },
  { name: "Education", icon: education.src },
  { name: "Construction", icon: construction.src },
  { name: "Manufacturing", icon: manufacturing.src },
  { name: "Public Services", icon: public_services.src },
];

const Industry = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="industry-container">
      <h1 className="industry-title">
        Select your industry. Discover our impact.
      </h1>
      <div className="industry-grid">
        {industries.map((industry, index) => (
          <div
            key={index}
            className={`industry-item ${
              hoveredIndex === index ? "hovered" : ""
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span
              className={`industry-icon ${
                hoveredIndex === index ? "icon-hovered" : ""
              }`}
            >
              <img src={industry.icon} />
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

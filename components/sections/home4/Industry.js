import React, { useState } from "react";

const industries = [
  { name: "Digital Transformation", icon: "💰" },
  { name: "Application Development", icon: "📊" },
  { name: "Product Engineering", icon: "📡" },
  { name: "UI/UX Design ", icon: "🛒" },
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
              {industry.icon}
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

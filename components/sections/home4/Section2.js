"use client";

import React, { useState, useEffect } from "react";

const ReviewSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check on component mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: isMobile ? "6px 0" : "20px 0",
        backgroundColor: "#f8f9fa",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          fontSize: isMobile ? "8px" : "14px",
          fontWeight: "bold",
          color: "#333",
          marginBottom: isMobile ? "20px" : "0",
        }}
      >
        <span>REVIEWED ON</span>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          alt="Clutch"
          style={{ width: "80px", margin: "5px 0" }}
        />
        <div className="stars">★★★★★</div>
        <span>31 REVIEWS</span>
      </div>

      <div
        style={{
          width: isMobile ? "0px" : "4px",
          height: "30px",
          backgroundColor: "#e0e0e0",
          margin: "0 15px",
        }}
      ></div>

      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "row" : "row",
          justifyContent: "left",
          gap: isMobile ? "2px" : "80px",
        }}
      >
        {[
          {
            value: "20",
            text: "Years",
            description: "Proven Track Record",
          },
          {
            value: "98%",
            description: "Customer Satisfaction",
          },
          {
            value: "1,500",
            text: "Projects",
            description: "We Have Completed",
          },
          {
            value: "3",
            text: "Mins",
            description: "Average Answer Time",
          },
        ].map((item, index) => (
          <React.Fragment key={index}>
            <div
              style={{
                paddingLeft: "7px",
                paddingRight: "7px",
                textAlign: "left",
                color: "#333",
              }}
            >
              <span
                style={{
                  fontSize: isMobile ? "10px" : "24px", // Adjusted size for mobile
                  fontWeight: "bold",
                  color: "#19224f",
                  paddingRight: "3px",
                }}
              >
                {item.value}
              </span>
              {item.text && (
                <span
                  style={{
                    fontSize: isMobile ? "10px" : "16px", // Adjusted size for mobile
                    fontWeight: "bold",
                    color: "#19224f",
                  }}
                >
                  {item.text}
                </span>
              )}
              <p
                style={{
                  fontSize: isMobile ? "8px" : "14px",
                  color: "#6c757d",
                }}
              >
                {item.description}
              </p>
            </div>

            {index < 3 && (
              <div
                style={{
                  width: "4px",
                  height: "30px",
                  backgroundColor: "#e0e0e0",
                  margin: "0 15px",
                }}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;

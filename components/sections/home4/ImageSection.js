import React from "react";

const ImageSection = () => {
  return (
    <div className="services-container">
      <div className="container">
        <div className="py-2">
          <div
            className=""
            style={{ color: "white", fontSize: "32px", paddingBottom: "60px" }}
          >
            We provide creative solutions for your creative ideas.
          </div>

          <img
            style={{ height: "50%" }}
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSection;

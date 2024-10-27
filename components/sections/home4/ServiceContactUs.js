import React from "react";
import Ecommerce from "../../../public/assets/imgs/oldImages/tcs/Ecomerce_Website_Devlopment_zylivo_innovations.jpg";

const ServiceContactUs = () => {
  return (
    <div style={{ backgroundColor: "#1d1d1d" }}>
      <div className="container-fluid ">
        <div className="row">
          {/* Left section: Image */}
          <div className="col-md-5 p-0">
            <img
              src={Ecommerce.src}
              alt="Ecommerce"
              className="img-fluid w-100"
            />
          </div>

          {/* Right section: Text + Button */}
          <div className="col-md-7 p-0 align-items-center justify-content-center">
            <div className="custom-container d-flex align-items-center">
              <div>
                <h2
                  className="text-white mb-4"
                  style={{ fontSize: "32px", fontWeight: 400 }}
                >
                  Transformation Starts Here
                </h2>
                <a href="#" className="btn custom-btn">
                  Talk to our experts
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS inside the component */}
      <style jsx>{`
        .custom-container {
          background-color: #1d1d1d; /* Dark background color for the right section */
          padding: 30px;
          height: 57.9vh; /* Full viewport height */
        }

        .custom-btn {
          background-color: white;
          color: black;
          border-radius: 25px;
          padding: 10px 20px;
          font-weight: 500;
          font-size: 14px;
          text-decoration: none;
        }

        .custom-btn:hover {
          background-color: #ddd;
          color: black;
        }

        h2 {
          color: white;
        }
      `}</style>
    </div>
  );
};

export default ServiceContactUs;

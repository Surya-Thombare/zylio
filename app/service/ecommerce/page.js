"use client";
import React from "react";
import { useState } from "react";
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
import Layout from "@/components/layout/Layout";
import Zylivo_innovations_Banner from "../../../public/assets/imgs/background/Zylivo_innovations_Banner.png";
// import SolutionsGrid from "@/components/sections/home4/SolutionCard";
import SolutionsLayout from "@/components/sections/home4/SolutionCard";
import Choose_zylivoService from "@/components/sections/home4/Choose_zylivoService";
import ServiceContactUs from "@/components/sections/home4/ServiceContactUs";

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

const ecommerce = () => {
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
  const visibleServices = showAll ? services : services.slice(0, 4);

  const toggleView = () => setShowAll(!showAll);

  return (
    //     <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
    //   <div class="carousel-inner">
    //     <div class="carousel-item active">
    //       <img class="d-block w-100" src="https://images.unsplash.com/photo-1601924994987-69e26d50dc26" alt="First slide"/>
    //     </div>
    //     <div class="carousel-item">
    //       <img class="d-block w-100" src="..." alt="Second slide"/>
    //     </div>
    //     <div class="carousel-item">
    //       <img class="d-block w-100" src="..." alt="Third slide"/>
    //     </div>
    //   </div>
    // </div>
    <Layout headerStyle={1} footerStyle={4} logoWhite>
      <div
        className="p-5 text-center bg-image rounded-3"
        style={{
          position: "relative",
          height: "600px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${Ecommerce.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
            opacity: 1, // Fully opaque
          }}
        ></div>

        {/* Semi-transparent overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${Zylivo_innovations_Banner.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 1,
            opacity: 0.8, // 40% opacity for the overlay
          }}
        ></div>
        <div className="container" style={{ paddingLeft: "0px" }}>
          <div
            style={{
              color: "white",
              maxWidth: "600px",
              textAlign: "left",
              zIndex: 2,
              position: "relative",
              // padding: "20px",
            }}
          >
            <h1 style={{ fontSize: "48px", fontWeight: "normal", zIndex: "1" }}>
              Ecommerce Website Development
            </h1>
          </div>
        </div>
        {/* <div
          className="mask"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)}}" }}
        >
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3 py-5">Retail</h1>
              <h4 className="mb-3">Lead the next frontier of retail</h4> */}
        {/* <a data-mdb-ripple-init className="btn btn-outline-light btn-lg" href="#!" role="button">Call to action</a> */}
        {/* </div>
          </div>
        </div> */}
      </div>

      <div className="flex justify-content-center align-items-left text-left container">
        <div
          style={{
            paddingTop: "18px",
            fontWeight: "500",
            paddingLeft: "20px",
            fontSize: "18px",
          }}
        ></div>
        <h2
          style={{
            fontWeight: "500",
            paddingTop: "18px",
            paddingLeft: "20px",
            fontSize: "32px",
          }}
        >
          Ecommerce Website Development Services
        </h2>
        <p
          className=""
          style={{
            fontSize: "18px",
            paddingBottom: "88px !important",
            lineHeight: "180%",
            letterSpacing: ".03125rem",
            padding: "18px",
          }}
        >
          The manufacturing landscape is undergoing a seismic shift. The future
          demands a bold new vision – one rooted in the principles of Industry
          5.0, where technology drives positive change for people and the
          planet.
          <br />
          <br /> We see this as a pivotal moment for the industry. TCS partners
          with global manufacturing enterprises to navigate this transformation,
          empowering them to not just adapt, but thrive as future-ready
          businesses. We harness the transformative power of technologies, like
          GenAI and quantum computing, to drive meaningful business outcomes and
          sustainable growth for our clients. We're committed to creating a
          future where manufacturing ecosystems are resilient, sustainable, and
          human-centric, leading the way toward a purpose-led and thriving
          industry. <br />
          <br />
          The manufacturing landscape is undergoing a seismic shift. The future
          demands a bold new vision – one rooted in the principles of Industry
          5.0, where technology drives positive change for people and the
          planet.
          <br />
          <br />
          We see this as a pivotal moment for the industry. TCS partners with
          global manufacturing enterprises to navigate this transformation,
          empowering them to not just adapt, but thrive as future-ready
          businesses. We harness the transformative power of technologies, like
          GenAI and quantum computing, to drive meaningful business outcomes and
          sustainable growth for our clients. We're committed to creating a
          future where manufacturing ecosystems are resilient, sustainable, and
          human-centric, leading the way toward a purpose-led and thriving
          industry.
        </p>
      </div>
      <div className="services-container">
        <div className="services-content ">
          {/* <h3 className="services-heading-two">SERVICES</h3> */}
          <h1
            className="services-heading container"
            style={{ fontSize: "32px" }}
          >
            Our Services for Manufacturing Industry
          </h1>
          <div className="services-grid container">
            {visibleServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>

      <Choose_zylivoService />

      <ServiceContactUs />
      {/* <SolutionsLayout /> */}

      {/* Responsive adjustments with media query */}
      <style jsx>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 2.5rem;
        }

        @media (max-width: 768px) {
          .bg-image {
            height: 300px; /* Adjust height for mobile */
          }
          h1 {
            font-size: 1.75rem !important; /* Scale down for mobile */
          }
          h4 {
            font-size: 1.25rem; /* Scale down for mobile */
          }
          .container {
            padding: 10px; /* Reduce padding for mobile */
          }
        }

        @media (max-width: 250px) {
          .bg-image {
            height: 300px; /* Adjust height for mobile */
          }
          h1 {
            font-size: 1.75rem !important; /* Scale down for mobile */
          }
          h4 {
            font-size: 1.25rem; /* Scale down for mobile */
          }
          .container {
            padding: 10px; /* Reduce padding for mobile */
          }
        }
      `}</style>
    </Layout>
  );
};

export default ecommerce;

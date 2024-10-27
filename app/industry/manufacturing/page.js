"use client";
import React from "react";
import { useState } from "react";
import "../../../components/sections/home4/Services.css";

import AI from "../../../public/assets/imgs/oldImages/tcs/AI.png";
import Cloud from "../../../public/assets/imgs/oldImages/tcs/cloud.jpeg";
import Cogniticve from "../../../public/assets/imgs/oldImages/tcs/cognitiveBusinessOps.png";
import Consulting from "../../../public/assets/imgs/oldImages/tcs/consulting.jpeg";
import Cybersecurity from "../../../public/assets/imgs/oldImages/tcs/cybersecurity.jpeg";
import DataAnalytics from "../../../public/assets/imgs/oldImages/tcs/dataAnalytics.png";
import Enterprise from "../../../public/assets/imgs/oldImages/tcs/enterpriseSolutions.jpeg";
import IotDigital from "../../../public/assets/imgs/oldImages/tcs/iotDigital.jpeg";
import Layout from "@/components/layout/Layout";
import Zylivo_innovations_Banner from "../../../public/assets/imgs/background/Zylivo_innovations_Banner.png";
// import SolutionsGrid from "@/components/sections/home4/SolutionCard";
import SolutionsLayout from "@/components/sections/home4/SolutionCard";

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

const manufacturing = () => {
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
        className="p-5 text-center bg-image rounded-3 "
        style={{
          backgroundImage: `url(${Zylivo_innovations_Banner.src})`,
          height: "600px",

          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container" style={{ paddingLeft: "0px" }}>
          <div
            style={{
              color: "white",
              maxWidth: "600px",
              textAlign: "left",
              // padding: "20px",
            }}
          >
            <div style={{ fontSize: "20px" }}>Industry / Manufacturing</div>
            <h1 style={{ fontSize: "48px", fontWeight: "normal" }}>
              Manufacturing
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

      <div className="flex justify-content-center align-items-left text-left container manufacturing-container">
        <div
          style={{
            paddingTop: "18px",
            fontWeight: "500",
            paddingLeft: "20px",
            fontSize: "18px",
          }}
        >
          Manufacturing
        </div>
        <h2
          style={{
            fontWeight: "500",
            paddingTop: "18px",
            paddingLeft: "20px",
            fontSize: "32px",
          }}
        >
          Creating a sustainable, transformative ecosystem
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
          5.0, where technology drives positive change for people and the planet{" "}
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
      <SolutionsLayout />
      <section className="section-box box-our-working">
        <div className="container">
          <div className="text-left container">
            <h2
              className=""
              style={{ fontSize: "32px", fontWeight: "600", color: "#191919" }}
            >
              The Zylivo Advantage
            </h2>
          </div>
          <div className="row justify-content-evenly container">
            <div
              className="col-lg-4 col-md-6 .col-sm-6"
              style={{ paddingTop: "28px" }}
            >
              <div className="card-working hover-up">
                <div className="card-number">
                  <span>1</span>
                </div>
                <div className="card-info">
                  <h3 className="text-22-bold">Requirement Analysis</h3>
                  <p className="text-md">
                    Pellentesque at posuere tellus. Ut sed dui justo. Phasellus
                    is scelerisque turpis arcu, ut pulvinar lectus tristique
                    non. Nam laoreet, risus vel laoreet laoreet, mauris risus
                    porta.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 .col-sm-6"
              style={{ paddingTop: "28px" }}
            >
              <div className="card-working hover-up">
                <div className="card-number">
                  <span>2</span>
                </div>
                <div className="card-info">
                  <h3 className="text-22-bold">Development</h3>
                  <p className="text-md">
                    Pellentesque at posuere tellus. Ut sed dui justo. Phasellus
                    is scelerisque turpis arcu, ut pulvinar lectus tristique
                    non. Nam laoreet, risus vel laoreet laoreet
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 .col-sm-6"
              style={{ paddingTop: "28px" }}
            >
              <div className="card-working hover-up">
                <div className="card-number">
                  <span>3</span>
                </div>
                <div className="card-info">
                  <h3 className="text-22-bold">
                    Implementation or Test Execution
                  </h3>
                  <p className="text-md">
                    Pellentesque at posuere tellus. Ut sed dui justo. Phasellus
                    is scelerisque turpis arcu, ut pulvinar lectus tristique
                    non. Nam laoreet, risus vel laoreet
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-evenly container">
            <div
              className="col-lg-4 col-md-6 .col-sm-6"
              style={{ paddingTop: "28px" }}
            >
              <div className="card-working hover-up">
                <div className="card-number">
                  <span>1</span>
                </div>
                <div className="card-info">
                  <h3 className="text-22-bold">Requirement Analysis</h3>
                  <p className="text-md">
                    Pellentesque at posuere tellus. Ut sed dui justo. Phasellus
                    is scelerisque turpis arcu, ut pulvinar lectus tristique
                    non. Nam laoreet, risus vel laoreet laoreet, mauris risus
                    porta .
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6  .col-sm-6"
              style={{ paddingTop: "28px" }}
            >
              <div className="card-working hover-up">
                <div className="card-number">
                  <span>2</span>
                </div>
                <div className="card-info">
                  <h3 className="text-22-bold">Development</h3>
                  <p className="text-md">
                    Pellentesque at posuere tellus. Ut sed dui justo. Phasellus
                    is scelerisque turpis arcu, ut pulvinar lectus tristique
                    non. Nam laoreet, risus vel laoreet laoreet
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 .col-sm-6"
              style={{ paddingTop: "28px" }}
            >
              <div className="card-working hover-up">
                <div className="card-number">
                  <span>3</span>
                </div>
                <div className="card-info">
                  <h3 className="text-22-bold">
                    Implementation or Test Execution
                  </h3>
                  <p className="text-md">
                    Pellentesque at posuere tellus. Ut sed dui justo. Phasellus
                    is scelerisque turpis arcu, ut pulvinar lectus tristique
                    non. Nam laoreet, risus vel laoreet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
      {/* Responsive adjustments with media query */}
      <style jsx>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 2.5rem;
        }

        @media (max-width: 768px) {
          .services-container {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }

          .container {
            padding-left: 16px !important;
            padding-right: 16px !important ;
          }

          .box-our-working {
            padding: 16px !important;
          }

          .box-our-working .container {
            padding: 16px !important;
            justify-content: center;
            align-items: center;
          }

          .section-box .container {
            padding-left: 16px !important;
            padding-right: 16px !important ;
          }

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

export default manufacturing;

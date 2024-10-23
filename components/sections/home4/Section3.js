import Link from "next/link";
import Image from "next/image";
import home_image_1 from "../../../public/assets/imgs/oldImages/about/home-one-about/home_agency_about_1.jpg";
import home_image_2 from "../../../public/assets/imgs/oldImages/about/home-one-about/home_agency_about_2.jpg";
import about_image from "../../../public/assets/imgs/oldImages/shape-animation/about-shape-1.png";
import React, { useState, useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
export default function Section3() {
  const [isMobile, setIsMobile] = useState(false);
  const tiltRef = useRef(null);
  const tiltOverlayRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        reset: !0,

        max: 25,
        speed: 4e3,
        glare: true,
        "max-glare": 0.5,
      });
    }
    if (tiltOverlayRef.current) {
      VanillaTilt.init(tiltOverlayRef.current, {
        reset: !0,

        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="section-wrapper">
      <div className="container">
        {/* <div className="section-title">
          <h2>Who are we</h2>
          <p>Your one-stop solution for all things digital</p>
        </div> */}
    <div className="container">
        <div className="row container">
          {/* Text section */}
          <div className={`col ${isMobile ? "col-12" : "col-lg-5 col-md-6"}`}>
            <div className="text-section text-black container ">
              <span className="subtitle  text-black  section3_text_title">
                Your Digital Transformation Partner
              </span>
              <h3 className="title section3_text_subtitle">
                We Create Software, Websites and Web Apps.
              </h3>
              <p className="description">
                We are a team of professionals committed to transforming the
                digital landscape for businesses and individuals alike. We
                believe in the power of innovation and technology, and their
                potential to make life easier, more meaningful, and efficient.
              </p>
              <Link href="/about-us">
                <span className="btn-primary">Get to know us</span>
              </Link>
            </div>
          </div>

          {/* Image section */}
          <div className={`col ${isMobile ? "col-12" : "col-lg-7 col-md-6"}`}>
            <div className="about-image-area">
              <div className="about-image" ref={tiltRef}>
                {/* Main image (Team discussion) */}
                <Image
                  src={home_image_1}
                  alt="Team meeting image"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              {/* Secondary image (Laptop with code) */}
              <div className="about-image-overlay">
                <Image
                  src={home_image_2}
                  alt="Laptop with code"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              {/* Decorative overlay */}
              <div className="shape shape-1">
                <Image
                  src={about_image}
                  alt="Decorative shape"
                  layout="intrinsic"
                />
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-image,
        .about-image-overlay {
          transition: transform 0.3s ease;
        }

        .section-wrapper {
          padding-top: 90px;
          padding-bottom: 200px;
          background-color: #fff;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding-bottom: 5rem;
        }

        .section-title {
          text-align: center;
          animation: fadeIn 1s;
        }

        .section-title h2 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        .section-title p {
          font-size: 1.25rem;
        }

        .row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          margin-top: 2rem;
        }

        .col {
          flex: 1;
          padding: 0.2rem;
        }

        .text-section {
          animation: fadeIn 1s;
        }

        .text-section .subtitle {
          font-size: 1rem;
          color: #6c757d;
        }

        .text-section .title {
          font-size: 1.75rem;
          margin: 1rem 0;
        }

        .text-section .description {
          font-size: 1rem;
          color: #333;
          margin-bottom: 2rem;
        }

        .btn-primary {
          display: inline-block;
          padding: 0.5rem 1rem;
          background-color: #5057e6;
          color: #fff;
          text-decoration: none;
          border-radius: 0.25rem;
          cursor: pointer;
        }

        .about-image-area {
          position: relative;
          animation: fadeIn 1s;
        }

        .about-image {
          z-index: 9;
          right: 0px;
        }

        .about-image-overlay {
          position: absolute;
          top: 70px;
          left: 40%;
          transform: translateX(-50%);
          z-index: 8;
          opacity: 0.8;
          width: 70%;
          height: 50%;
        }

        .shape {
          position: absolute;
          top: 10%;
          left: 65%;
          z-index: 0;
        }
        @media only screen and (min-width: 1200px) and (max-width: 2999px) {
          .about-image-overlay {
            width: 350px;
          }
        }

        @media only screen and (min-width: 769px) and (max-width: 900px) {
          .row {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            align-items: center;
            margin-top: 2rem;
          }
          .col {
            width: 100%;
            max-width: 100%;
            margin-top: 2rem;
          }

          .section-title h2 {
            font-size: 3.1rem;
            margin-bottom: 0.5rem;
          }

          .section-title p {
            font-size: 1.51rem;
            padding-top: 9px;
          }

          .text-section {
            margin: 15px;
            margin-top: 5px;
          }

          .text-section .subtitle {
            font-size: 1.4rem;
            color: #6c757d;
          }

          .text-section .title {
            font-size: 1.65rem;
            margin: 1rem 0;
          }

          .text-section .description {
            font-size: 1.5rem;
            color: #333;
            margin-bottom: 2rem;
          }
          .about-image-area .about-image {
            width: 450px;
          }
        }

        @media only screen and (max-width: 768px) {
          .col {
            width: 100%;
            max-width: 100%;
            margin-top: 2rem;
          }
          .section-title h2 {
            font-size: 2.1rem;
            margin-bottom: 0.5rem;
          }

          .section-title p {
            font-size: 1.1rem;
          }

          .text-section {
            margin: 15px;
            margin-top: 5px;
          }

          .text-section .subtitle {
            font-size: 1.4rem;
            color: #6c757d;
          }

          .text-section .title {
            font-size: 1.35rem;
            margin: 1rem 0;
          }

          .text-section .description {
            font-size: 1.1rem;
            color: #333;
            margin-bottom: 2rem;
          }

          .row {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            align-items: center;
            margin-top: 2rem;
          }
          .about-image-area .about-image {
            width: 350px;
            padding-right: 10px;
          }

          .about-image-overlay {
            width: 350px;
            padding-left: 10px;
          }
        }

        @media only screen and (max-width: 479px) {
          .about-image-area .about-image {
            width: 250px;
            padding-right: 10px;
          }

          .about-image-overlay {
            width: 300px;
          }
          .row {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            align-items: center;
            margin-top: 2rem;
          }

          .col {
            flex: 1;
            padding: 0.2rem;
          }
        }
      `}</style>
    </div>
  );
}

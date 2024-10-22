"use client";
import Link from "next/link";
import React from "react";
import OfficeSlider from "@/components/slider/OfficeSlider";

const Office = () => {
  return (
    <section className="section-box box-our-offices">
      <div className="container">
        <div className="row">
          {/* Title remains visible on all devices */}
          <div className="col-12">
            {/* <h4
              className="text-black"
              style={{
                fontWeight: "normal",
                paddingTop: "20px",
                alignItems: "center",
              }}
            >
              Our offices
            </h4> */}
          </div>

          {/* Hide this part on mobile view */}
          <div className="col-lg-4 ">
            <div className="row align-items-end ">
              <div className="col-lg-8 ">
                {/* Any additional content to be hidden on mobile */}
                <h4
                  className="text-black  mt-25 "
                  style={{
                    fontWeight: "normal",
                    paddingTop: "20px",
                    alignItems: "center",
                    paddingLeft: "20px",
                  }}
                >
                  Our Presence
                </h4>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="box-swiper mt-45">
              {/* <OfficeSlider /> */}
              <div className="row">
                <div className="col-lg-6 col-12">
                  <div className="card-features-6">
                    <div className="card-image">
                      {/* <img
                        src="/assets/imgs/page/about/london.svg"
                        alt="Nivia"
                      /> */}
                    </div>
                    <div className="card-info">
                      <h5 className="mb-12 text-black">Navi Mumbai</h5>
                      <p className="mb-12 text-md text-black">
                        Shop No. 1, Plot No. 1D, Sector 1, Airoli, Navi Mumbai,
                        Maharashtra 400708
                      </p>
                      <p className="text-md text-black mb-30">
                        info@zylivo.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-12">
                  <div className="card-features-6">
                    <div className="card-image">
                      {/* <img
                        src="/assets/imgs/page/about/paris.png"
                        alt="Nivia"
                      /> */}
                    </div>
                    <div className="card-info">
                      <h5 className="mb-12 text-black">Mumbai</h5>
                      <p className="mb-12 text-md text-black">
                        63/7 Pratap Nagar Road, Bhandup (W) , Mumbai - 400078
                      </p>
                      <p className="text-md text-black mb-30">
                        info@zylivo.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-12">
                  <div className="card-features-6">
                    <div className="card-image">
                      {/* <img
                        src="/assets/imgs/page/about/osaka.png"
                        alt="Nivia"
                      /> */}
                    </div>
                    <div className="card-info">
                      <h5 className="mb-12 text-black">Osaka</h5>
                      <p className="mb-12 text-md text-black">
                        4517 Washington Ave. Manchester, Kentucky 39495
                      </p>
                      <p className="text-md text-black mb-30">
                        Hours: 8:00 - 17:00, Mon - Sat
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-12">
                  <div className="card-features-6">
                    <div className="card-image">
                      {/* <img
                        src="/assets/imgs/page/about/mumbai.png"
                        alt="Nivia"
                      /> */}
                    </div>
                    <div className="card-info">
                      <h5 className="mb-12 text-black">Mumbai</h5>
                      <p className="mb-12 text-md text-black">
                        4517 Washington Ave. Manchester, Kentucky 39495
                      </p>
                      <p className="text-md text-black mb-30">
                        Hours: 8:00 - 17:00, Mon - Sat
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS styling for mobile view */}
      <style jsx>{`
        /* Hide specific content for screens smaller than 768px */
        @media (max-width: 768px) {
          .hide-on-mobile {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Office;

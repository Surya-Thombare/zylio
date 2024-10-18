'use client'
import Link from "next/link";
import React from "react";
import OfficeSlider from "@/components/slider/OfficeSlider";
const Office = () => {
  return (
    <section className="section-box box-our-offices">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-8">
            <h2 className="text-black ">Our offices </h2>
          </div>
          
        </div>
        <div className="box-swiper mt-45">
          <div className="swiper-container swiper-group-1">
            {/* <OfficeSlider /> */}
            <div className="row">
                        <div className="col-lg-4">
                            <div className="card-features-6">
                                <div className="card-image"> <img src="/assets/imgs/page/about/london.svg" alt="Nivia" /></div>
                                <div className="card-info">
                                    <h5 className="mb-12 text-black">London</h5>
                                    <p className="mb-12 text-md text-black">4517 Washington Ave. Manchester,
                                        Kentucky 39495</p>
                                    <p className="text-md text-black mb-30">Hours: 8:00 - 17:00, Mon - Sat </p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-features-6">
                                <div className="card-image"> <img src="/assets/imgs/page/about/paris.png" alt="Nivia" /></div>
                                <div className="card-info">
                                    <h5 className="mb-12 text-black">Paris</h5>
                                    <p className="mb-12 text-md text-black">4517 Washington Ave. Manchester,
                                        Kentucky 39495</p>
                                    <p className="text-md text-black mb-30">Hours: 8:00 - 17:00, Mon - Sat </p>
                                  
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4">
                            <div className="card-features-6">
                                <div className="card-image"> <img src="/assets/imgs/page/about/osaka.png" alt="Nivia" /></div>
                                <div className="card-info">
                                    <h5 className="mb-12  text-black">Osaka</h5>
                                    <p className="mb-12 text-md text-black">4517 Washington Ave. Manchester,
                                        Kentucky 39495</p>
                                    <p className="text-md text-black mb-30">Hours: 8:00 - 17:00, Mon - Sat </p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-features-6">
                                <div className="card-image"> <img src="/assets/imgs/page/about/mumbai.png" alt="Nivia" /></div>
                                <div className="card-info">
                                    <h5 className="mb-12  text-black">Mumbai</h5>
                                    <p className="mb-12 text-md text-black">4517 Washington Ave. Manchester,
                                        Kentucky 39495</p>
                                    <p className="text-md text-black mb-30">Hours: 8:00 - 17:00, Mon - Sat </p>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Office;

import Link from "next/link";

export default function Footer4() {
  return (
    <>
      <footer className="footer footer-style-3 footer-style-4">
        <div className="container">
          <div
            className="row align-items-center justify-content-center "
            // style={{ padding: "70px" }}
          >
            {/* Footer links and sections */}
            <div className="col-lg-11 col-md-9 col-sm-12">
              <div className="row">
                {/* About section */}

                <div className="col-lg-3 col-md-6 mb-30 alig-items-center ">
                  <h5 className="neutral-0 mb-10 text-18-semibold neutral-0">
                    About
                  </h5>
                  <ul className="menu-footer">
                    <li>
                      <a href="#">Company</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">Press media</a>
                    </li>
                    <li>
                      <a href="#">History</a>
                    </li>
                  </ul>
                </div>

                {/* Services section */}
                <div className="col-lg-3 col-md-6 mb-30">
                  <h5 className="neutral-0 mb-10 text-18-semibold neutral-0">
                    Services
                  </h5>
                  <ul className="menu-footer">
                    <li>
                      <a href="#">IT Consultancy</a>
                    </li>
                    <li>
                      <a href="#">Data Security</a>
                    </li>
                    <li>
                      <a href="#">Business Reform</a>
                    </li>
                    <li>
                      <a href="#">Firewall Advance</a>
                    </li>
                  </ul>
                </div>

                {/* Resources section */}
                <div className="col-lg-3 col-md-6 mb-30">
                  <h5 className="neutral-0 mb-10 text-18-semibold neutral-0">
                    Resource
                  </h5>
                  <ul className="menu-footer">
                    <li>
                      <a href="#">Community</a>
                    </li>
                    <li>
                      <a href="#">Our Blog</a>
                    </li>
                    <li>
                      <a href="#">Forums</a>
                    </li>
                    <li>
                      <a href="#">Meetups</a>
                    </li>
                  </ul>
                </div>

                {/* Support section */}
                <div className="col-lg-3 col-md-6 mb-30">
                  <h5 className="neutral-0 mb-10 text-18-semibold neutral-0">
                    Support
                  </h5>
                  <ul className="menu-footer">
                    <li>
                      <a href="#">Forum Support</a>
                    </li>
                    <li>
                      <a href="#">Help FAQ</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Follow Us section */}
            {/* <div className="col-lg-3 col-md-4 col-xs-6 text-start text-md-end"></div> */}
          </div>

          {/* Footer bottom with logo and copyright */}
          <div className="footer-bottom mt-0">
            <div className="row align-items-center">
              <div className="col-md-6 text-md-start text-center">
                <img alt="Zylivo" src="/assets/imgs/template/logo.svg" />
                <p className="text-sm neutral-600">
                  Copyright © 2023 Nivia. All rights reserved.
                </p>
                <a href="#">Privacy Policy</a> |<a href="#">Terms Conditions</a>
              </div>
              <div className="col-md-6 text-md-end text-center">
                <div className="menu-bottom-footer">
                  <div className="text-start d-inline-block mt-30">
                    <p className="text-lg title-follow neutral-0">Follow us</p>
                    <div className="box-socials-footer">
                      <a className="icon-socials icon-facebook" href="#">
                        <img
                          alt="Facebook"
                          src="/assets/imgs/template/icons/fb.svg"
                        />
                      </a>
                      <a className="icon-socials icon-linkedin" href="#">
                        <img
                          alt="LinkedIn"
                          src="/assets/imgs/template/icons/in.svg"
                        />
                      </a>
                      <a className="icon-socials icon-twitter" href="#">
                        <img
                          alt="Twitter"
                          src="/assets/imgs/template/icons/tw.svg"
                        />
                      </a>
                      <a className="icon-socials icon-behance" href="#">
                        <img
                          alt="Behance"
                          src="/assets/imgs/template/icons/be.svg"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional CSS for styling */}
        <style jsx>{`
          .menu-footer li {
            list-style: none;
            margin-bottom: 10px;
          }
          .menu-footer li a {
            color: #b0b0b0;
            text-decoration: none;
          }
          .menu-footer li a:hover {
            color: #fff;
          }
          .title-follow {
            color: #fff;
            margin-bottom: 15px;
          }
          .box-socials-footer a {
            margin-right: 10px;
            display: inline-block;
          }
          .footer-bottom {
            border-top: 1px solid #444;
            padding-top: 20px;
            margin-top: 20px;
          }
          .menu-bottom-footer a {
            color: #b0b0b0;
            margin-left: 10px;
            text-decoration: none;
          }
          .menu-bottom-footer a:hover {
            color: #fff;
          }
        `}</style>
      </footer>
    </>
  );
}

import React from "react";

import "./footer.scss";
import bg from './l.png';


const Footer = () => {
  return (
    <footer
      className="footer bgImg bgImgFixed"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container">
        <div className="footerInfo">
          <div className="footerDetails">
            <h1>Services</h1>
            <a href="#home">
              <p>Specialists</p>
            </a>
            <a href="#menu">
              <p>Hospitals</p>
            </a>
          </div>
          <div className="footerDetails">
            <h1>Information</h1>
            <a href="#contact">
              <p>Terms of services</p>
            </a>
            <a href="#home">
              <p>Contact us</p>
            </a>
          </div>
        </div>
        <p className="license">copyright 2024 &#169; Healthpal advisor</p>
      </div>
    </footer>
  );
};

export default Footer;

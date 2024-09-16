import React from "react";
import "./about.scss";
import bg from "./g.jpg";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row">
          <div className="aboutContainer">
            <div
              style={{ backgroundImage: `url(${bg})` }}
              className="aboutContainerImg bgImg"
            ></div>

            <div className="aboutContainerDetails">
              <h1>
                <span className="colorGrey">Welcome</span> to your Interactive Health  <span className="colorGrey"> Exploration</span>
              </h1>
              <p>
              Let's embark on a conversational journey to better understand and manage your well-being.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

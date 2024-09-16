import React from "react";

import "./home.scss";

const Home = () => {
  return (
    <section id="home" className="home">
      <video
        className="homeVideoIntro"
        autoPlay
        muted
        loop
      >
        <source src="assets/home-intro.mp4" type="video/mp4" />
        Your browser is not supported
      </video>
      <div className="homeDetails">
        <div className="container">
          <div className="row">
            <div className="slogan">
              <h1>HealthPal</h1>
              <h2> Advisor</h2>
              <p>Early Detection,Better Management !</p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

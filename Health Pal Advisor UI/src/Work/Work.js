import React from "react";
import "./Work.scss";
import bg from "./d.jpg";

const Work = () => {
  return (
    <section
      id="work"
      className="foodMenu bgImg bgImgFixed"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container">
        {/* Content from Testimonial component */}
        <div className="testimonialsHeaderBackground">
        <h1 className="testimonialsHeader">How It Works !
        <br />
        Enter your health preferences and embark on a wellness journey tailored to your unique medical needs.
<br />
Enter your details to receive the best specialist and hospitals your needs.</h1>
</div>
        <div className="testimonialsAll">
          <div className="workdetail">
            <img className="bgImg" src="./assets/user/a.jpg" alt="" />
            <h1>Personal health preferences</h1>
            <p>
            Pick your specialist easily.
            </p>
          </div>

          <div className="workdetail">
            <img className="bgImg" src="./assets/user/b.jpg" alt="" />
            <h1>Enter your report details</h1>
            <p>
            Enter your report details to find youre a diabetic patient.
            </p>
          </div>

          <div className="workdetail">
            <img className="bgImg" src="./assets/user/c.jpg" alt="" />
            <h1>Best Reply</h1>
            <p>
            Best Personal health to your request.
            </p>
          </div>
        </div>
      </div>
      <div className="spacer"></div>
    </section>
  );
};

export default Work;


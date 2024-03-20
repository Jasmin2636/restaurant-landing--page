import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading"><h1>About</h1></p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
        A good diet helps to focus, concentrate and think better. It helps to strengthen muscles, improve skin, fight infections, build the immune system, and control body weight.
        </p>
        <p className="primary-text">
        Reducing the consumption of sugary and fatty foods helps the body build resistance and maintain an appropriate weight.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
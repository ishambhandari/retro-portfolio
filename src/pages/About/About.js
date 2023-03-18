import React from "react";
import { Link } from "react-scroll";
import Line from "../../components/Line/Line";
import "./about.css";

const About = () => {
  return (
    <div id="aboutPage">
      <h1 className="home-container">
        {" "}
        <span style={{ color: "#82A0C2", paddingRight: "10px" }}>#</span>About
        Me
      </h1>
      <div className="home-container">
        <div className="nes-container with-title is-centered">
          <p className="title">About Me</p>
          <div style={{ textAlign: "justify" }}>
            Hello, and welcome to my website! My name is Isham Bhandari, and I'm a Master's student at the University of Aberdeen. I'm currently seeking employment opportunities, so if you have any leads or would like to get in touch, please don't hesitate to contact me via email. Thank you for visiting my website!
          </div>

          <a
            class="nes-btn resume"
            target="__blank"
            href="https://drive.google.com/file/d/1sUzOrB6VSSx7FHNNLXqrBH1NxvFKJyIT/view?usp=share_link">
            View Resume
          </a>
        </div>
      </div>
      <Line />
    </div>
  );
};
export default About;

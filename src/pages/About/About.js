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
            Hello! I am Isham Bhandari, a software developer currently living in
            Kathmandu, Nepal. I am really interested in computers and
            technologies. I used to work for a company called innovate tech as a
            mobile developer. I got the opportuniy to work on a popular
            education platform, My second teacher. Currently, I am applying to
            universities to pursue a master's degree.
          </div>

          <div style={{ textAlign: "justify", marginTop: "15px" }}>
            Apart from computers, I spend some of my free time reading books
            especially classic literature.
          </div>
          <a
            class="nes-btn resume"
            target="__blank"
            href="https://drive.google.com/file/d/1YXruzYCe_XFUqcjMb1EuOouI6XZlGfDA/view?usp=sharing"
          >
            View Resume
          </a>
        </div>
      </div>
      <Line />
    </div>
  );
};
export default About;

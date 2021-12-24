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
            Kathmandu, Nepal. I was never good at school, I am really just
            interested in computers and technology. I used to work for a company
            called innovate tech as a mobile developer. I got the opportuniy to
            work on a popular education platform, My second teacher. Currently,
            I am applying to universities to pursue masters degree.
          </div>

          <div style={{ textAlign: "justify", marginTop: "2rem" }}>
            Apart from computers, I am into classic literature especially
            Russian classics. I am also interested in history and philosophy.
          </div>
          <a class="nes-btn resume" href="#">
            View Resume
          </a>
        </div>
      </div>
      <Line />
    </div>
  );
};
export default About;

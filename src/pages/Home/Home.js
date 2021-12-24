import React from "react";
import Line from "../../components/Line/Line";
// import retroman from "../../Assets/retroman.jpg";
// import { Typewriter } from "react-typewriting-effect";
import gitlab from "../../Assets/gitlab.png";
import "react-typewriting-effect/dist/index.css";
import "./home.css";
const Home = () => {
  React.useEffect(() => {
    document.body.style.backgroundColor = "#faeee0";
  }, []);
  return (
    <div style={{ marginTop: "10%" }} id="homePage">
      <div className="home-container">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <p className="nes-balloon from-left nes-pointer ptag">
            <div className="ttag">
              Welcome to my personal website! Please scroll or navigate to
              continue.
              {/* <Typewriter */}
              {/*   string="" */}
              {/*   delay={40} */}
              {/*   stopBlinkinOnComplete */}
              {/* /> */}
            </div>
          </p>

          <div
            style={{
              position: "absolute",
              right: "0",
              marginRight: ".5rem",
              top: "10",
            }}
          >
            <div className="animated-icon">
              <div className="nes-balloon from-right nes-pointer  atag">
                <p>Retro, Just for the vibe</p>
              </div>
              <i class="nes-octocat animate tss"></i>
            </div>
          </div>
        </div>
        <div className="one-row">
          <div className="icon-container">
            <a href="https://www.github.com/ishambhandari" target="__blank">
              <i class="nes-icon github is-large " />
            </a>

            <a href="https://www.gitlab.com/ishambhandari" target="__blank">
              <img
                src={gitlab}
                alt="gitlab"
                style={{
                  width: "80px",
                  height: "80px",
                  transform: "translateX(-10%)",
                  marginTop: "10px",
                }}
                className="image-rendering"
              />
            </a>
          </div>

          <div className="icon-container-sm">
            <a href="https://www.github.com/ishambhandari" target="__blank">
              <i class="nes-icon github is-medium" />
            </a>

            <a href="https://www.gitlab.com/ishambhandari" target="__blank">
              <img
                src={gitlab}
                alt="gitlab"
                style={{
                  width: "70px",
                  height: "70px",
                  transform: "translateY(-12%)",
                }}
              />
            </a>
          </div>
          {/* <img src={retroman} alt="Retro man" className="retroimg" /> */}
        </div>
      </div>
      <Line />
    </div>
  );
};
export default Home;

// <h1 className="heading">Isham Bhandari</h1>

import React from "react";
import Line from "../../components/Line/Line";
import retroman from "../../Assets/retroman.jpg";
import { Typewriter } from "react-typewriting-effect";
import "react-typewriting-effect/dist/index.css";
import "./home.css";
const Home = () => {
    return (
        <div style={{ marginTop: "10%" }} id="homePage">
            <div className="home-container">
                <p className="nes-balloon from-left nes-pointer ptag">
                    <Typewriter
                        string="Hello! I am Isham. Please scroll or navigate to continue."
                        delay={40}
                        stopBlinkinOnComplete
                    />
                </p>
                <div className="one-row">
                    <div className="icon-container">
                        <i class="nes-icon github is-large " />
                        <i class="nes-icon linkedin is-large" />
                        <i class="nes-icon instagram is-large" />
                        <i class="nes-icon reddit is-large" />
                    </div>

                    <div className="icon-container-sm">
                        <i class="nes-icon github is-medium" />
                        <i class="nes-icon linkedin is-medium" />
                        <i class="nes-icon instagram is-medium" />
                        <i class="nes-icon reddit is-medium" />
                    </div>
                    <img src={retroman} alt="Retro man" className="retroimg" />
                </div>
            </div>
            <Line />
        </div>
    );
};
export default Home;

// <h1 className="heading">Isham Bhandari</h1>

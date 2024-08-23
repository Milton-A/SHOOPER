import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={require("../Assets/hand_icon.png")} alt="hand-icon" />
          </div>
          <p>collection</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest collections</div>
          <img src={require("../Assets/arrow.png")} alt="arrow-icon" />
        </div>
      </div>
      <div className="hero-right">
        <img src={require("../Assets/hero_image.png")} alt="" />
      </div>
    </div>
  );
}

export default Hero;

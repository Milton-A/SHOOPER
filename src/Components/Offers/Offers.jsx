import React from "react";
import "./Offers.css";

function Offers() {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusise</h1>
        <h1>Offers for You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img
          src={require("../Assets/exclusive_image.png")}
          alt="exclusive-image"
        />
      </div>
    </div>
  );
}

export default Offers;

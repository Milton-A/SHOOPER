import React from "react";
import "./NewsLetter.css";

function NewsLetter() {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Ofeers On Your Email</h1>
      <p>Subscribe to Our newsLetter and stay updated</p>
      <div>
        <input type="email" placeholder="Enter Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default NewsLetter;

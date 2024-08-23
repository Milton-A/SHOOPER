import React from "react";
import "./Breadcrum.css";

function Breadcrum(props) {
  const { product } = props;
  return (
    <div className="breadcrum">
      Home <img src={require("../Assets/breadcrum_arrow.png")} alt="" />
      SHOP <img src={require("../Assets/breadcrum_arrow.png")} alt="" />
      {product.category}
      <img src={require("../Assets/breadcrum_arrow.png")} alt="" />
      {product.name}
      <img src={require("../Assets/breadcrum_arrow.png")} alt="" />
    </div>
  );
}

export default Breadcrum;

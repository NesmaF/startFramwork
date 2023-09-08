/* eslint-disable jsx-a11y/img-redundant-alt */

import React from "react";
import image from "../avataaars.svg"

export default function Home() {
  return (
    <>
      <div className="container home vh-100  ">
        <div className="im m-auto">
          <img src={image} alt="photo"></img>

        </div>
        <h1 className="text-white">START FRAMEWORK</h1>
        <div className="line my-3">
          <div className="line1"></div>
          <i  className="fa-solid fa-star mx-3"></i>
          <div className="line2"></div>
        </div>
        <p className="text-white my-3">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </>
  );
}

import React, { useState } from "react";
import SearchComponent from "../../../utils/SearchComponent";
import "./Banner.css";
import Navbar from "./Navbar";

function Banner() {
  return (
    <div className="homepage_hero_container">
      <Navbar />
      <div className="functionality_container">
        <div className="logo">
          <img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" />
        </div>
        <div className="title">
          <h2>Discover the best food & drinks in Mumbai</h2>
        </div>
        <SearchComponent />
      </div>
    </div>
  );
}

export default Banner;

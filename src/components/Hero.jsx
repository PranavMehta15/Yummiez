import React from "react";
import "./Hero.css";
import logo from "../assets/logo.png"; //
import scooterIcon from "../assets/scooter.png"; //
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <Link to="/">
      <img src={logo} alt="Yummiez Logo" className="top-logo" />
      </Link>
      <div className="hero-text">
        <h1>Crave It? Get Yummiez at Your Doorstep!</h1>
        <p>
          From Dosa to Waffle, We’ve Got It All… with Deals That’ll Drop Your
          Jaw
        </p>
        <img
          src={scooterIcon}
          alt="Scooter Icon"
          style={{
            width: "100px",
            height: "100px",
            margin: "10px auto",
            display: "block",
          }}
        />
      </div>
    </div>
  );
};

export default Hero;

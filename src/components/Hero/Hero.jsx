import React from "react";
import "./Hero.css";
import Header from "../Header/Header";

import circle_two from "../../assets/hero-circle-two.png";
import circle_one from "../../assets/hero-circle-one.png";
import hero_banner from "../../assets/hero-banner.png";
import Heart from "../../assets/heart-rate.svg";
import Calories from "../../assets/calories.svg";

import { motion } from "framer-motion";
import NumberCounter from "number-counter";
const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        {/* The Header */}
        <Header />

        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "178px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>HAWK The Best Fitness Companion</span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Transform Your </span>
            <span>Life</span>
          </div>

          <div>
            <span>Transform your body</span>
          </div>

          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay="4" preFix="+" />
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={800} delay="4" preFix="+" />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={0} delay="4" preFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Register now</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="right-h">
        <img
          src={Heart}
          alt="Heart"
          width="255"
          height="270"
          className="img img1"
        />

        {/* hero images */}
        <img
          src={hero_banner}
          alt="hero_image"
          className="hero-image"
          width="800"
          height="500"
        />

        <img
          src={circle_one}
          alt="hero_image_back1"
          className="circle circle1"
          width="400"
          height="400"
          aria-hidden="true"
        />
        <img
          src={circle_two}
          alt="hero_image_back2"
          className="circle circle2"
          width="400"
          height="400"
          aria-hidden="true"
        />
        {/* Calories */}
        <img
          src={Calories}
          alt="Calories"
          width="348"
          height="224"
          className="img img2"
        />
      </div>
    </div>
  );
};

export default Hero;

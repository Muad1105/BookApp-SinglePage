import React from "react";
import { useGlobalContext } from "./context";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { BiUserVoice } from "react-icons/bi";
import { FcReadingEbook } from "react-icons/fc";

const Hero = () => {
  return (
    <secti on className="hero">
      <div className="hero-center">
        <article className="hero-info">
          <div className="inner-box">
            <FcReadingEbook className="icon-express" />
            <h3>Sell Your E-Book</h3>
            <p>
              We shows only the best websites, portfolios and landing pages
              built completely withy passion, simplicity and creativity.
            </p>
          </div>
          <button className="btn" style={{ padding: "10px", margin: "20px" }}>
            Register
          </button>
        </article>
        <article className="hero-info">
          <div className="inner-box">
            <BiUserVoice className="icon-express" />
            <h3>Engage New Users</h3>
            <p>
              Ebo impresses you with full responsiveness and high customization.
              We did it in combination of very clean and flexible design.
            </p>
          </div>
          <button className="btn" style={{ padding: "10px", margin: "20px" }}>
            Refer users
          </button>
        </article>
        <article className="hero-info">
          <div className="inner-box">
            <HiOutlineSpeakerphone className="icon-express" />
            <h3>Start Your Campaign</h3>
            <p>
              Ebo impresses you with full responsiveness and high customization.
              We did it in combination of very clean and flexible design.
            </p>
            <button className="btn" style={{ padding: "10px", margin: "20px" }}>
              Start now
            </button>
          </div>
        </article>
      </div>
    </secti>
  );
};

export default Hero;

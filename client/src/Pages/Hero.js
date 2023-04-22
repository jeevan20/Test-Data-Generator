import React from "react";
import "./styles/Hero.css";
import TypeWriterEffect from "react-typewriter-effect";
import { Link } from "react-router-dom";

import tableimg from "./tabledata.png";
const Hero = () => {
  return (
    <div className="outerdiv">
      <div className="text">
        <div className="textt">
          Generate Data In
          <TypeWriterEffect
            textStyle={{
              fontFamily: "Poppins",
              color: "black",
              fontWeight: 500,
              fontSize: "1.5em",
            }}
            startDelay={250}
            cursorColor="#3F3D56"
            multiText={["CSV", "XML", "HTML", "SQL", "JSON"]}
            multiTextDelay={1000}
            typeSpeed={120}
          />
          And use in your dream projects
          {/* <button className="btn">Try Now!</button> */}
        </div>
        <button className="button-9">
          <Link to={"/Generator"}>Try Now!</Link>
        </button>
      </div>

      <img src={tableimg} alt="" />
    </div>
  );
};

export default Hero;

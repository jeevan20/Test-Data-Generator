import React from "react";
import Navbar from "./Navbar";
import TypeWriterEffect from "react-typewriter-effect";
import { AiOutlineArrowRight } from "react-icons/ai";
function Header() {
  return (
    <div id="main">
      <Navbar />
      <div className="name">
        <h1>
          Generate Data In
          <span>
            <TypeWriterEffect
              textStyle={{
                fontFamily: "Outfit",
                color: "#4942e4",
              }}
              startDelay={250}
              cursorColor="#4942e4"
              multiText={["CSV", "XML", "HTML", "SQL", "JSON"]}
              multiTextDelay={1000}
              typeSpeed={120}
            />
          </span>
          And use in your dream projects
        </h1>
        <p className="details">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          iusto mollitia ipsam laudantium cum quis esse repellendus tempora
        </p>
        <a href="/generator" className="cv-btn">
          Try now{" "}
          <AiOutlineArrowRight size={15} style={{ marginLeft: "10px" }} />
        </a>
      </div>
    </div>
  );
}

export default Header;

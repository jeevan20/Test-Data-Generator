import React from "react";

function About(props) {
  return (
    <div id="about">
      <div className="about-image ">
        <img src={props.image} alt="" />
      </div>
      <div className="about-text">
        <h2>{props.title}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim earum
          natus quisquam laudantium laboriosam ipsam, quibusdam nihil esse,
          dolores ut aut. Itaque sapiente ratione dignissimos illo expedita,
          earum cum labore?
        </p>
        <a href="/generator" className="cv-btn">
          {props.button}
        </a>
      </div>
    </div>
  );
}

export default About;

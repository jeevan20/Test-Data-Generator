import React from "react";
import "./styles/About.css";
import xmlcsvjson from "./images/xml-csv-json.png";
const About = () => {
  return (
    <div id="about">
      <p className="title">FEATURES</p>
      <div className="wrapper">
        <Card
          img={xmlcsvjson}
          title="Flexible with different data formats"
          desc="Download data in different data export formats"
        />
        <Card
          img={xmlcsvjson}
          title="Flexible with different data formats"
          desc="Download data in different data export formats"
        />
        <Card
          img={xmlcsvjson}
          title="Flexible with different data formats"
          desc="Download data in different data export formats"
        />
      </div>
    </div>
  );
};

function Card(props) {
  return (
    <div className="card">
      <div className="card_body">
        <img src={props.img} alt="" srcset="" />
        <h2 className="card_title">{props.title}</h2>
        <p className="card_description">{props.desc}</p>
      </div>
    </div>
  );
}
export default About;

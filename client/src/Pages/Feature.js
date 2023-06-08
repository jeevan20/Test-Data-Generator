import React from "react";
import FeaturesBox from "./FeaturesBox";
import featureimage from "./images/feature_1.png";
import featureimage1 from "./images/feature_2.png";
import featureimage2 from "./images/feature_3.png";

function Features() {
  return (
    <div id="features">
      <div className="a-container">
        <FeaturesBox
          image={featureimage2}
          title="Flexible Export Formats"
          feature="Generate data in multiple formats effortlessly and Export data in in different formats such as JSON, HTML, CSV, XML, and more with ease "
        />
        <FeaturesBox
          image={featureimage}
          title="Easy-To-Use"
          feature="Intuitive interface for effortless test data generation and Simplify testing processes with  customizable data"
        />
        <FeaturesBox
          image={featureimage1}
          title="Generate Custom Data"
          feature="User Input attributes and specify the number of rows required and it
use GPT-3 MODEL for generating data"
        />
      </div>
    </div>
  );
}

export default Features;

import React from "react";
import CopyToClip from "./CopyToClip";

function CObject(props) {
  let cobject = "";
  let keys = Object.keys(props.data[0]);
  const displayString = JSON.stringify(props.data);

  cobject += `public class Myclass
{\n`;
  for (let index = 0; index < keys.length; index++) {
    cobject += `\tpublic <datatype> ${keys[index]} { get; set; }`;
  }

  cobject += `\n}`;
  cobject += `\n\nstring json=` + displayString;
  cobject += `\nmyclass obj = JsonConvert.DeserializeObject<Myclass>(json);`;

  console.log(cobject);

  return (
    <div>
      <CopyToClip />
      <pre>{cobject}</pre>
    </div>
  );
}

export default CObject;

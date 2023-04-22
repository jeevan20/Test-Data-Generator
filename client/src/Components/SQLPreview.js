import React from "react";
import CopyToClip from "./CopyToClip";
import NoData from "./NoData";

function SQLPreview(props) {
  let sqlquery = "";
  function jsonToSqlInsert(jsonData, tableName) {
    let insertQueries = "";
    let keys = Object.keys(jsonData[0]);
    insertQueries += `INSERT INTO ${tableName} (${keys.join(", ")}) VALUES \n`;
    for (let i = 0; i < jsonData.length; i++) {
      let values = Object.values(jsonData[i]);
      let insertValues = "";

      for (let j = 0; j < values.length; j++) {
        if (typeof values[j] === "string") {
          insertValues += "'" + values[j].replace(/'/g, "''") + "'";
        } else {
          insertValues += values[j];
        }

        if (j !== values.length - 1) {
          insertValues += ", ";
        }
      }

      insertQueries += `\t(${insertValues});\n`;
    }

    return insertQueries;
  }
  if (props.data.length === 0) {
    return <NoData />;
  } else {
    sqlquery = jsonToSqlInsert(props.data, "myTable");
    return (
      <div>
        <CopyToClip stringTocopy={sqlquery} />
        <pre>{sqlquery}</pre>
      </div>
    );
  }
}

export default SQLPreview;

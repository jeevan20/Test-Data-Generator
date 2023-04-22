import React from "react";
import CopyToClip from "./CopyToClip";
import NoData from "./NoData";

function CSVPreview(props) {
  let csvString = ``;
  if (props.data.length === 0) {
    return <NoData />;
  } else {
    const headers = Object.keys(props.data[0]);
    const csvRows = [];

    // Create header row
    csvRows.push(headers.join(","));

    // Create rows for each object in JSON data
    props.data.forEach((obj) => {
      const values = headers.map((header) => obj[header]);
      csvRows.push(values.join(","));
    });

    // Join rows with newline character to create final CSV string
    csvString = csvRows.join(`\n`);
    return (
      <>
        <CopyToClip stringTocopy={csvString} />
        <pre>{csvString}</pre>
      </>
    );
  }
}

export default CSVPreview;

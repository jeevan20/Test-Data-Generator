import React from "react";
import CopyToClip from "./CopyToClip";
import NoData from "./NoData";

function JsonPreview(props) {
  const jsonString = JSON.stringify(props.data, null, 2);
  if (props.data.length === 0) {
    return <NoData />;
  } else {
    return (
      <>
        <CopyToClip stringTocopy={jsonString} />
        <pre>{jsonString}</pre>
      </>
    );
  }
}

export default JsonPreview;

import React, { useState, useEffect } from "react";
import "./CopyToclip.css";
function CopyToClip(props) {
  const [copySuccess, setCopySuccess] = useState("");
  useEffect(() => {
    if (copySuccess) {
      const timer = setTimeout(() => {
        setCopySuccess("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [copySuccess]);
  const copyToClipboard = (str) => {
    const el = document.createElement("textarea");
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopySuccess("Copied to clipboard!");
  };

  return (
    <div className="CopyToClip">
      <p>{copySuccess}</p>
      <button onClick={() => copyToClipboard(props.stringTocopy)}>📋</button>
    </div>
  );
}

export default CopyToClip;

import React from "react";
import CopyToClip from "./CopyToClip";
import NoData from "./NoData";

function HTMLPreview(props) {
  if (props.data.length === 0) {
    return <NoData />;
  } else {
    let tableHtml = `<table>
    <thead>\n\t<tr>
    `;
    for (let key in props.data[0]) {
      tableHtml += `\t<th>${key}</th>\n`;
    }
    tableHtml += `\t</tr>
    </thead>
    <tbody>\n`;

    props.data.forEach((item) => {
      tableHtml += `\t<tr>\n`;
      for (let key in item) {
        tableHtml += `\t\t<td>${item[key]}</td>\n`;
      }

      tableHtml += `\t</tr>\n`;
    });

    tableHtml += `    </tbody>
</table>`;
    return (
      <>
        <CopyToClip stringTocopy={tableHtml} />
        <pre>{tableHtml}</pre>
      </>
    );
  }
}

export default HTMLPreview;

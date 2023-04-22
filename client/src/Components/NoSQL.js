import React from "react";
import CopyToClip from "./CopyToClip";
import NoData from "./NoData";

function NoSQL(props) {
  if (props.data.length === 0) {
    return <NoData />;
  } else {
    const displayString = JSON.stringify(props.data);
    let nosqlQuery =
      `const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
  const collection = client.db("<database>").collection("<collection>");
  const doc =` +
      displayString +
      `;
      
collection.insertOne(doc, function(err, res) {
    if (err) throw err;
    console.log("documents inserted");
    client.close();
  });
});
`;
    return (
      <div>
        <CopyToClip stringTocopy={nosqlQuery} />
        <pre>{nosqlQuery}</pre>
      </div>
    );
  }
}

export default NoSQL;

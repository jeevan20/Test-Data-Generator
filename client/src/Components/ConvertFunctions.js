export function ToCObject(data) {
  try {
    if (Object.keys(data).length === 0) {
      return "";
    }
    let cobject = "";
    let keys = Object.keys(data[0]);
    const displayString = JSON.stringify(data);

    cobject += `public class Myclass
{\n`;
    for (let index = 0; index < keys.length; index++) {
      cobject += `\tpublic <datatype> ${keys[index]} { get; set; }`;
    }

    cobject += `\n}`;
    cobject += `\n\nstring json=` + displayString;
    cobject += `\nmyclass obj = JsonConvert.DeserializeObject<Myclass>(json);`;

    return cobject;
  } catch (error) {
    return false;
  }
}

// CSV format

export function ToCSV(data) {
  try {
    if (Object.keys(data).length === 0) {
      return "";
    }
    let csvString = ``;

    const headers = Object.keys(data[0]);
    const csvRows = [];

    // Create header row
    csvRows.push(headers.join(","));

    // Create rows for each object in JSON data
    data.forEach((obj) => {
      const values = headers.map((header) => obj[header]);
      csvRows.push(values.join(","));
    });
    // Join rows with newline character to create final CSV string
    csvString = csvRows.join(`\n`);
    return csvString;
  } catch (error) {
    return false;
  }
}

//HTML format

export function ToHTML(data) {
  try {
    if (Object.keys(data).length === 0) {
      return "";
    }
    let tableHtml = `<table>
    <thead>\n\t<tr>
    `;
    for (let key in data[0]) {
      tableHtml += `\t<th>${key}</th>\n`;
    }
    tableHtml += `\t</tr>
    </thead>
    <tbody>\n`;

    data.forEach((item) => {
      tableHtml += `\t<tr>\n`;
      for (let key in item) {
        tableHtml += `\t\t<td>${item[key]}</td>\n`;
      }

      tableHtml += `\t</tr>\n`;
    });

    tableHtml += `    </tbody>
</table>`;
    return tableHtml;
  } catch (error) {
    return false;
  }
}

//JSON format

export function ToJSON(data) {
  try {
    if (Object.keys(data).length === 0) {
      return "";
    }
    const jsonString = JSON.stringify(data, null, 2);
    return jsonString;
  } catch (error) {
    return false;
  }
}

//NOSQL format

export function ToNoSQL(data) {
  try {
    if (Object.keys(data).length === 0) {
      return "";
    }
    const displayString = ToJSON(data);
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
    return nosqlQuery;
  } catch (error) {
    return false;
  }
}

//TOSQL format

export function ToSQL(data) {
  try {
    if (Object.keys(data).length === 0) {
      return "";
    }
    let sqlquery = "";
    function jsonToSqlInsert(jsonData, tableName) {
      let insertQueries = "";
      let keys = Object.keys(jsonData[0]);
      insertQueries += `INSERT INTO ${tableName} (${keys.join(
        ", "
      )}) VALUES \n`;
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

    sqlquery = jsonToSqlInsert(data, "myTable");
    return sqlquery;
  } catch (error) {
    return false;
  }
}

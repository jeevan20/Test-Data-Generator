import { useState } from "react";
import axios from "axios";
import exportFromJSON from "export-from-json";
import Navbar from "../Components/Navbar";
import SQLPreview from "../Components/SQLPreview";
import HTMLPreview from "../Components/HTMLPreview";
import JsonPreview from "../Components/JsonPreview";
import CSVPreview from "../Components/CSVPreview";
import NoSQL from "../Components/NoSQL";
import LoadingSpinner from "../Components/Loading";
import CObject from "../Components/CObject";
// import data from "./Components/data"; // test data

function Generator() {
  const [numRow, setNoRow] = useState(5); // no of Row for dataset
  const [inputs, setInputs] = useState([""]); // inputvalue of Columns
  const [csvObject, setCSVObject] = useState([]); // to store JSON object from server
  const base_url = "http://localhost:3001";
  // preview panel state for loading and response
  const [isLoading, setIsLoading] = useState(false);

  // To Request data From server
  const handleSubmit = async () => {
    const prompt = inputs
      .map((value) => `"${value}"`)
      .reduce((accumulator, currentValue) => `${accumulator}, ${currentValue}`);

    if (prompt.length === 2) {
      alert("Add some rows in the grid and submit.");
      return;
    }
    // if (numRow === 0) {
    //   alert("Add No of rows and submit.");
    //   return;
    // }
    setIsLoading(true);
    // setCSVObject(data);
    await axios
      .post(base_url + "/chatgpt", { prompt, numRow })
      .then((res) => {
        // console.log(res.data);
        // console.log(typeof res.data);
        setCSVObject(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        return;
      });
  };

  // to Handle Input changes in input feilds(Columns)
  const handleInputChange = (index, event) => {
    const values = [...inputs];
    values[index] = event.target.value;
    setInputs(values);
  };
  const handleAddInput = () => {
    const values = [...inputs];
    values.push("");
    setInputs(values);
  };
  const handleRemoveInput = (index) => {
    const values = [...inputs];
    values.splice(index, 1);
    setInputs(values);
  };

  // Attibutes of rows
  // const arrOfheader = inputs.map((value, index) => {
  //   return { label: value, key: value };
  // });

  // to handle export file types
  const [selectedOptionForexport, setSelectedOptionForexport] = useState("");
  const handleOptionChangeForexport = (event) => {
    setSelectedOptionForexport(event.target.value);
  };
  // to handle file export
  const exportFile = () => {
    if (csvObject.length === 0) {
      alert("Add some rows in the grid and submit.");
    } else {
      var exportType;
      switch (selectedOptionForexport) {
        case "txt":
          exportType = exportFromJSON.types.txt;
          break;
        case "json":
          exportType = exportFromJSON.types.json;
          break;
        case "csv":
          exportType = exportFromJSON.types.csv;
          break;
        case "xls":
          exportType = exportFromJSON.types.xls;
          break;
        case "xml":
          exportType = exportFromJSON.types.xml;
          break;
        case "html":
          exportType = exportFromJSON.types.html;
          break;
        default:
          break;
      }

      const fileName = "download";

      exportFromJSON({
        data: csvObject,
        fileName: fileName,
        exportType: exportType,
      });
    }
  };

  // to handle preview file types
  const [selectedOptionForPreview, setSelectedOptionForPreview] =
    useState("json");
  const handleOptionChangeForPreview = (event) => {
    setSelectedOptionForPreview(event.target.value);
  };

  // to handle preview component for different file types
  const renderComponent = () => {
    switch (selectedOptionForPreview) {
      case "json":
        return <JsonPreview data={csvObject} />;
      case "csv":
        return <CSVPreview data={csvObject} />;
      case "html":
        return <HTMLPreview data={csvObject} />;
      case "sql":
        return <SQLPreview data={csvObject} />;
      case "nosql":
        return <NoSQL data={csvObject} />;
      case "txt":
        return <CSVPreview data={csvObject} />;
      case "C#":
        return <CObject data={csvObject} />;
      default:
        return null;
    }
  };
  return (
    <div className="Generator" id="Generator">
      <Navbar />
      <div className="panel">
        <div className="generator-panel">
          <div className="add-attribute">
            <p className="attribute-text">Attributes</p>
            <p className="attribute-text">Type</p>
          </div>
          <div className="input-option">
            {inputs.map((input, index) => (
              <div key={index} className="attribute-input">
                <div className="input-fields">
                  <input
                    type="text"
                    placeholder="Enter column name"
                    value={input}
                    onChange={(event) => handleInputChange(index, event)}
                    className="input-attribute"
                  />
                  <select className="select-attribute">
                    <option value="string">Select Datatype</option>
                    <option value="string">string</option>
                    <option value="int">int</option>
                    <option value="float">float</option>
                    <option value="bool">bool</option>
                  </select>
                </div>

                <button
                  type="button"
                  className="delete-field"
                  onClick={() => handleRemoveInput(index)}
                >
                  X
                </button>
              </div>
            ))}
          </div>

          <div className="attributes-submit">
            <div className="add-field-div">
              Add Row
              <button
                type="button"
                onClick={handleAddInput}
                className="add-field-btn"
              >
                +
              </button>
            </div>
            <div className="row_input">
              <input
                type="number"
                placeholder="No of Rows(5-50)"
                className="input-attribute-count"
                onChange={(e) => {
                  setNoRow(e.target.value);
                }}
              />
              <button className="attributes-submit-btn" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
          <div className="export-panel">
            <select
              value={selectedOptionForexport}
              onChange={handleOptionChangeForexport}
              className="export-option"
            >
              <option value="txt" defaultValue="txt">
                Select an File type
              </option>
              <option value="txt">TXT</option>
              <option value="json">JSON</option>
              <option value="csv">CSV</option>
              <option value="xls">XLS</option>
              <option value="xml">XML</option>
            </select>
            <button
              onClick={exportFile}
              className="export-btn"
              // disabled={csvObject.length === 0}
            >
              Export File
            </button>
          </div>
        </div>
        <div className="preview-panel">
          <div className="preview_options">
            <select
              value={selectedOptionForPreview}
              onChange={handleOptionChangeForPreview}
              className="export-option"
            >
              {/* <option>Select an File type</option> */}
              <option value="json"> JSON</option>
              <option value="csv">CSV</option>
              <option value="html">HTML</option>
              <option value="sql">SQL</option>
              <option value="nosql">NOSQL</option>
              <option value="C#">C#</option>
              <option value="txt">TXT</option>
            </select>
          </div>
          {isLoading && <LoadingSpinner />}
          {!isLoading && (
            <div className="preview_component">{renderComponent()}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Generator;

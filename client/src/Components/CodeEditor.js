import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atomOneDarkReasonable,
  atomOneLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FiClipboard } from "react-icons/fi";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

import Loading from "./Loading";
import {
  ToCObject,
  ToCSV,
  ToHTML,
  ToJSON,
  ToNoSQL,
  ToSQL,
} from "./ConvertFunctions";
import "./styles/CodeEditor.css";
import NoData from "./NoData";

function CodeEditor(props) {
  // datastring to print result
  var dataString = "";

  // theme of editor
  const [theme, setTheme] = useState(atomOneLight);
  const themeToggler = () => {
    theme === atomOneLight
      ? setTheme(atomOneDarkReasonable)
      : setTheme(atomOneLight);
  };

  // to handle preview file types
  const [selectedOption, setSelectedOption] = useState("json");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // to handle preview component for different file types
  const renderComponent = (option) => {
    switch (option) {
      case "json":
        dataString = ToJSON(props.Object);
        break;
      case "csv":
        dataString = ToCSV(props.Object);
        break;
      case "html":
        dataString = ToHTML(props.Object);
        break;
      case "sql":
        dataString = ToSQL(props.Object);
        break;
      case "nosql":
        dataString = ToNoSQL(props.Object);
        break;
      case "txt":
        dataString = ToCSV(props.Object);
        break;
      case "C#":
        dataString = ToCObject(props.Object);
        break;
      default:
        return "";
    }
    if (!dataString) {
      alert("Server is Busy and try again later...");
      return "";
    }
    return dataString;
  };
  const [copy, setCopy] = useState(false);
  return (
    <div className="textEdit">
      <div className="Editortitle">
        <div>
          <select value={selectedOption} onChange={handleSelectChange}>
            <option value="json">JSON</option>
            <option value="csv">CSV</option>
            <option value="html">HTML</option>
            <option value="sql">SQL</option>
            <option value="nosql">NoSQL</option>
            <option value="txt">TXT</option>
            <option value="C#">C#</option>
          </select>
        </div>
        <div className="mode-copy">
          <div>
            {/* theme true - dark mode */}
            {props.Object.length !== 0 && (
              <button onClick={themeToggler}>
                {theme === atomOneLight ? (
                  <MdOutlineDarkMode size={20} />
                ) : (
                  <MdOutlineLightMode size={20} />
                )}
              </button>
            )}
          </div>
          {copy ? (
            <button>
              <IoMdCheckmark className="clipboard" size={20} /> Copied!
            </button>
          ) : (
            <button
              onClick={() => {
                console.log();
                navigator.clipboard.writeText(dataString);
                setCopy(true);
                setTimeout(() => {
                  setCopy(false);
                }, 3000);
              }}
            >
              <FiClipboard className="clipboard" /> Copy code
            </button>
          )}
        </div>
      </div>

      {!props.loading && (
        <div className="syntax-highlighter">
          {props.Object.length !== 0 ? (
            <SyntaxHighlighter
              language={selectedOption}
              style={theme}
              // style={atomOneDarkReasonable}
              // style={atomOneLight}
              showLineNumbers={true}
              customStyle={{
                padding: "15px 5px",
                margin: "0px",
                fontSize: "1rem",
                overflowBlock: "scroll",
              }}
              // wrapLongLines={true}
            >
              {!props.loading && renderComponent(selectedOption)}
            </SyntaxHighlighter>
          ) : (
            <NoData />
          )}
        </div>
      )}
      {props.loading && <Loading />}
    </div>
  );
}

export default CodeEditor;

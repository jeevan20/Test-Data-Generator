import React from "react";
import "./styles/Modal.css";
const Modal = (props) => {
  return (
    <div className="modalBackground" id="modal">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          {" "}
          <button onClick={props.toggle}>X</button>
        </div>
        <div className="title">
          <h1>Found Bugs??</h1>
        </div>
        <div className="body">
          <p>
            Sorry for the inconvineance. To improve our service please report
            your bug to us
          </p>
        </div>
        <div className="footer">
          <button id="cancelBtn" onClick={props.toggle}>
            Report Bug
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

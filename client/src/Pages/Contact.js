import React from "react";
import "./styles/Contact.css";
const Contact = () => {
  return (
    <div className="contact_con" id="contact">
      <div className="content_container">
        <div className="topic">Send us a message</div>
        <form action="" className="feedback">
          <div className="input-box">
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Enter your email" />
          </div>
          <div className="input-box message-box">
            <textarea></textarea>
          </div>
          <div className="button">
            <button className="button-9">Send Now</button>
          </div>
        </form>
      </div>
      <div className="social_media">
        <div className="social">
          <a href="/generator" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
        <div className="social">
          <a href="/generator" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
        <div className="social">
          <a href="/generator" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-discord"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <div id="contactPage">
      <div className="home-container">
        <h1>Contact Me </h1>
        <div className="nes-container with-title is-centered contact-me">
          <div className="nes-field">
            <label for="name_field" className="label-contact">
              Your name
            </label>
            <input
              type="text"
              id="name_field"
              className="nes-input input-box"
              placeholder="Your name"
            />
          </div>
          <div className="nes-field">
            <label for="name_field" className="label-contact">
              Email
            </label>
            <input
              type="text"
              id="name_field"
              className="nes-input input-box"
              placeholder="example@example.com"
            />
          </div>
          <div className="nes-field">
            <label for="name_field" className="label-contact">
              Your Message
            </label>
            <textarea
              id="textarea_field"
              className="nes-textarea"
              placeholder="Your message here.."
            ></textarea>
            <button type="button" className="nes-btn is-primary button">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;

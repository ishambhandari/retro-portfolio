import React from 'react';
import './contact.css';
const Contact = () => {
  return (
    <div>
      <div class="home-container">
        <h1>Contact Me </h1>
        <div className="nes-container with-title is-centered contact-me">
          <div class="nes-field">
            <label for="name_field" className="label-contact">
              Your name
            </label>
            <input
              type="text"
              id="name_field"
              class="nes-input input-box"
              placeholder="Your name"
            />
          </div>
          <div class="nes-field">
            <label for="name_field" className="label-contact">
              Email
            </label>
            <input
              type="text"
              id="name_field"
              class="nes-input input-box"
              placeholder="example@example.com"
            />
          </div>
          <div class="nes-field">
            <label for="name_field" className="label-contact">
              Your Message
            </label>
            <textarea
              id="textarea_field"
              class="nes-textarea"
              placeholder="Your message here.."></textarea>
            <button type="button" class="nes-btn is-primary button">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;

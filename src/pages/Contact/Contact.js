import React from "react";
import Modal from "../../components/Modal/Modal";
import axios from "axios";
import { envConfig } from "../../config/index.js";
import error from "../../Assets/error.png";
import success from "../../Assets/success.jpg";
import { ModalContext } from "../../Context/ModalState";
import loadinganimation from "../../Assets/loading.gif";
import "./contact.css";
const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [thisShowModal, setThisShowModal] = React.useState(false);
  const [validation, setValidation] = React.useState(false);
  const [emailLoading, setEmailLoading] = React.useState(true);
  const [emailFailed, setEmailFailed] = React.useState(false);

  const handleChangeName = (event) => {
    setName(event.target.value);
    console.log("asdf", name);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    console.log("asdf", name);
  };

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
    console.log("asdf", name);
  };

  const close = () => {
    setThisShowModal(false);
  };
  const postEmail = async () => {
    const res = await axios.post(`${envConfig.BASEURL}/mail`, {
      name,
      email,
      description: message,
    });
    return res;
  };
  const submitButton = () => {
    setValidation(false);
    setEmailLoading(true);
    if (
      name.trim().length <= 0 ||
      email.trim().length <= 0 ||
      message.trim().length <= 0
    ) {
      console.log("validation error");
      setValidation(true);
      setThisShowModal(true);
      setEmailLoading(false);
    } else {
      setThisShowModal(true);
      postEmail()
        .then((res) => {
          console.log("here done sending meail");
          if (res.data === "Done") {
            setEmailLoading(false);
          } else {
            setEmailFailed(true);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  React.useEffect(() => {
    if (thisShowModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [thisShowModal]);
  return (
    <div id="contactPage">
      <div className="home-container">
        <h1>
          <span style={{ color: "#82A0C2", paddingRight: "10px" }}>#</span>
          Contact Me{" "}
        </h1>
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
              value={name}
              onChange={handleChangeName}
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
              value={email}
              onChange={handleChangeEmail}
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
              value={message}
              onChange={handleChangeMessage}
              placeholder="Your message here.."
            ></textarea>
            <button
              type="button"
              className="nes-btn is-primary button"
              onClick={submitButton}
            >
              Send
            </button>
          </div>
        </div>
      </div>
      {thisShowModal && (
        <Modal close={close} successModal={true}>
          {validation && (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img
                src={error}
                alt="error"
                style={{
                  height: "50%",
                  width: "15%",
                  margin: "1rem",
                  paddingTop: "1rem",
                  objectFit: "contain",
                }}
              />
              <p style={{ alignItems: "center", marginTop: "3.5rem" }}>
                Validation Error, Please fill all the form components.
              </p>
            </div>
          )}
          {emailLoading && (
            <div style={{ display: "flex", width: "100%" }}>
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(0, -50%)",
                }}
              >
                <img
                  src={loadinganimation}
                  style={{
                    width: "20%",
                    height: "50%",
                  }}
                />
              </div>
            </div>
          )}
          {emailLoading === false && validation === false && (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img
                src={success}
                alt="success"
                style={{
                  height: "50%",
                  width: "15%",
                  margin: "1rem",
                  paddingTop: "1rem",
                  objectFit: "contain",
                }}
              />
              <p style={{ alignItems: "center", marginTop: "3.5rem" }}>
                Email sent successfully!
              </p>
            </div>
          )}
        </Modal>
      )}
    </div>
  );
};
export default Contact;

import React from "react";
import hamburger from "../../Assets/hamburger.png";
import { ModalContext } from "../../Context/ModalState";
import { Link } from "react-scroll";
import Modal from "../Modal/Modal";
import "./nav.css";

const Navbar = () => {
  const [showModal, setShowModal] = React.useContext(ModalContext);
  console.log("sho", showModal);
  // const [showModal, setShowModal] = React.useState(false);
  const onClickModal = () => {
    setShowModal(true);
  };

  const close = () => {
    setShowModal(false);
  };
  React.useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showModal]);
  return (
    <div>
      <div className="nav-elements">
        <ul className="ul-list">
          <Link className="link" to="homePage" smooth={true} duration={400}>
            <li className="link">Home</li>
          </Link>
          <Link className="link" to="aboutPage" smooth={true} duration={800}>
            <li className="link">About</li>
          </Link>
          <Link className="link" to="workPage" smooth={true} duration={1000}>
            <li className="link">Works</li>
          </Link>
          <Link className="link" to="contactPage" smooth={true} duration={1000}>
            <li className="link">Contact</li>
          </Link>
        </ul>
        <div className="hamburger">
          <button type="button" className="nes-btn" onClick={onClickModal}>
            <img src={hamburger} className="img-ham" />
          </button>
          {showModal && (
            <Modal close={close}>
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "Column",
                  width: "100%",
                }}
              >
                <Link to="homePage" smooth={true} duration={400}>
                  <button className="nes-btn nav-btn" onClick={() => close()}>
                    Home
                  </button>
                </Link>

                <Link to="aboutPage" smooth={true} duration={400}>
                  <button className="nes-btn nav-btn" onClick={() => close()}>
                    About
                  </button>
                </Link>

                <Link to="workPage" smooth={true} duration={400}>
                  <button className="nes-btn nav-btn" onClick={() => close()}>
                    Works
                  </button>
                </Link>

                <Link to="workPage" smooth={true} duration={400}>
                  <button
                    className="nes-btn nav-btn-contact"
                    onClick={() => close()}
                  >
                    Contact
                  </button>
                </Link>
              </div>
            </Modal>
          )}{" "}
        </div>
      </div>
    </div>
  );
};
export default Navbar;

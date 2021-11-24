import React from "react";
import hamburger from "../../Assets/hamburger.png";
import { ModalContext } from "../../Context/ModalState";
import { Link } from "react-scroll";
import Modal from "../Modal/Modal";
import "./nav.css";

const Navbar = () => {
  const [showModal, setShowModal] = React.useContext(ModalContext);
  const onClickModal = () => {
    setShowModal(true);
  };

  return (
    <div>
      <div className="nav-elements">
        <ul className="ul-list">
          <Link className="link" to="homePage" smooth={true} duration={400}>
            <li className="link">Home</li>
          </Link>
          <Link className="link" to="aboutPage" smooth={true} duration={800}>
            <li class="link">About</li>
          </Link>
          <Link className="link" to="workPage" smooth={true} duration={1000}>
            <li className="link">Works</li>
          </Link>
          <Link className="link" to="contactPage" smooth={true} duration={1000}>
            <li className="link">Contact</li>
          </Link>
        </ul>
        <div className="hamburger">
          <button type="button" class="nes-btn" onClick={onClickModal}>
            <img src={hamburger} className="img-ham" />
          </button>

          {showModal && <Modal />}
        </div>
      </div>
    </div>
  );
};
export default Navbar;

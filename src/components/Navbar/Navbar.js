import React from 'react';
import hamburger from '../../Assets/hamburger.png';
import {ModalContext} from '../../Context/ModalState';
import Modal from '../Modal/Modal';
import './nav.css';

const Navbar = () => {
  const [showModal, setShowModal] = React.useContext(ModalContext);
  const onClickModal = () => {
    setShowModal(true);
  };
  return (
    <div>
      <div className="nav-elements">
        <ul className="ul-list">
          <a href="#work-page">
            <li className="link">Home</li>
          </a>
          <li>About</li>
          <li>Works</li>
          <li>Contact</li>
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

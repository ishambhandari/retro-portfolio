import React from "react";
import { ModalContext } from "../../Context/ModalState";
import "./modal.css";

const Modal = (props) => {
  const closeModalRef = React.useRef();
  const [showModal, setShowModal] = React.useContext(ModalContext);
  const onCrossClick = () => {
    setShowModal(false);
  };
  // const onHandleOutsideClick = (e) => {
  //     if (!closeModalRef.current.contains(e.target)) {
  //         setShowModal(false);
  //     }
  // };
  // if (showModal === false) {
  //     return null;
  // }

  return (
    <div className="modal-bg">
      <div className="modal" ref={closeModalRef}>
        <h2>This is modal</h2>
        {props.children}
        <button
          type="button"
          class="nes-btn is-error modal-close"
          onClick={onCrossClick}
        >
          X
        </button>
      </div>
    </div>
  );
};
export default Modal;

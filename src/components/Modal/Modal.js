import React from 'react';
import './modal.css';
const Modal = () => {
  const [showModal, setShowModal] = React.useState(true);
  const onCrossClick = () => {
    setShowModal(false);
  };
  if (showModal === false) {
    return null;
  }
  return (
    <div className="modal-bg">
      <div className="modal">
        <h2>This is modal</h2>
        <button
          type="button"
          class="nes-btn is-error modal-close"
          onClick={onCrossClick}>
          X
        </button>
      </div>
    </div>
  );
};
export default Modal;

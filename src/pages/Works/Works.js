import React from 'react';
import Line from '../../components/Line/Line';
import Modal from '../../components/Modal/Modal';
import {ModalContext} from '../../Context/ModalState';
import './works.css';
import project1 from '../../Assets/project1.png';
import project2 from '../../Assets/project2.png';
import project3 from '../../Assets/project3.png';
const Works = () => {
  const [showModal, setShowModal] = React.useContext(ModalContext);
  const worksRef = React.useRef(null);
  const onClickModal = () => {
    setShowModal(true);
  };
  React.useEffect(() => {}, [showModal]);
  return (
    <div ref={worksRef}>
      <div className="home-container">
        <h1>Works</h1>
        <h5 style={{marginTop: '1rem'}}>(Pinned projects)</h5>
      </div>
      <div className="home-container">
        <div className="nes-container work-card">
          <img src={project1} alt="Project 1" className="image" />
          <button type="button" class="nes-btn is-primary button-text">
            View Project
          </button>
        </div>
        <div className="nes-container work-card">
          <img src={project2} alt="Project 2" className="image" />
          <button type="button" class="nes-btn is-primary button-text">
            View Project
          </button>
        </div>
        <div className="nes-container work-card">
          <img src={project3} alt="Project 3" className="image" />
          <button
            type="button"
            class="nes-btn is-primary button-text"
            onClick={onClickModal}>
            View Project
          </button>
        </div>
      </div>
      {showModal && <Modal />}
      <Line />
    </div>
  );
};
export default Works;

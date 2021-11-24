import React from "react";
import Line from "../../components/Line/Line";
import Modal from "../../components/Modal/Modal";
import { ModalContext } from "../../Context/ModalState";
import { BrowserRouter as Router, Link } from "react-router-dom";
import images123 from "./testImages.js";
import "./works.css";
import project1 from "../../Assets/project1.png";
import project2 from "../../Assets/project2.png";
import project3 from "../../Assets/project3.png";
const Works = () => {
  const [showModal, setShowModal] = React.useContext(ModalContext);
  const [current, setCurrent] = React.useState(0);
  const worksRef = React.useRef(null);
  const onClickModal = () => {
    setShowModal(true);
  };
  React.useEffect(() => {
    console.log("images", images123);
  }, [showModal]);

  const nextSlide = () => {
    setCurrent(current === images123.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images123.length - 1 : current - 1);
  };
  return (
    <Router>
      <div id="workPage">
        <div className="home-container">
          <h1>Works</h1>
          <h5 style={{ marginTop: "1rem" }}>(Pinned projects)</h5>
        </div>
        <div className="home-container">
          <div className="nes-container work-card">
            <img src={project1} alt="Project 1" className="image" />
            <Link to="/project1" className="button-text">
              <button type="button" class="nes-btn is-primary button-text">
                View Project
              </button>
            </Link>
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
              onClick={onClickModal}
            >
              View Project
            </button>
          </div>
        </div>
        {showModal && (
          <Modal>
            {/* <img */}
            {/*   src="https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc0NDY0NTMyOTQzNDgwNDU0/buying-your-first-desktop-computer.jpg" */}
            {/*   alt="asdf" */}
            {/* /> */}

            <div className="image-modal-container">
              <button
                className="nes-btn slider-btn-left"
                type="button"
                onClick={prevSlide}
              >
                &lt;
              </button>

              <button
                className="nes-btn slider-btn-right"
                type="button"
                onClick={nextSlide}
              >
                &gt;
              </button>
              {images123.map((res, index) => {
                return (
                  <div className={index === current ? "slide-active" : "slide"}>
                    <img src={res.url} alt="photo" className="modal-image" />
                  </div>
                );
              })}
            </div>
          </Modal>
        )}
        <Line />
      </div>
    </Router>
  );
};
export default Works;

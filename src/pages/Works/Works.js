import React from "react";
import Line from "../../components/Line/Line";
import Modal from "../../components/Modal/Modal";
import { ModalContext } from "../../Context/ModalState";
import { BrowserRouter as Router, Link } from "react-router-dom";
import images123 from "./testImages.js";
import { envConfig } from "../../config/index.js";
import axios from "axios";
import "./works.css";
const Works = () => {
  const [showModal, setShowModal] = React.useContext(ModalContext);
  const [current, setCurrent] = React.useState(0);
  const [allWork, setAllWork] = React.useState(null);
  const [workImages, setWorkImages] = React.useState(null);
  const worksRef = React.useRef(null);
  const getData = async () => {
    const data = await axios.get(`${envConfig.BASEURL}/api/allworks/`);
    setAllWork(data.data);
  };
  const getImages = async (id) => {
    const imgData = await axios.get(`${envConfig.BASEURL}/api/workimg/${id}`);
    setWorkImages(imgData.data);
  };
  const onClickModal = (iid) => {
    setShowModal(true);
    getImages(iid);
  };
  React.useEffect(() => {
    getData();
  }, []);
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
          {allWork && (
            <div>
              {allWork.map((res) => {
                console.log(res);
                /* setUrl(res.file_location.slice(7)); */
                const newd = `${envConfig.BASEURL}/${res.file_location.slice(
                  7
                )}`;
                return (
                  <div className="nes-container work-card">
                    <img src={newd} alt="Project" className="image" />
                    <button
                      type="button"
                      className="nes-btn is-primary button-text"
                      onClick={onClickModal(res.id)}
                    >
                      View Project
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        {showModal && (
          <Modal>
            {/* <img */}
            {/*   src="https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc0NDY0NTMyOTQzNDgwNDU0/buying-your-first-desktop-computer.jpg" */}
            {/*   alt="asdf" */}
            {/* /> */}

            <div style={{ borderWidth: 1, borderColor: "black" }}>
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
                    <div
                      className={index === current ? "slide-active" : "slide"}
                    >
                      <img src={res.url} alt="photo" className="modal-image" />
                    </div>
                  );
                })}
              </div>
            </div>
          </Modal>
        )}
        <Line />
      </div>
    </Router>
  );
};
export default Works;

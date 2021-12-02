import React from "react";
import Line from "../../components/Line/Line";
import Modal from "../../components/Modal/Modal";
import { ModalContext } from "../../Context/ModalState";
import { BrowserRouter as Router, Link } from "react-router-dom";
import images123 from "./testImages.js";
import loadinganimation from "../../Assets/loading.gif";
import { envConfig } from "../../config/index.js";
import axios from "axios";
import "./works.css";
const Works = () => {
  const [showModal, setShowModal] = React.useContext(ModalContext);
  const [thisShowModal, setThisShowModal] = React.useState(showModal);
  const [current, setCurrent] = React.useState(0);
  const [allWork, setAllWork] = React.useState(null);
  const [workImages, setWorkImages] = React.useState(null);
  const [title, setTitle] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [imgLoading, setImgLoading] = React.useState(true);
  const [workDes, setWorkDes] = React.useState();
  const worksRef = React.useRef(null);
  const getData = async () => {
    try {
      const data = await axios.get(`${envConfig.BASEURL}/api/allworks/${2}`);
      setAllWork(data.data);
      setLoading(false);
    } catch (error) {
      console.log("error");
    }
  };
  const onClickModal = async (id) => {
    setShowModal(true);
    setThisShowModal(true);
    try {
      const imgData = await axios.get(`${envConfig.BASEURL}/api/workimg/${id}`);
      const singleWorkData = await axios.get(
        `${envConfig.BASEURL}/api/allworks/${id}`
      );
      await setWorkImages(imgData.data);
      await setWorkDes(singleWorkData.data);
      setImgLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };
  const close = () => {
    setThisShowModal(false);
  };
  React.useEffect(() => {
    getData();
  }, []);
  React.useEffect(() => {
    console.log("images", images123);
  }, [showModal]);

  const nextSlide = () => {
    setCurrent(current === workImages.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? workImages.length - 1 : current - 1);
  };
  return (
    <Router>
      <div id="workPage">
        <div className="home-container">
          <h1>Works</h1>
          <h5 style={{ marginTop: "1rem" }}>(Pinned projects)</h5>
        </div>
        <div className="home-container">
          {loading === false ? (
            <div>
              {allWork.map((res) => {
                console.log(res);
                /* setUrl(res.file_location.slice(7)); */
                const newd = `${envConfig.BASEURL}/${res.file_location.slice(
                  7
                )}`;
                return (
                  <div className="nes-container work-card">
                    <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                      <img src={newd} alt="Project" className="image" />
                    </div>
                    <button
                      type="button"
                      className="nes-btn is-primary button-text"
                      onClick={() => onClickModal(res.id)}
                    >
                      View Project
                    </button>
                  </div>
                );
              })}
            </div>
          ) : (
            <div>
              <img
                src={loadinganimation}
                style={{
                  width: "50%",
                  height: "55%",
                  display: "flex",
                  textAlign: "center",
                  marginLeft: "20%",
                }}
              />
            </div>
          )}
        </div>
        {thisShowModal && (
          <Modal close={close} long={true}>
            <div>
              <div className="image-modal-container">
                {imgLoading === false && (
                  <div>
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
                  </div>
                )}
                {imgLoading === true ? (
                  <div>
                    <img
                      src={loadinganimation}
                      style={{
                        width: "25%",
                        height: "30%",
                        display: "flex",
                        textAlign: "center",
                        marginLeft: "100%",
                        marginTop: "30%",
                      }}
                    />
                  </div>
                ) : (
                  <div className="modal-image-container">
                    {workImages.map((res, index) => {
                      const newi = `${
                        envConfig.BASEURL
                      }/${res.image_location.slice(7)}`;
                      return (
                        <div>
                          <div
                            className={
                              index === current ? "slide-active" : "slide"
                            }
                          >
                            <img
                              src={newi}
                              alt="photo"
                              className="modal-image"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                <div>
                  {console.log("dd", workDes)}
                  {workDes && (
                    <>
                      <p className="nes-text is-primary work-des work-title">
                        {workDes[0].title}
                      </p>
                      <p className="work-des">{workDes[0].description}</p>

                      <div className="view-code">
                        <button
                          type="button"
                          className="nes-btn is-primary button-text-code"
                        >
                          View Code
                        </button>

                        <button
                          type="button"
                          className="nes-btn is-primary button-text-code"
                        >
                          View Live
                        </button>
                      </div>
                    </>
                  )}
                </div>
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

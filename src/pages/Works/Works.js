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
  const openLink = (link) => {
    window.open(link);
  };
  const getData = async () => {
    try {
      const data = await axios.get(`${envConfig.BASEURL}/api/allworks`);
      setAllWork(data.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };
  React.useEffect(() => {
    console.log("this is data", workImages);
  }, [workImages]);
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
      console.log("s", imgData);
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
          <h1>
            <span style={{ color: "#82A0C2", paddingRight: "10px" }}>#</span>
            Works
          </h1>
          <h5 style={{ marginTop: "1rem" }}>(Pinned projects)</h5>
        </div>
        <div className="home-container">
          {loading === false ? (
            <div>
              {console.log("this is data11", allWork)}
              {allWork.map((res) => {
                console.log("rrreess", res.file_location);
                const newd = `${res.file_location}`;
                console.log("file image", res.file_location);

                /* let newd = ""; */
                /* if (res.file_location) { */
                /*   newd = `${envConfig.BASEURL}/${res.file_location.slice(7)}`; */
                /*   console.log("sdf", newd); */
                /* } */

                /* setUrl(res.file_location.slice(7)); */

                return (
                  <div className="nes-container work-card">
                    <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                      {console.log("ii", newd)}
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
                  <div style={{ display: "flex" }}>
                    <img
                      src={loadinganimation}
                      style={{
                        width: "25%",
                        height: "30%",
                        display: "bloc",
                        textAlign: "center",
                        justifyContent: "center",
                        verticalAlign: "middle",
                        marginTop: "25%",
                        marginLeft: "45%",
                      }}
                      className="mtloading"
                    />
                  </div>
                ) : (
                  <div className="modal-image-container">
                    {workImages.map((res, index) => {
                      {
                        console.log("thisisinsidemodal", res);
                      }
                      const newi = res.image_location;
                      {
                        console.log("inside_modal", newi);
                      }
                      return (
                        <div>
                          <div
                            className={
                              index === current ? "slide-active" : "slide"
                            }
                          >
                            <a href={newi} target="__blank">
                              <img
                                src={newi}
                                alt="photo"
                                className="modal-image"
                              />
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                <div>
                  <>
                    {workDes &&
                      workDes.map((res) => {
                        return (
                          <>
                            {console.log("hey", res)}
                            <p className="nes-text is-primary work-des work-title">
                              {res.title}
                            </p>
                            <p className="work-des">{res.description}</p>

                            <div className="view-code">
                              {res.code_link && (
                                <button
                                  type="button"
                                  className="nes-btn is-primary button-text-code"
                                  onClick={() => openLink(res.code_link)}
                                >
                                  View Code
                                </button>
                              )}
                              {res.live_link && (
                                <button
                                  type="button"
                                  className="nes-btn is-primary button-text-code"
                                  onClick={() => openLink(res.live_link)}
                                >
                                  View Live
                                </button>
                              )}
                            </div>
                          </>
                        );
                      })}
                  </>
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

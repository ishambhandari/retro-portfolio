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
      console.log("this is base url", `${envConfig.BASEURL}`);
      const data = await axios.get(`${envConfig.BASEURL}`);
      const tmpData = JSON.parse(data.data.body);
      const finalAllData = tmpData.data;
      setAllWork(finalAllData);
      console.log("this is IITT", finalAllData);
      setLoading(false);
    } catch (error) {
      console.log("this is error", error);
    }
  };
  React.useEffect(() => {
    console.log("this is data", workImages);
  }, [workImages]);
  const onClickModal = async (id) => {
    setShowModal(true);
    setThisShowModal(true);
    try {
      // const imgData = await axios.get(`${envConfig.BASEURL}/works/${id}`);
      const singleWorkData = await axios.get(`${envConfig.BASEURL}/${id}`);
      // await setWorkImages(imgData.data);
      await setWorkDes(singleWorkData.data);
      console.log("this is data", singleWorkData.data);
      console.log("workdesk", workDes);
    } catch (error) {
      setImgLoading(false);
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
                console.log("rrreess", res);
                const newd = `${res.file_location}`;
                console.log("file image", res.file_location);

                return (
                  <div className="nes-container work-card" key={res.id}>
                    <p>{res.title}</p>
                    <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                      {console.log("ii", newd)}
                      <img src={res.imageUrl} alt="  " className="image" />
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
                alt="Loading..."
              />
            </div>
          )}
        </div>
        {thisShowModal && (
          <Modal close={close} long={true}>
            <div>
              {console.log("this is workdes", workDes)}
              {workDes && (
                <>
                  <div className="modal-image-container">
                    {console.log("imageurl", workDes.imageUrl)}
                    <img src={workDes.imageUrl} alt="Failed to load Image" />
                  </div>
                  <p className="nes-text is-primary work-des work-title">
                    {workDes.title}
                  </p>
                  <p className="work-des">{workDes.description}</p>

                  <div className="view-code">
                    {workDes.code_link && (
                      <button
                        type="button"
                        className="nes-btn is-primary button-text-code"
                        onClick={() => openLink(workDes.code_link)}
                      >
                        View Code
                      </button>
                    )}
                    {workDes.live_link && (
                      <button
                        type="button"
                        className="nes-btn is-primary button-text-code"
                        onClick={() => openLink(workDes.live_link)}
                      >
                        View Live
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </Modal>
        )}
        <Line />
      </div>
    </Router>
  );
};
export default Works;

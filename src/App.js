import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import { Link } from "react-scroll";
import Works from "./pages/Works/Works";
import Contact from "./pages/Contact/Contact";
import { ModalContext } from "./Context/ModalState";
import "./App.css";
function App() {
  const [showModal, setShowModal] = React.useContext(ModalContext);
  const [topButton, setTopButton] = React.useState(false);
  // React.useEffect(() => {
  //     showModal
  //         ? (document.body.style.overflow = "hidden")
  //         : (document.body.style.overflow = "unset");
  // }, [showModal]);
  React.useEffect(() => {
    window.addEventListener("scroll", scrollToTheTop);
  }, []);
  const scrollToTheTop = () => {
    if (window.scrollY > 150) {
      setTopButton(true);
    } else {
      setTopButton(false);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Works />
      <Contact />
      {topButton && (
        <div>
          <Link className="link" to="navPage" smooth={true} duration={200}>
            <button type="button" class="nes-btn is-error endButton">
              ^
            </button>
          </Link>
        </div>
      )}
    </div>
    // </ModalProvider>
  );
}

export default App;

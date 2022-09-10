import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Works from "./pages/Works/Works";
import Contact from "./pages/Contact/Contact";
import { ModalContext } from "./Context/ModalState";
import "./App.css";
function App() {
  const [showModal, setShowModal] = React.useContext(ModalContext);
  // React.useEffect(() => {
  //     showModal
  //         ? (document.body.style.overflow = "hidden")
  //         : (document.body.style.overflow = "unset");
  // }, [showModal]);
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Works />
      <Contact />
    </div>
    // </ModalProvider>
  );
}

export default App;

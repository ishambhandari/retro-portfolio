import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Works from "./pages/Works/Works";
import Contact from "./pages/Contact/Contact";
import { ModalProvider } from "./Context/ModalState";
import "./App.css";
function App() {
  return (
    <ModalProvider>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Works />
        <Contact />
      </div>
    </ModalProvider>
  );
}

export default App;

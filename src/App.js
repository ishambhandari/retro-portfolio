import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Works from './pages/Works/Works';
import Contact from './pages/Contact/Contact';
import './App.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Works />
      <Contact />
    </div>
  );
}

export default App;

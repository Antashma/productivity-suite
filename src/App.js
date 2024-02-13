import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {

  const navStyle = {
    display: "flex",
    gap: "10px"
  }

  const headerStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
  }

  return (
    <div className="App">
      <header style={headerStyle}>
        <div>
          <h1>Let's get productive!</h1>
          <p>a collection of productivity apps to help you get things done</p>
        </div>
        <nav style={navStyle}>
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

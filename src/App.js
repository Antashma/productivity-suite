import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import DividerHorizontal from "./components/DividerHorizontal";

function App() {

  const navStyle = {
    display: "flex",
    gap: "10px"
  }

  const headerStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 0",
  }

  const footerStyle = {
    marginBlock:"20px"
  }

  return (
    <div className="App">
      <header style={headerStyle}>
        <div>
          <h1>time & tasks corner</h1>
          <p>a collection of productivity apps to help you get things done</p>
        </div>
        <nav style={navStyle}>
          <Link to="/">home</Link>
          <Link to="about">about</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<About />} />
      </Routes>
      
      <footer style={footerStyle}>
        <DividerHorizontal />
        <h3>Footer header</h3>
        <p>more info for footer here!</p>
      </footer>
    </div>
  );
}

export default App;

import React from "react";
import Timer from "./components/Timer";
import ToDoList from "./components/ToDo/ToDoList";
import Home from "./components/Home";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {

  const navStyle = {
    display: "flex",
    gap: "10px"
  }

  return (
    <div className="App">
      <h1>Let's get productive!</h1>
      <p>a collection of productivity apps to help you get things done</p>
      <nav style={navStyle}>
        <Link to="/">Home</Link>
        <Link to="to-do">To Do</Link>
        <Link to="timer">Timer</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="to-do" element={<ToDoList />} />
        <Route path="timer" element={<Timer />} />
      </Routes>
    </div>
  );
}

export default App;

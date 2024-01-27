import Clock from "./Clock/Clock";
import Timer from "./Timer/Timer";
import ToDoList from "./ToDo/ToDoList";

function Home() {

  const prodAppsContainerStyle = {
    display: "flex",
    flexDirection: "column"
  }
  
  const todoAndTimerContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px"
  }

  return (
    <div>
      <h2>Home</h2>
      <div style={prodAppsContainerStyle}>
        <Clock />
        <div style={todoAndTimerContainerStyle}>
          <ToDoList />
          <Timer />
        </div>
      </div>
    </div>
  );
}

export default Home;

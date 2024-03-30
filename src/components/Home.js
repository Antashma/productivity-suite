import Clock from "./Clock/Clock";
import DividerVertical from "./DividerVertical";
import DividerHorizontal from "./DividerHorizontal";
import Timer from "./Timer/Timer";
import ToDoList from "./ToDo/ToDoList";
import Notes from "./Notes/Notes";

function Home() {

  const homeContainerStyle = {
    display: "flex",
    flexDirection: "column"
  }
  
  const prodAppsContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px"
  }

  const timerAndNotesContainerStyle = {
    display: "flex",
    width:"50%",
    flexDirection: "column",
    justifyContent:"space-between",
    gap:"20px"
  }

  return (
    <main style={homeContainerStyle}>
      <Clock />
      <div style={prodAppsContainerStyle}>
        <ToDoList />
        <DividerVertical />
        <div style={timerAndNotesContainerStyle}>
          <Timer />
          <DividerHorizontal />
          <Notes />
        </div>         
      </div>
    </main>
  );
}

export default Home;

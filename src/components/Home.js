import Clock from "./Clock/Clock";
import Timer from "./Timer/Timer";
import ToDoList from "./ToDo/ToDoList";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome!</p>
      <Clock />
      <Timer />
      <ToDoList />
    </div>
  );
}

export default Home;

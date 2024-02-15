import "./style.css";
import { useState } from "react";

function ToDo(props) {
  const [editModeOn, setEditModeOn] = useState(false);
  const [taskTitle, setTaskTitle] = useState("")

  const { id, title, completed, priority } = props.todoData;
  const { edit, toggle, del, toggleStar, isStarModeOn } = props;

  function handleEditMode() {
      setEditModeOn(!editModeOn);
      setTaskTitle(title);
  }

  function handleEditSubmit() {
        edit(taskTitle, id)
        handleEditMode();
  }

  function toggleOptionsContainer() {
    const optionsContainer = document.querySelector(`#options-${id}`)
    optionsContainer.classList.toggle("hidden")
  }
  
  const completedStyle = {
    textDecoration: "line-through",
    color: "silver",
  };

  const starModeOnVisibilityStyle = {
    display: "none",
  };

  return (
    <div
      className="todo--container"
      style={isStarModeOn && priority !== 1 ? starModeOnVisibilityStyle : null}
    >
      <div className="todo--container-left">
        {!editModeOn ? (
          <>
            <input
              className="todo--container-checkInput"
              type="checkbox"
              value={completed}
              onClick={toggle}
            />
            <p
              style={completed ? completedStyle : null}
              className={priority === 1 ? "starred" : ""}
            >
              {title}
            </p>
          </>
        ) : (
          <>
            <input 
                type="text"
                value={taskTitle} 
                onChange={e => setTaskTitle(e.target.value)} 
            />
            <button onClick={handleEditSubmit}>Submit</button>
          </>
        )}
        <button onClick={toggleOptionsContainer}>⚙️</button>
      </div>
      <div id={`options-${id}`} className="todo--options-container hidden">
        <button onClick={handleEditMode}>
          ✏️ {editModeOn ? "Cancel Edit" : "Edit"}
        </button>
        <button onClick={() => toggleStar(id)}>
          ⭐{priority === 1 ? "Unstar" : "Star"}
        </button>
        <button onClick={() => del(id)}>❎ Del</button>
      </div>
    </div>
  );
}

export default ToDo;

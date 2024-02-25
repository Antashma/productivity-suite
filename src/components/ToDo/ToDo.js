import "./style.css";
import { useState } from "react";

function ToDo(props) {
  const [editModeOn, setEditModeOn] = useState(false);
  const [taskTitle, setTaskTitle] = useState("")
  const { id, title, completed, priority } = props.todoData;
  const { edit, toggle, del, toggleStar, isStarModeOn } = props;

  function handleEditMode(editModeSetting) {  
    setTaskTitle(title);
    setEditModeOn(editModeSetting); 
  }

  function handleEditSubmit() {
        edit(taskTitle, id)
        handleEditMode();
  }

  function toggleOptionsContainer(e) {
    if (!e) {const e = window.event;}
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
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
      <div className="todo--container-left" onClick={toggle}
>
        {!editModeOn ? (
          <>
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
                className="todo--task-title-input"
                type="text"
                value={taskTitle} 
                onChange={e => setTaskTitle(e.target.value)} 
            />
          </>
        )}
        <button disabled={editModeOn} onClick={(e) => toggleOptionsContainer(e)}>⚙️</button>
      </div>
      <div id={`options-${id}`} className="todo--options-container hidden">        
         {!editModeOn ?
          <div id={`normalOptions-${id}`}>
          
            <button onClick={() => handleEditMode(true)}>✏️Edit</button>

            <button onClick={() => toggleStar(id)}>
              ⭐{priority === 1 ? "Unstar" : "Star"}
            </button>
            <button onClick={() => del(id)}>❎Del</button>
          </div> :
          <div className="todo--editOptions-container">
            <button onClick={() => handleEditMode(false)}>Cancel</button>
            <button onClick={handleEditSubmit}>Submit</button>
          </div>
        }
      </div>
    </div>
  );
}

export default ToDo;

import "./style.css"

function ToDo(props) {

    const { id, title, completed, priority } = props.todoData;
    const {toggle, del, toggleStar, isStarModeOn} = props

    const completedStyle = {
        textDecoration: "line-through",
        color: "silver",
    };

    const starModeOnVisibilityStyle = {
        display: "none"
    }

    return (
        
        <div className="todo--container" style={isStarModeOn && priority !== 1? starModeOnVisibilityStyle : null}>
           
            <div className="todo--container-left">
                
                <input className="todo--container-checkInput"  type="checkbox" value={completed} onClick={toggle}/>
                <p style={completed ? completedStyle : null} className={priority === 1 ? "starred" : ""}>
                    {title}
                </p>

            </div>
            <div>    
                {/* <button id="edit">📝"Edit"</button> */}
                <button onClick={() => toggleStar(id)}>⭐ 
                {priority === 1 ? "Unstar" : "Star"}
                </button>
                <button onClick={() => del(id)}>❎ Del</button>
            </div>  
        </div>
  );
}

export default ToDo;

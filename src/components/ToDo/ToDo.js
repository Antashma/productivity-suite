import "./style.css"

function ToDo(props) {

    const { id, title, completed } = props.todoData;

    const {toggle, del} = props

    const completedStyle = {
        textDecoration: "line-through",
        color: "silver",
    };

    const toDoContainerStyle = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: "1.5rem"
    }

    const checkStyle = {
        width: "20px",
        height: "20px"
    }

    const leftContainer = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px"
    }

    return (
        
        <div style={toDoContainerStyle}>
           
            <div style={leftContainer}>
                
                <input style={checkStyle}  type="checkbox" value={completed} onClick={toggle}/>
                <p style={completed ? completedStyle : null} >
                    {title}
                </p>

            </div>
            <div>    
                <button id="edit">📝"Edit"</button>
                <button onClick={() => del(id)}>❎ Del</button>
            </div>  
        </div>
  );
}

export default ToDo;

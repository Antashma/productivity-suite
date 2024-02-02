import { useState } from "react";

function ToDoForm(props) {
    const { add, starModeOn } = props;
    const [newTask, setNewTask] = useState("");

    function handleAdd(e) {
        e.preventDefault();
        add(newTask);
        setNewTask("")    
    }

    function handleChange(e) {
            setNewTask(e.target.value) 
    }


    return (
    <form>
        <input 
            type="text" 
            placeholder="create task"
            value={newTask}
            onChange={handleChange} 
            disabled={starModeOn}
        />
        <button onClick={handleAdd} disabled={starModeOn || newTask.trim().length < 1}>➕ Add New Task</button> 
        <p>***Note: New tasks cannot be created in Starred Only mode***</p>
    </form>
    );
}

export default ToDoForm;
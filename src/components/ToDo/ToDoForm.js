import { useState } from "react";

function ToDoForm(props) {
    const { add } = props;
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
        />
        <button onClick={handleAdd}>➕ Add New Task</button> 
    </form>
    );
}

export default ToDoForm;
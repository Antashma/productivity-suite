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
        <form id="addTaskForm" className="todoForm--form">
            <input
                id="taskName"
                name="taskName"
                type="text" 
                placeholder="create task"
                value={newTask}
                onChange={handleChange} 
                disabled={starModeOn}
            />
            <input 
                id="addTask" 
                name="addTask" 
                type="button"
                value="➕ Add New Task"
                onClick={handleAdd} 
                disabled={starModeOn || newTask.trim().length < 1}
            />
            
        </form>
    );
}

export default ToDoForm;
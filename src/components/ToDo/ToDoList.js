import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";
import { todos } from "../../data/todo";
import { useState } from "react";
//import {connect} from 'react-redux'

function ToDoList() {
    const [todoList, setTodoList] = useState(todos);
    const [starModeOn, setStarModeOn] = useState(false);
    // const [starList, setStarList] = useState(todos);


    function toggleCompleted(id) {
        const found = todoList.find(todo => id === todo.id)
        found.completed = !found.completed
        
        setTodoList(prev => prev.map(todo => {
            if (todo.id === id) {
                return found
            } else {
                return todo
            }
        }))
    }

    function addToDo(newTask) {
        setTodoList(prev => {
            const newId = Date.now()
            return [
                ...prev, 
                {
                    id: newId,
                    title: newTask,
                    completed: false
                }
            ]
        })
    }

    function deleteToDo(taskId) {
        setTodoList(prev => {
            const result = [];
            prev.forEach(todo => {
                if (todo.id !== taskId) {
                    result.push(todo)
                } 
            })
            return result
        })
    }

    function toggleStar(taskId) {
        const found = todoList.find(todo => taskId === todo.id)
        found.priority = found.priority === 1 ? 0 : 1
        
        setTodoList(prev => prev.map(todo => {
            if (todo.id === taskId) {
                return found
            } else {
                return todo
            }
        }))
    }

    const listContainerStyle ={
        width: "500px"
    }

    const todolistDisplay = todoList?.map(todo => {
        return <ToDo 
            key={todo.id} 
            todoData={todo} 
            toggle={() => toggleCompleted(todo.id)}
            toggleStar = {() => toggleStar(todo.id)}
            del={deleteToDo}
            isStarModeOn={starModeOn}
            />
    })

    function toggleStarMode() {
        if (starModeOn) {
            setStarModeOn(false)

        } else {
            setStarModeOn(true)
            // let maxWindowSize = todoList.length;
            // const copy = [...todoList]
            // copy.sort((a, b) => b.priority - a.priority)
    
            // for (let index in copy) {
            //     if (copy[index].priority === 1) {
            //         maxWindowSize--
            //     }
            // }            
        }

        
    }


    return (
        <div style={listContainerStyle}>
            <h2>To Do List</h2>
            <ToDoForm add={addToDo} startModeOn={starModeOn} />
            <div>
                <button onClick={toggleStarMode}>
                    {starModeOn ? "Show All Tasks" : "Show Starred Tasks"} 
                </button>
            </div>
            <main>
                {todolistDisplay}  
            </main>
        </div>
  );
}

export default ToDoList;

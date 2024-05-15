import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";
import { todos } from "../../data/todo";
import { useEffect, useState } from "react";
import useSound from "use-sound";

import taskSfx from "../../sounds/task-sounds-sprite.mp3";

const prevToDos = JSON.parse(localStorage.getItem("sp-list"))

function ToDoList() {
    const [todoList, setTodoList] = useState(prevToDos || todos);
    const [starModeOn, setStarModeOn] = useState(false);
    const [play] = useSound(taskSfx, {
        sprite: {
            completeTask: [0, 500],
            unCompleteTask: [580, 2000]
        }
    })

    function saveToDoChanges() {
        console.log("saved!")
        localStorage.setItem("sp-list", JSON.stringify(todoList))
    }

    useEffect(() => {
        saveToDoChanges();
    }, [todoList])



    function toggleCompleted(id) {
        //play sounds
        
        
        //toggle complete
        const found = todoList.find(todo => id === todo.id)
        found.completed = !found.completed
        if (found.completed) play({id: "completeTask"});
        else play({id: "unCompleteTask"}) 
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

    function editToDo(newTaskTitle, taskId) {
        setTodoList(prev => prev.map(todo => {
            if (todo.id === taskId) {
                return {...todo, title: newTaskTitle}
            } else {
                return todo
            }
        }))
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

    function clearCompleted() {
        setTodoList(prev => {
            const result = [];
            prev.forEach(todo => {
                if (todo.completed === false) {
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


    const todolistDisplay = todoList?.map(todo => {
        return <ToDo 
            key={todo.id} 
            todoData={todo} 
            toggle={() => toggleCompleted(todo.id)}
            toggleStar = {() => toggleStar(todo.id)}
            del={deleteToDo}
            edit={editToDo}
            isStarModeOn={starModeOn}
            />
    })

    return (
        <div className="todolist--container">
            <h2>{starModeOn ? "[Starred Only] " : ""}To Do List</h2>
            <ToDoForm add={addToDo} starModeOn={starModeOn} />
            <div className="todolist-options">
                <button onClick={() => setStarModeOn(!starModeOn) }>
                    {starModeOn ? "Show All Tasks" : "Only Show Starred Tasks"} 
                </button>
                <button onClick={clearCompleted}>
                   Clear Completed
                </button>
            </div>
            <main>
                {starModeOn && <p>***Note: New tasks cannot be created in Starred Only mode***</p>}

                {
                    todoList.length ? todolistDisplay : <p>Great work! You're all done!</p> 
                }
            </main>
        </div>
  );
}

export default ToDoList;

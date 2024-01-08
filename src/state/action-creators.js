import * as actions from "./actions.js"

export const addToDo = (newToDo) => {
    return {
        payload: newToDo,
        type: actions.ADD_TODO
    };
};
  
export const updateToDo = (updatedToDo) => {
    return {
        type: actions.UPDATE_TODO,
        payload: updatedToDo
    };
};
  
export const deleteToDoToDo = (toDoId) => {
    return {
        type: actions.UPDATE_TODO,
        payload: toDoId
    };
};
  
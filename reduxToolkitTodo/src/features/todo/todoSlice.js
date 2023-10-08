import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: 1,
        text: 'Learn React',
    }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {

        // state variable is the current state of the reducer and action is the action object that was dispatched
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
                state.todos.push(todo)
        },
        // for remove we need id then where i can find the id , so action is come to provide the id

        removeTodo: (state, action) => { 
            const id = action.payload
            state.todos = state.todos.filter((todo)=> todo.id !==id)
        },
    }
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer
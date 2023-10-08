import { createContext, useContext } from 'react';

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: 'Learn React',
            completed: false,
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { },
    
});

// return the context
export const useTodo = () => useContext(TodoContext);

export const TodoProvider = TodoContext.Provider;

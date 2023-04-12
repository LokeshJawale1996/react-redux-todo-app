import { createSlice } from '@reduxjs/toolkit';
//This code defines a Redux slice using the createSlice function provided by the @reduxjs/toolkit package. 
const initialState = {
  todos: [],
};

//The slice is responsible for managing the state of a list of todos, and includes several reducer functions for adding, removing, updating, and deleting todos.

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  //Each function takes two arguments: the current state of the slice, and an action object that contains a payload property with the data to be used in the update. 
  reducers: {
    //addTodo: This function adds a new todo to the todos array in the state by pushing the payload property of the action object onto the array.
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    
    //removeTodo: This function removes a todo from the todos array in the state by filtering out the todo with the ID matching the payload.id property of the action object.
   removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    },
    //updateTodo: This function updates a todo in the todos array in the state by finding the index of the todo with the ID matching the payload.id property of the action object, and replacing it with the payload property of the action object

    updateTodo: (state, action) => {
      const todoIndex = state.todos.findIndex(todo => todo.id === action.payload.id);
      if (todoIndex !== -1) {
        state.todos[todoIndex] = action.payload;
      }
    },

    //deleteAllTodos: This function removes all todos from the todos array in the state by setting the todos property of the state to an empty array

    deleteAllTodos: state => {
      state.todos = [];
    },
  },
});

export const { addTodo, removeTodo, updateTodo, deleteAllTodos } = todoSlice.actions;

export default todoSlice.reducer;

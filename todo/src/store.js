import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducers/todoReducer';

////This code is configuring a Redux store using the configureStore function provided by the @reduxjs/toolkit package
const store = configureStore({
//The store is being configured with a single reducer called todoReducer, which will be responsible for managing the state of the todos slice of the Redux store.
reducer: {
    todos: todoReducer,
  },
});

export default store;



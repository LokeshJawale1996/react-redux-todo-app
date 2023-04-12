import React from 'react';
import { Provider } from 'react-redux';
import TodoList from './components/TodoList';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;

//This code defines the root component of a React application, which renders a TodoList component and provides it with access to the Redux store via the Provider component.


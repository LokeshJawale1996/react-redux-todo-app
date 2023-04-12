import React, { useState } from 'react';
// It uses Redux for state management and accesses the state using the useSelector hook. It also uses the useDispatch hook to dispatch actions to modify the state.
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, updateTodo, deleteAllTodos } from '../reducers/todoReducer';

function TodoList() {
  const [newTodo, setNewTodo] = useState('');
  const [updatingTodo, setUpdatingTodo] = useState(null);
  const [updatedTodo, setUpdatedTodo] = useState('');

  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();

  //andleAddTodo is called when the user submits the form to add a new todo. It dispatches an addTodo action with a new todo object containing an id and the text from the newTodo state. It then resets the newTodo state to an empty string.
  const handleAddTodo = e => {
    e.preventDefault();
    if (newTodo.trim() === '') return;
    dispatch(addTodo({
      id: Date.now(),
      text: newTodo,
    }));
    setNewTodo('');
  };

  //andleRemoveTodo is called when the user clicks the "Remove" button next to a todo. It dispatches a removeTodo action with the id of the todo to be removed.
  const handleRemoveTodo = id => {
    dispatch(removeTodo({ id }));
  };

  //handleUpdateTodo is called when the user submits the form to update a todo. It dispatches an updateTodo action with an object containing the id of the todo being updated and its new text value from the updatedTodo state. It then resets updatedTodo to an empty string and updatingTodo to null.
  const handleUpdateTodo = e => {
    e.preventDefault();
    if (updatedTodo.trim() === '') return;
    dispatch(updateTodo({
      id: updatingTodo.id,
      text: updatedTodo,
    }));
    setUpdatedTodo('');
    setUpdatingTodo(null);
  };

  //handleDeleteAllTodos is called when the user clicks the "Delete All Todos" button. It dispatches a deleteAllTodos action to remove all todos.
  const handleDeleteAllTodos = () => {
    dispatch(deleteAllTodos());
  };

  //this function receives current todo and updatingTodo state using setUpdatingTodo
  const handleEditTodo = todo => {
    setUpdatingTodo(todo);
    setUpdatedTodo(todo.text);
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>

      {todos.length === 0 ? (
        <p>No todos</p>
      ) : (
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              {updatingTodo?.id === todo.id ? (
                <form onSubmit={handleUpdateTodo}>
                  <input type="text" value={updatedTodo} onChange={e => setUpdatedTodo(e.target.value)} />
                  <button type="submit">Update</button>
                  <button type="button" onClick={() => setUpdatingTodo(null)}>Cancel</button>
                </form>
              ) : (
                <div>
                  <span>{todo.text}</span>
                  <button type="button" onClick={() => handleEditTodo(todo)}>Edit</button>
                  <button type="button" onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}

      <button type="button" onClick={handleDeleteAllTodos}>Delete All Todos</button>
    </div>
  );
}

export default TodoList;

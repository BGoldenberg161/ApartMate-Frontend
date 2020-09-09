import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import '../assets/todo.css';


const Todo = ({ todos, completeTodo, removeTodo, updateTodo, props }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} user={props.user} />;
  }
console.log(todos)
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.taskName}
      </div>
      <div className='icons'>
        <RiDeleteBin5Line
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.taskName })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default Todo;
import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import axios from 'axios'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL


function TodoList(props) {

  const [todos, setTodos] = useState([]);
  const groupId = props.location.pathname


  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  /// get chores for group
  useEffect(() => {
    axios.get(`${REACT_APP_SERVER_URL}${groupId}`)
      .then(chores => {
        console.log(chores.data)
      })
      .catch(err => console.log(`Get groups error:`, err))
  }, [])


  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} user={props.user}/>
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        user={props.user}
      />
    </>
  );
}

export default TodoList;

import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import axios from 'axios';

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function TodoList(props) {
	const [todos, setTodos] = useState([]);
	const groupId = props.location.pathname.slice(8);
	console.log(groupId);
  
  /// get chores for group
  useEffect(() => {
    axios
      .get(`${REACT_APP_SERVER_URL}/chores/${groupId}`)
      .then(chores => {
        console.log(chores.data);
        setTodos(chores.data);
      })
      .catch(err => console.log(`Get groups error:`, err));
  }, []);
  console.log(todos);

	const addTodo = todo => {
		if (!todo.taskName || /^\s*$/.test(todo.taskName)) {
			return;
		}

		const newTodos = [todo, ...todos];

		setTodos(newTodos);
		console.log(...todos);
	};

	const updateTodo = (todoId, newValue) => {
		if (!newValue.taskName || /^\s*$/.test(newValue.taskName)) {
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

	return (
		<>
			<h1>What's the Plan for Today?</h1>
			<TodoForm onSubmit={addTodo} user={props.user} groupId={groupId} />
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

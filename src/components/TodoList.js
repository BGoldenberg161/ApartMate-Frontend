import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import TodoForm from './TodoForm';
import Todo from './Todo';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import '../ToDoScroll.css';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(0),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.success.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(0),
      borderRadius: 4
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

function TodoList(props) {
	const [todos, setTodos] = useState([]);
    const groupId = props.location.pathname.slice(8);
    const classes = useStyles();

	const getChores = () => {
		axios.get(`${REACT_APP_SERVER_URL}/chores/${groupId}`)
		.then(chores => {
			// console.log(chores.data);
			setTodos(chores.data);
		})
		.catch(err => console.log(`Get groups error:`, err));
	}

	/// get chores for group
	useEffect(() => {
		getChores()
	}, [todos]);

	// console.log(todos);

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
		console.log(id)
		const removedArr = [...todos].filter(todo => todo.id !== id);
		setTodos(removedArr);
		axios.delete(`${REACT_APP_SERVER_URL}/chores/${id}/delete`)
		.catch(err => {
			console.log("this did not delete! wtf?")
		})
	};

	const completeTodo = (id) => {
		console.log("This is todos" + todos)
		let updatedTodos = todos.map(todo => {
			if (todo._id === id) {
				todo.isDone = !todo.isDone;
				axios.post(`${REACT_APP_SERVER_URL}/chores/${todo._id}/complete`)
				.catch(err => {
					console.log('Error with the axios.post completeTodo', err)
				})
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	const todoComponents = todos.map((todo, index) => (
		<Todo
			key={index}
			todo={todo}
			todos={todos}
			setTodos={setTodos}
			completeTodo={completeTodo}
			removeTodo={removeTodo}
			updateTodo={updateTodo}
			user={props.user}
		/>
	));

	return (
		<>
			<TodoForm onSubmit={addTodo} user={props.user} groupId={groupId} />
            <div className="toDoSection">
			{todoComponents}
            </div>

            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
			<Link to={`/venmo/${groupId}`} variant="body2">
                Take me to my venmo
        	</Link>
            </div>
            </Container>
		</>
	);
}

export default TodoList;

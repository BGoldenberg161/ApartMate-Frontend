import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import '../assets/todo.css';
// Material UI Imports
import { RiDeleteBin5Line } from 'react-icons/ri';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import axios from 'axios';

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Todo = (props) => {
	console.log('🍒', props.user);

	const [claim, setClaim] = useState(false);
	const [checked, setChecked] = useState(false);

  console.log('🚴', props.todos)
  useEffect(()=>{
    props.setTodos(props.todos)
  }, []) 

  const refreshPage = () => {
    window.location.reload(false);
  };

	const handleClaim = (e, claim) => {
		axios
			.put(`${REACT_APP_SERVER_URL}/chores/claim/${props.todo._id}`, { user: props.user })
			.then(response => {
				setChecked(e.target.checked);
				console.log("this has been checked", { claim });

			})
			.catch(err => {
				console.log('Error setting claim: ', err);
			});
	};

	return (
		<div className={props.todo.isDone ? 'todo-row complete' : 'todo-row'}>
			<div key={props.todo._id} onClick={() => props.completeTodo(props.todo._id)}>
				{props.todo.taskName}
				<br></br>
				{props.todo.taskDetail}
				<br></br>
				{props.todo.claimName}
			</div>
			<div className='icons'>
				<FormControlLabel
					control={
						<Checkbox
							onChange={handleClaim}
							onClick={refreshPage}
							icon={<FavoriteBorder />}
							checkedIcon={<Favorite />}
							name='checkedH'
						/>
					}
					label='Claim this Chore'
				/>
				<RiDeleteBin5Line
					onClick={() => props.removeTodo(props.todo._id)}
					className='delete-icon'
				/>
			</div>
		</div>
	);
};

export default Todo;

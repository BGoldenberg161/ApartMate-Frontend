import React, { useState } from 'react';
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

const Todo = ({ todo, completeTodo, removeTodo, user }) => {
	console.log('🍒', user);

	const [claim, setClaim] = useState(false);
	const [checked, setChecked] = useState(false);

	const handleClaim = (e, claim) => {
		setChecked(e.target.checked);
		console.log('this has been checked', { claim });
		axios
			.put(`${REACT_APP_SERVER_URL}/chores/claim/${todo._id}`, { user })
			.then(response => {
				console.log(response);
			})
			.catch(err => {
				console.log('Error setting claim: ', err);
			});
	};

	return (
		<div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}>
			<div key={todo._id} onClick={() => completeTodo(todo._id)}>
				{todo.taskName}
				<br></br>
				{todo.taskDetail}
				<br></br>
				{todo.claimName}
			</div>
			<div className='icons'>
				<FormControlLabel
					control={
						<Checkbox
							onChange={handleClaim}
							icon={<FavoriteBorder />}
							checkedIcon={<Favorite />}
							name='checkedH'
						/>
					}
					label='Claim this Chore'
				/>
				<RiDeleteBin5Line
					onClick={() => removeTodo(todo.id)}
					className='delete-icon'
				/>
			</div>
		</div>
	);
};

export default Todo;

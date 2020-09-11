import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function TodoForm(props) {
	const [input, setInput] = useState(props.edit ? props.edit.value : '');
	const thisUser = props.user;
	const [taskDetail, setTaskDetail] = useState('');
	const group = props.groupId;
	const [rep, isRep] = useState(true);

	const inputRef = useRef(null);

	const handleInput = e => {
		setInput(e.target.value);
	};

	const handleDetail = e => {
		setTaskDetail(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();

		axios.post(`${REACT_APP_SERVER_URL}/chores/new`, {
				input,
				thisUser,
				taskDetail,
				group,
				rep,
			})
			.catch(err => console.log(`Post chore error:`, err));

		props.onSubmit({
			id: Math.floor(Math.random() * 10000),
			taskName: input,
			taskDetail: taskDetail,
		});
		setInput('');
		setTaskDetail('');
		window.location.reload(false);
	};

	return (
		<form onSubmit={handleSubmit} className='todo-form'>
			{props.edit ? (
				<>
					<input
						placeholder='Update your item'
						value={input}
						onChange={handleInput}
						name='taskName'
						ref={inputRef}
						className='todo-input edit'
					/>
					<button onClick={handleSubmit} className='todo-button edit'>
						Update
					</button>
				</>
			) : (
				<>
					Add New User? <br />
					<CopyToClipboard text={group} onCopy={{ copied: true }}>
						<button>Copy to clipboard</button>
					</CopyToClipboard>
					<br />
					<input
						placeholder='Add a todo'
						value={input}
						onChange={handleInput}
						name='taskName'
						className='todo-input'
						ref={inputRef}
					/>
					<input
						placeholder='Task Details'
						value={taskDetail}
						onChange={handleDetail}
						name='taskDetail'
						className='todo-input'
						ref={inputRef}
					/>
					<button onClick={handleSubmit} className='todo-button'>
						Add todo
					</button>
				</>
			)}
		</form>
	);
}

export default TodoForm;

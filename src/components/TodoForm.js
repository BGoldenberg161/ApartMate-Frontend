import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
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

function TodoForm(props) {
	const [input, setInput] = useState(props.edit ? props.edit.value : '');
	const thisUser = props.user;
	const [taskDetail, setTaskDetail] = useState('');
	const group = props.groupId;
    const [rep, isRep] = useState(true);
    const classes = useStyles();

	// const inputRef = useRef(null);

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
	};

	return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
            <Typography component="h1" variant="h3">
                What's the plan for today?
            </Typography>
		<form onSubmit={handleSubmit} className='todo-form'>
			{props.edit ? (
				<>
					<TextField
						placeholder='Update your item'
						value={input}
						onChange={handleInput}
						name='taskName'
						// ref={inputRef}
                        className='todo-input edit'
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        autoFocus
                        color="secondary"
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
					<TextField
						placeholder='Add a todo'
						value={input}
						onChange={handleInput}
						name='taskName'
                        className='todo-input'
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        autoFocus
                        color="secondary"
						// ref={inputRef}
					/>
					<TextField
						placeholder='Task Details'
						value={taskDetail}
						onChange={handleDetail}
						name='taskDetail'
                        className='todo-input'
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        autoFocus
                        color="secondary"
						// ref={inputRef}
					/>
					<button onClick={handleSubmit} className='todo-button'>
						Add todo
					</button>
                    
				</>
			)}
		</form>
        </div>
        </Container>
	);
}

export default TodoForm;

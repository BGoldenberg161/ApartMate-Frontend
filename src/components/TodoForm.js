import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL


function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const [thisUser, setThisUser] = useState(props.user)
  const [taskDetail, setTaskDetail] = useState('No wammies, no wammies, no wammies')
  const [group, setGroup] = useState(`5f555fdfc294e44af3aca930`)
  const [rep, isRep] = useState(true)
  console.log(thisUser)
  const theUser = props.user

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

      axios.get(`${REACT_APP_SERVER_URL}/chores/new`, {input, theUser, taskDetail, group, rep})
        .then(newChore => {
          console.log(newChore)
        })
        .catch(err => console.log(`Post chore error:`, err))

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');

  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
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
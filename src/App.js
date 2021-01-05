import React, { useState, useEffect } from 'react';
import { Todo } from './Todo';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import db from './firebase';
import './App.css';

function App() {
  // get data from api, won't change
  const [todos, setTodos] = useState([]);
  // used for displaying todos and filtering
  const [filteredTodos, setFilteredTodos] = useState([])
  const [input, setInput] = useState("");


  //listen the db and fetch todos as they get added / removed
  useEffect(() => {
    db.collection('todos').orderBy('done', 'asc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, text: doc.data().text, done: doc.data().done })))
      setFilteredTodos(snapshot.docs.map(doc => ({ id: doc.id, text: doc.data().text, done: doc.data().done })))
    })

  }, [])

  const onEnter = (event, callback) => event.key === 'Enter' && callback();
  //checkbox update fonction
  const onClickHandler = () => {
    db.collection('todos').add({
      text: input,
      done: false
    })
    setTodos(todos.concat(input));//add a new todo to the array 
    setInput("");//clear up the input
  }
  //filtered todos
  let all = todos;
  let active = todos.filter(todo => todo.done === false);
  let completed = todos.filter(todo => todo.done === true);
  //functions for the filters buttons
  function showAll() {
    setFilteredTodos(all)
  }
  function showActive() {
    setFilteredTodos(active)
  }
  function showCompleted() {
    setFilteredTodos(completed)
  }

  return (
    <div className="App">
      <h1>Vladimirs Todos!</h1>
      <FormControl>
        <InputLabel>Todos:</InputLabel>
        <Input placeholder="Whats next..." value={input} onChange={e => setInput(e.target.value)} onKeyPress={e => onEnter(e, onClickHandler)} />
        <Button variant="contained" color="primary" disabled={!input} onClick={onClickHandler}>ADD TASK</Button>
      </FormControl>
      <ul>
        {filteredTodos.map((todo) => (
          <Todo key={todo.id} id={todo.id} text={todo.text} done={todo.done} />
        ))}
      </ul>
      <div className="bottom-menu">
        <h3>{active.length} todos left </h3>
        <div >
          <Button onClick={() => showAll()}>All</Button>
          <Button onClick={() => showActive()}>Active</Button>
          <Button onClick={() => showCompleted()}>Completed</Button>
        </div>
      </div>
    </div>
  );
}

export default App;

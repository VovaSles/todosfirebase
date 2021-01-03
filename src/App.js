import React,{useState, useEffect} from 'react';
import {Todo} from './Todo';
import {Button, FormControl, Input, InputLabel } from '@material-ui/core';
import db from './firebase';
import './App.css';

function App() {
const [todos, setTodos] = useState([]);
const [input, setInput] = useState("");


//listen the db and fetch todos as they get added / removed
useEffect(() => {
  db.collection('todos').onSnapshot(snapshot => {
    setTodos(snapshot.docs.map(doc => ({id: doc.id, text: doc.data().text , done:doc.data().done})))
    console.log(snapshot.docs.map(doc => ({id: doc.id, text: doc.data().text , done:doc.data().done})))
    
  })
 
}, [])


const onClickHandler = (event) =>{
  event.preventDefault();//stop the refresh
  db.collection('todos').add({
    text: input,
    done: false
  })
  setTodos(todos.concat(input));//add a new todo to the array 
  setInput("");//clear up the input
}


const active = todos.filter(todo => todo.done === false);


const completed = todos.filter(todo => todo.done === true);


  return (
    <div className="App">
      <h1>Vladimirs Todos!</h1>
    <FormControl>
      <InputLabel>Todos:</InputLabel>
      <Input  placeholder="Whats next..." value={input} onChange={e => setInput(e.target.value)} />
      <Button variant="contained" color="primary" disabled={!input} onClick={onClickHandler}>ADD TASK</Button>
    </FormControl>
    
    <ul>
     {todos.map((todo) =>(
     <Todo key={todo.id} id={todo.id} text={todo.text} done={todo.done}/>
     ))}
    </ul>
    <div className="bottom-menu ">
      <h3>{active.length} items left</h3>
      <div >
        <Button>All</Button>
        <Button>Active</Button>
        <Button>Completed</Button>
      </div>
    </div>
    </div>
  );
}

export default App;

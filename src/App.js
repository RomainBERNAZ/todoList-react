import React, { useState, useEffect } from 'react';

import '../src/scss/App.css';
import Form from './components/Form'
import TodoList from './components/TodoList';

function App() {


  const [inputText, setInputText] =useState("");
  const [todos, setTodos] = useState([]);

// AU DEMMARAGE 
useEffect (() => {
  getLocalTodos();
    }, []);

//USE EFFECT
useEffect (() => {
  saveLocalTodos();
    },[todos]);



// Sauvegarde en stockage local 
const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
};

const getLocalTodos = () => {
  if(localStorage.getItem('todos') ===null ){
    localStorage.setItem('todos', JSON.stringify([]));
  }else {
    let todoLocal = JSON.parse(localStorage.getItem('todos'));
    setTodos(todoLocal);
  }
};


return (
<div className="container">
    <h1><span>T</span>ODO LIS<span>T</span></h1>
  
  <Form inputText={inputText} 
        setInputText={setInputText}
        todos={todos} 
        setTodos={setTodos}/>
  
  <TodoList todos={todos} 
            setTodos={setTodos}/>
</div>
);
}

export default App;
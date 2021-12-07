import React, {useState, useEffect} from "react";
import { AppUI } from "./AppUI.js";
import axios from "axios";
function App() {
 const [loading, setLoading]=useState(true);
 const [error, setError]=useState(false);

  const [todos, setTodos]= useState([]);
  
  const [searchValue, setSearchValue]=useState('');
 
  const completedTodos=todos.filter(todo=> !!todo.completed).length;
  const totalTodos=todos.length;
  let searchedTodos=[];

  if (!searchValue.length>=1){
    searchedTodos=todos;
  }
  else{
    searchedTodos=todos.filter(todo=>{
      const todoText=todo.text.toLowerCase();
      const searchText=searchValue.toLowerCase();
      return todoText.includes(searchText)
    })
  }

  useEffect(() => {
    try {
      setTimeout(()=>{
        axios.get(`http://192.168.1.67:4000/todos`)
        .then(res => {
          const tareas = res.data;
        setTodos(tareas)
        })
        setLoading(false)
    } 
    ,1000)
    
  }
  catch (error) {
      setError(error)
  }
}, [ completedTodos]);


  const completeTodo=(text)=>{
    const todoIndex= todos.findIndex(todo=>todo.text===text);
    const newTodos=[...todos];
    newTodos[todoIndex].completed='1';
    setTodos(newTodos);

    // todos[todoIndex]= {
    //   text: todos[todoIndex].text,
    // completed:true}
    axios.post(`http://192.168.1.67:4000/todos/${text}`,{ tarea:newTodos[todoIndex].text, completed: 1});
  }
  const deleteTodo=(text)=>{
    const todoIndex= todos.findIndex(todo=>todo.text===text);
    const newTodos=[...todos];
    newTodos.splice(todoIndex, 1);
    axios.delete(`http://192.168.1.67:4000/todos/${text}`);
    setTodos(newTodos);
  }

  return (
    <AppUI
    error={error}
    loading={loading}
    totalTodos={totalTodos}
    completedTodos={completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    />
  );
}

export default App;

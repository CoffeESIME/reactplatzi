import React, {useState} from "react";
import { TodoItem } from "../TodoItem/index.js";
import { TodoList } from "../TodoList/index.js";
import {  TodoSearch } from "../TodoSearch/index.js";
import { CreateTodoButton } from "../CreateTodoButton/index.js";
import { TodoCounter} from "../TodoCounter/index.js";

//import './App.css';
const defaultTodos = [
  { text: "terminar el prototipo de telemetic", completed: false },
  { text: "Tomar curso" ,completed: false },
  { text: "llorar con la llorona",completed: true },
];
function App() {
  const [todos, setTodos]= useState(defaultTodos);
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

  const completeTodo=(text)=>{
    const todoIndex= todos.findIndex(todo=>todo.text===text);
    const newTodos=[...todos];
    newTodos[todoIndex].completed=true;
    setTodos(newTodos)
    // todos[todoIndex]= {
    //   text: todos[todoIndex].text,
    // completed:true}
  }
  const deleteTodo=(text)=>{
    const todoIndex= todos.findIndex(todo=>todo.text===text);
    const newTodos=[...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos)
  }

  return (
    <React.Fragment>
      <TodoCounter 
      total={totalTodos}
      completed={completedTodos}
      />
      <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem 
          key ={todo.text} 
          text={todo.text} 
          completed={todo.completed}
          onComplete={()=>completeTodo(todo.text)}
          onDelete={()=>deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;

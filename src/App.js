import React from "react";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import {  TodoSearch } from "./TodoSearch";
import { TodoCreateButton } from "./CreateTodoButton";
import { TodoCounter} from "./TodoCounter";

//import './App.css';
const todos = [
  { text: "terminar el prototipo de telemetic", completed: false },
  { text: "Tomar curso" ,completed: true },
  { text: "llorar con la llorona",completed: true },
];
function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key ={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>
      <TodoCreateButton />
    </React.Fragment>
  );
}

export default App;

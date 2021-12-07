import React from "react";
import { TodoContext} from "../TodoContext/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { TodoList } from "../TodoList/index.js";
import {  TodoSearch } from "../TodoSearch/index.js";
import { CreateTodoButton } from "../CreateTodoButton/index.js";
import { TodoCounter} from "../TodoCounter/index.js";
function AppUI(){
  const {
    error, 
    loading, 
    deleteTodo, 
    completeTodo, 
    searchedTodos
  }=React.useContext(TodoContext)

return (    

<React.Fragment>
    <TodoCounter />
    <TodoSearch />

  <TodoList>
  {error && <p>Hubo un error</p>}
    {loading && <p>Esta cargando</p>}
    {(!loading && !searchedTodos.length) && <p>Crea tu primer todo</p>}
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

export {AppUI}
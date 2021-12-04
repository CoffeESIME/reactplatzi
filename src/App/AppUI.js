import React from "react";
import { TodoItem } from "../TodoItem/index.js";
import { TodoList } from "../TodoList/index.js";
import {  TodoSearch } from "../TodoSearch/index.js";
import { CreateTodoButton } from "../CreateTodoButton/index.js";
import { TodoCounter} from "../TodoCounter/index.js";
function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}){
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

export {AppUI}
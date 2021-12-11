import React from "react";
import { TodoContext } from "../TodoContext/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { TodoList } from "../TodoList/index.js";
import { TodoSearch } from "../TodoSearch/index.js";
import { CreateTodoButton } from "../CreateTodoButton/index.js";
import { TodoCounter } from "../TodoCounter/index.js";
import { Modal } from "../Modal/index.js";
import { TodoForm } from "../TodoForm/index.js";
import {LoadingTodo} from "../LoadingTodo/index.js"
import { ModalEdit } from "../ModalEdit/index.js";
import {EditTodoForm} from "../EditTodoForm/index.js"
function AppUI() {
  const {
    error,
    loading,
    deleteTodo,
    completeTodo,
    searchedTodos,
    openModal,
    setOpenModal,
    openModalEdit,
    setOpenModalEdit,
    handleClickEdit,
   totalTodos
  } = React.useContext(TodoContext);

  return (
    <React.Fragment >
      <div className="bg-yellow-400 h-screen">
      <TodoCounter />
      <TodoSearch />

      <TodoList 
      loading={loading}
      searchedTodos={searchedTodos}
      >
        {error && <p>Hubo un error</p>}
        {loading && <LoadingTodo/> }
        {!loading && !searchedTodos.length && !!totalTodos && <p className="font-mono text-white text-4xl text-center pt-4 font-black">Ninguna Tarea coincide con tu busqueda :C</p>}
        {!loading && !searchedTodos.length && !totalTodos &&<p className="font-mono text-white text-4xl text-center pt-4 font-black">Crea tu primer todo</p>}

        {!loading && searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            completeTodo={() => completeTodo(todo.text)}
            deleteTodo={() => deleteTodo(todo.text)}
            setOpenModalEdit={setOpenModalEdit}
            handleClickEdit={handleClickEdit}
            
          />
        ))}
      </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm></TodoForm>
        </Modal>
      )}
      {!!openModalEdit && (
        <ModalEdit>
          <EditTodoForm></EditTodoForm>
        </ModalEdit>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
      </div>
    </React.Fragment>
  );
}

export { AppUI };

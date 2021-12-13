import React from "react";
import { useTodos} from "./useTodos.js";
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
import { TodoHeader } from "../TodoHeader/index.js";
function App() {

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
   totalTodos,
   completedTodos,
   searchValue, 
   setSearchValue,
    addTodo,
      tareaEditar,
      editTodoText
  } = useTodos();

  return (
    <React.Fragment >
    <div className="bg-yellow-400 h-screen">
      <TodoHeader>
      <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
    <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>
      <TodoList
      error={error}
      loading={loading}
      searchedTodos={searchedTodos}
      totalTodos={totalTodos}
      onError={()=><p>Hubo un error</p>}
      onLoading={()=><LoadingTodo/>}
      onEmptyTodos={()=><p className="font-mono text-white text-4xl text-center pt-4 font-black">Crea tu primer todo</p>}
      onEmptySearch={()=> <p className="font-mono text-white text-4xl text-center pt-4 font-black">Ninguna Tarea coincide con tu busqueda :C</p>}
      render={(todo) => (
        <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          completeTodo={() => completeTodo(todo.text)}
          deleteTodo={() => deleteTodo(todo.text)}
          setOpenModalEdit={setOpenModalEdit}
          handleClickEdit={handleClickEdit}
          
        />
      )}
      />
    {/* <TodoList 
    loading={loading}
    searchedTodos={searchedTodos}
    >
      
    </TodoList> */}
    {!!openModal && (
      <Modal>
        <TodoForm
        addTodo={addTodo}
        setOpenModal={setOpenModal}
        ></TodoForm>
      </Modal>
    )}
    {!!openModalEdit && (
      <ModalEdit>
        <EditTodoForm
        tareaEditar={tareaEditar}
        editTodoText={editTodoText}
        setOpenModalEdit={setOpenModalEdit}
        ></EditTodoForm>
      </ModalEdit>
    )}
    <CreateTodoButton setOpenModal={setOpenModal} />
    </div>
  </React.Fragment>
    
  );
}

export default App;

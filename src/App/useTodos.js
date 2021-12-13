import { useState, useEffect } from "react";
import axios from "axios";


function useTodos() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [todos, setTodos] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [openModal,setOpenModal ]=useState(false);
  const [openModalEdit,setOpenModalEdit ]=useState(false)
  const [tareaEditar, setTareaEditar]=useState('')
  const completedTodos = todos.filter((todo) => todo.completed==='1').length;
  
  const totalTodos = todos.length;
  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  useEffect(() => {
    try {
      setTimeout(() => {
        console.log('cuseEffect')
        axios.get(`http://192.168.1.76:4000/todos`).then((res) => {
          const tareas = res.data;
          setTodos(tareas);
        });
        setLoading(false);
      }, 1000);
    } catch (error) {
      setError(error);
    }
  }, [setTodos]);


  const volverActual=()=>{
    try {
      setLoading(true)
      setTimeout(() => {
        axios.get(`http://192.168.1.76:4000/todos`).then((res) => {
          const tareas = res.data;
          setTodos(tareas);
        });
        setLoading(false);
      },500);
    } catch (error) {
      setError(error);
    }
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = 1;
    // todos[todoIndex]= {
    //   text: todos[todoIndex].text,
    // completed:true}
    axios.post(`http://192.168.1.76:4000/todos/${text}`, {
      tarea: newTodos[todoIndex].text,
      completed: 1,
    });
    setTodos(newTodos);
    volverActual();
  };
  
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    axios.delete(`http://192.168.1.76:4000/todos/${text}`);
    setTodos(newTodos);
  };
  
  const addTodo=(text)=>{
    const newTodos=[...todos];
    newTodos.push({
      completed: false,
      text
    })
    setTodos(newTodos)
    axios.post(`http://192.168.1.76:4000/todos`, {
      tarea: text,
      completada: 0,
    });
  }
  const editTodoText=(text1)=>{
    const todoIndex = todos.findIndex((todo) => todo.text === tareaEditar);
    const newTodos = [...todos];
    newTodos[todoIndex].text = text1;
    newTodos[todoIndex].completed = 0;
    setTodos(newTodos);
    // todos[todoIndex]= {
    //   text: todos[todoIndex].text,
    // completed:true}
sendEdit(newTodos[todoIndex].text)
  }
const sendEdit=(text)=>{

  axios.post(`http://192.168.1.76:4000/todos/update/${tareaEditar}`, {
    tareaDespues:text,
    tareaAntes: tareaEditar,
  });
}
  const handleClickEdit=(text)=>{
    setOpenModalEdit(true);
    setTareaEditar(text)
  }
  return (
    {
        error,
        loading,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        addTodo,
        openModal,
        setOpenModal,
        openModalEdit,
        setOpenModalEdit, 
        handleClickEdit,
        tareaEditar,
        editTodoText
      }
  );
}

export {useTodos};

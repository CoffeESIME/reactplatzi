import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'
function TodoForm(){
    const [newTodoValue, setNewTodoValue]=React.useState('')
    const {
        addTodo,
        setOpenModal,
    }= React.useContext(TodoContext)

    const onCancel=()=>{
        setOpenModal(false);
    }
    const onSubmit=(event)=>{
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false);

    }

    const onChange=(event)=>{
        setNewTodoValue(event.target.value)
    }



    return (
        <form onSubmit={onSubmit}>
            <label>Nueva Tarea</label>
            <textarea
            placeholder="Nueva Tarea"
            value={newTodoValue}
            onChange={onChange}>
            </textarea>
            <div className="TodoForm-buttonContainer">
                <button 
                className="TodoForm-button button-cancel"
                onClick={onCancel}
                type="button">Cancelar</button>
                <button 
                className="TodoForm-button button-add"
                type="submit"
                >Añadir</button>
            </div>
        </form>
    );
}

export {TodoForm}
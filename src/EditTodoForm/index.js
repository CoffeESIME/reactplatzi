import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoFormEdit.css'
function EditTodoForm(){
    const [TodoEdit, setTodoEdit]=React.useState('')
    const {
        setOpenModalEdit,
        tareaEditar,
        editTodoText
    }= React.useContext(TodoContext)

    const onCancel=()=>{
        setOpenModalEdit(false);
    }
    const onSubmit=(event)=>{
        event.preventDefault();
        editTodoText(TodoEdit)
         setOpenModalEdit(false);
    }

    const onChange=(event)=>{
        setTodoEdit(event.target.value)
    }



    return (
        <form onSubmit={onSubmit}>
            <label>Editar {tareaEditar}</label>
            <textarea
            placeholder="Actualizar Tarea"
            value={TodoEdit}
            onChange={onChange}>
            </textarea>
            <div className="TodoForm-buttonContainer">
                <button 
                className="TodoForm-button button-cancel"
                onClick={onCancel}
                type="button">Cancelar</button>
                <button 
                className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
                type="submit"
                >Terminar</button>
            </div>
        </form>
    );
}

export {EditTodoForm}
import React from "react";
import './TodoForm.css'
function TodoForm({
    addTodo,
    setOpenModal,
}){
    const [newTodoValue, setNewTodoValue]=React.useState('')

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
                className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
                type="submit"
                >Añadir</button>
            </div>
        </form>
    );
}

export {TodoForm}
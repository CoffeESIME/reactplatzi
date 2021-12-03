import React from "react";
import './CreateTodoButton.css'
function TodoCreateButton(){

    const onClickButton=(msg)=>{
        alert(msg);
    }
    return(
        <button 
        className='CreateTodoButton'
        onClick={()=>onClickButton("aparecera modal")}
        >
            +
        </button>
    );
}

export {TodoCreateButton};
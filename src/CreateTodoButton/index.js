import React from "react";
import './CreateTodoButton.css'
import {AiFillPlusCircle} from "react-icons/ai";
 
function CreateTodoButton(props){

    const onClickButton=()=>{
        props.setOpenModal(prevState=>!prevState);
    }
    return(
        <button 
        className='CreateTodoButton self-center rounded-full h-16 w-16 flex items-center justify-center fixed align-middle	text-center'
        onClick={onClickButton}
        ><AiFillPlusCircle color="#5DADE2"/></button>
    );
}

export {CreateTodoButton};
import React from "react";
import './TodoItem.css'
function TodoItem (props){
    let class1 = 'Icon Icon-check';
    let class2 = 'TodoItem-p';
    if (props.completed===true) {
      class1 += ' Icon-check--active';
      class2 += ' TodoItem-p--complete'
    }
    const onComplete=()=>{
     alert('tendremos completada el ToDo')   
    }

    const onDelete=()=>{
        alert('Borraste el ToDo')   
       }


    return (
       
        <li className='TodoItem'>
            <span 
            className={class1}
            onClick={onComplete}
            > ✓</span>
            <p  className={class2}>{props.text}</p>
            <span  
            className="Icon Icon-delete"
            onClick={onDelete}
            >X</span>
        </li>
    );
}

export {TodoItem};
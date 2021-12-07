import React from "react";
import './TodoItem.css'
function TodoItem (props){
    let class1 = 'Icon Icon-check';
    let class2 = 'TodoItem-p';
    if (props.completed==='1') {
      class1 += ' Icon-check--active';
      class2 += ' TodoItem-p--complete'
    }

    return (
       
        <li className='TodoItem'>
            <span 
            className={class1}
            onClick={props.onComplete}
            > ✓</span>
            <p  className={class2}>{props.text}</p>
            <span  
            className="Icon Icon-delete"
            onClick={props.onDelete}
            >X</span>
        </li>
    );
}

export {TodoItem};
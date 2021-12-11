import React from "react";
import "./TodoItem.css";
import { MdDeleteForever } from "react-icons/md";
import { GrInProgress } from "react-icons/gr";
import { FaAward } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";

function TodoItem(props) {
  let class1 = "Icon Icon-check cursor-pointer ";
  let class2 = "TodoItem-p text-center font-mono";
  let item = <GrInProgress onClick={props.completeTodo}></GrInProgress>;
  if (props.completed === "1") {
    class1 += " Icon-check--active";
    class2 += " TodoItem-p--complete ";
    item = <FaAward ></FaAward>;
  }
  return (
    <li className="TodoItem mx-4 my-6 ">
      <span className={class1} onClick={props.completeTodo}>
        {item}
      </span>
      <p className={class2}>{props.text}</p>
      <span className="Icon Icon-delete" onClick={props.deleteTodo}>
        <MdDeleteForever onClick={props.deleteTodo} />
      </span>
      <span className="Icon-Edit flex absolute right-0 cursor-pointer">
        <MdModeEdit className=" h-10 w-10  cursor-pointer" onClick={()=>props.handleClickEdit(props.text)}></MdModeEdit>
      </span>
    </li>
  );
}

export { TodoItem };

import React from "react";
import { TodoContext } from "../TodoContext";

function TodoCounter(){
const {totalTodos, completedTodos}= React.useContext(TodoContext)
    return(
        <div>
            <div className=" font-mono text-white text-4xl text-center pt-4 font-black">
                Bienvenido a tu lista de tareas <br/>
                Hazlas por favor <br/>
                O moriré
            </div>
            <h2 className="text-center font-mono text-white text-4xl py-4">Has completado {completedTodos} de {totalTodos} Tareas</h2>
            </div>
    );
}

export {TodoCounter};
import React from "react";
import './TodoList.css'
function TodoList(props){
    let estilo="grid grid-cols-1 justify-around";
    if (!props.loading && !!props.searchedTodos.length){
        estilo="grid grid-cols-2 justify-around"
    }
    return (
        <section>
            <ul className=" mx-16 ">
                <div className={estilo}> 
                {props.error && props.onError()}
                {props.loading &&  props.onLoading()}
                {!props.loading && !props.searchedTodos.length && !!props.totalTodos && props.onEmptyTodos()}
                {!props.loading && !props.searchedTodos.length && !props.totalTodos && props.onEmptySearch()}
                {!props.loading && props.searchedTodos.map(props.render)}
                </div>
            </ul>
        </section>
    );
}

export {TodoList};
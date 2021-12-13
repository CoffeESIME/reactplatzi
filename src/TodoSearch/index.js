import React from "react";
import './TodoSearch.css'
function TodoSearch({searchValue, setSearchValue}) {
  const onSearchValueChange=(event)=>{
    console.log(event.target.value);
    setSearchValue(event.target.value)
  }
  return (
    <div className="bg-yellow-400 mx-16">
    <input 
    className="TodoSearch font-mono border py-2 px-3 bg-yellow-700 mx-16"
    placeholder="Búsqueda"
    value={searchValue}
    onChange={onSearchValueChange}
    />
    </div>
  );
}

export { TodoSearch };

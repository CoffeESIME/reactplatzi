import React from "react";
import './TodoSearch.css'
function TodoSearch({searchValue, setSearchValue, loading}) {
  const onSearchValueChange=(event)=>{
    console.log(event.target.value);
    setSearchValue(event.target.value)
  }
  return (
    <div className="bg-yellow-400 mx-16">
    <input 
    className={`TodoSearch font-mono border py-2 px-3 bg-yellow-700 mx-16 ${!!loading && "opacity-75"}`}
    placeholder="Búsqueda"
    value={searchValue}
    onChange={onSearchValueChange}
    disabled={loading}
    />
    </div>
  );
}

export { TodoSearch };

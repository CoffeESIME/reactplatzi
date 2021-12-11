import React from "react";
function LoadingTodo(){
    return(
        <div className="flex items-center justify-center space-x-2 animate-pulse py-4">
        <div className="w-24 h-24 bg-yellow-800 rounded-full"></div>
        <div className="w-24 h-24 bg-yellow-800 rounded-full"></div>
        <div className="w-24 h-24 bg-yellow-800 rounded-full"></div>
    </div>
    
    );
}

export {LoadingTodo}
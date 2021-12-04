import React from "react";

function Tag({ children }) {
  return (
    <div
      className={`flex 
        text-sm text-gray-600 
        bg-gray-200 rounded 
        transition duration-150 ease-linear 
        hover:text-gray-700 border 
        border-gray-400 hover:bg-transparent 
        cursor-pointer py-0.5 px-2`}
    >
      {children}
    </div>
  );
}

export default Tag;

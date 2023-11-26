// ToDo.jsx
import React from 'react'
import { BiEdit } from "react-icons/bi"
import { AiFillDelete } from "react-icons/ai"

const ToDo = ({ text, updateMode, deleteToDo }) => {
  const handleDelete = () => {
    console.log("Delete button clicked");
    deleteToDo();
  };

  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className="icons">
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete className="icon" onClick={handleDelete} />
      </div>
    </div>
  );
}

export default ToDo;

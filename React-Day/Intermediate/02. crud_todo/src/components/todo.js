import React from "react";

const Todo = (props) => {
  const { todo, onClick } = props;
  return (
    <li
      onClick={onClick}
      style={{ textDecoration: todo.completed ? "line-through" : "none" }}
    >
      {todo.text}
    </li>
  );
};

export default Todo;

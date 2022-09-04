import React from "react";
import Todo from "./todo";

const Todolist = (props) => {
  const { todos, filter, handleToggle } = props;

  let all_todos;
  if (filter === "all") {
    all_todos = todos;
  } else if (filter === "active") {
    all_todos = todos.filter((todo) => !todo.completed);
  } else if (filter === "completed") {
    all_todos = todos.filter((todo) => todo.completed);
  } else {
    all_todos = todos;
  }

  return (
    <ul>
      {all_todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onClick={() => handleToggle(todo.id)} />
      ))}
    </ul>
  );
};

export default Todolist;

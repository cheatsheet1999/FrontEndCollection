import React, { useState } from "react";
import Todolist from "./components/todolist";
import AddTodo from "./components/addTodo";
import Filter from "./components/filter";

const App = () => {
  let id_seed = 3;

  // 1. Create a state variable called "todos" that is an array of objects.
  const [todos, setTodos] = useState([
    { id: 0, text: "Learn React", completed: true },
    { id: 1, text: "Learn TypeScript", completed: false },
    { id: 2, text: "Learn NodeJS", completed: false },
  ]);

  const [filter, setFilter] = useState("all");

  const addTodo = (todo) => {
    let new_todo = { id: id_seed++, text: todo, completed: false };
    setTodos([...todos, new_todo]);
  };

  const handleFilter = (status) => {
    setFilter(status);
  };

  const handleToggle = (index) => {
    let new_todos = [...todos];
    new_todos[index].completed = !new_todos[index].completed;
    setTodos(new_todos);
  };

  // mark all todos as completed
  const handleAllComplete = () => {
    let new_todos = [...todos];
    new_todos.forEach((todo) => {
      todo.completed = true;
    });
    setTodos(new_todos);
  };
 
  const handleAllActive = () => {
    let new_todos = [...todos];
    new_todos.forEach((todo) => {
      todo.completed = false;
    });
    setTodos(new_todos);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <AddTodo addTodo={addTodo} />
      <Todolist todos={todos} filter={filter} handleToggle={handleToggle} />
      <Filter filter={filter} handleFilter={handleFilter} />
      <button onClick={handleAllComplete}>All complete</button>
      <button onClick={handleAllActive}>All Active</button>
    </div>
  );
};

export default App;

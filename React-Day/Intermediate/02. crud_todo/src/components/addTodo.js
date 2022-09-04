import React, { useState } from "react";

const AddTodo = (props) => {
  const [input, setInput] = useState("");
  const { addTodo } = props;

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input !== "") {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleInput} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;

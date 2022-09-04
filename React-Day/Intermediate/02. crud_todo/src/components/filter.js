import React from "react";

const Filter = (props) => {
  const { filter, handleFilter } = props;

  return (
    <p>
      <b>Show:</b>
      {filter === "all" ? (
        <span>All</span>
      ) : (
        <button onClick={() => handleFilter("all")}>All</button>
      )}

      {filter === "active" ? (
        <span>Active</span>
      ) : (
        <button onClick={() => handleFilter("active")}>Active</button>
      )}

      {filter === "completed" ? (
        <span>Completed</span>
      ) : (
        <button onClick={() => handleFilter("completed")}>Completed</button>
      )}
    </p>
  );
};

export default Filter;

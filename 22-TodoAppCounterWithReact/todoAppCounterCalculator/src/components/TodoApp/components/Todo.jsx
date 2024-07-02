import React from "react";

const Todo = ({ todo, todos, setTodos }) => {
  return (
    <li>
      {todo.todo} -{" "}
      <button
        onClick={() => {
          let arr = todos.filter((elem) => elem.id != todo.id);
          setTodos(arr);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default Todo;

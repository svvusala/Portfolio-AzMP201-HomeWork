import React from "react";
import Todo from "./Todo";

const Footer = ({ getData, todos, setTodos }) => {
  return (
    <ul>
      ToDos
      {todos.map((elem) => {
        return <Todo todo={elem} todos={todos} setTodos={setTodos} />;
      })}
    </ul>
  );
};

export default Footer;

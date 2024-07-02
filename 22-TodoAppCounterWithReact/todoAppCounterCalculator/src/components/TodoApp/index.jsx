import React, { useState } from "react";
import Header from "./components/Header";
import "./todoapp.css";
import Footer from "./components/Footer";

const TodoApp = () => {
  function getData(data) {
    console.log(data);
  }

  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Header todos={todos} setTodos={setTodos} />
      <Footer getData={getData} todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default TodoApp;

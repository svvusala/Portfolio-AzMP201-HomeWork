import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Header = ({ todos, setTodos }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          console.log(setInputValue(e.target.value));
        }}
      />
      <button
        onClick={() => {
          console.log(inputValue);
          setInputValue("");
          //   todos.push(inputValue);

          let obj = {
            id: uuidv4(),
            todo: inputValue,
          };
          setTodos([...todos, obj]);
          console.log(todos);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Header;

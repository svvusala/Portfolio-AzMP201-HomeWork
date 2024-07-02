import React from "react";

const Decrement = ({ count, setCount }) => {
  return (
    <button className="buttons minus"
      onClick={() => {
        setCount(--count);
      }}
    >
      -
    </button>
  );
};

export default Decrement;

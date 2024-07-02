import React from "react";

const Increment = ({ count, setCount }) => {
  return (
    <button
      className="buttons plus"
      onClick={() => {
        setCount(count++);
      }}
    >
      +
    </button>
  );
};

export default Increment;

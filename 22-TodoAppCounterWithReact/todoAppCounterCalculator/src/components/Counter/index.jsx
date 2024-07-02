import React from "react";
import Decrement from "../Decrement";
import Count from "../Count";
import Increment from "../Increment";
import "../style.css";

const Counter = ({ count, setCount }) => {
  return (
    <div className="allcounter">
      <div>
        <p>Counter</p>
      </div>

      <Count count={count} />
      <div className="allcounter flex">
        <Decrement count={count} setCount={setCount} />
        <Increment count={count} setCount={setCount} />
      </div>

    </div>
  );
};

export default Counter;

import React from "react";

function Count({ number, increase, decrease }) {
  return (
    <>
      <div>{number}</div>
      <div>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
    </>
  );
}

export default Count;

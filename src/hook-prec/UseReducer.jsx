import React, { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 1:
      return state + 1;
    case 2:
      return state + 2;
    case 3:
      return state + 3;
    case "reset":
      return 0;
    default:
      return;
  }
};
// console.log("component re render");
const UseReducer = () => {
  //reducer is function
  //initial state can be number ,object,array
  const [ans, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      {ans}
      <br />
      <button onClick={() => dispatch(1)}>Click to add 1</button>
      <button onClick={() => dispatch(2)}>Click to add 2</button>
      <button onClick={() => dispatch(3)}>Click to add 3</button>
      <button onClick={() => dispatch("reset")}>Click to reset</button>
    </>
  );
};

export default UseReducer;

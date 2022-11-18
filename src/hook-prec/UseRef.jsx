import React, { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);
  const handleClick = () => {
    // console.log(inputRef.current.value);
    // inputRef.current.focus();
    inputRef.current.value = " "; //for clear input
  };
  console.log("component re render");
  return (
    <div>
      <h1>Enter somting</h1>
      <input type="text" placeholder="Enter Somting.." ref={inputRef} />
      <button onClick={handleClick}>Change name</button>
    </div>
  );
};

export default UseRef;

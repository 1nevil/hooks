import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [no, setNo] = useState(0);

  //this will render one in the time
  //   useEffect(() => {
  //     setCount((prev) => prev + 1);
  //   }, []);

  //every time no change this will re render
  useEffect(() => {
    setCount((prev) => prev + 1);
  }, [no]);
  // console.log("component re render");
  return (
    <div>
      component rendered {count} time
      <br />
      Your number is : {no}
      <br />
      <button
        onClick={() => {
          setNo(no + 1);
        }}
      >
        Click to increment
      </button>
    </div>
  );
};

export default UseEffect;

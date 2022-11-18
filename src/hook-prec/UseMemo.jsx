import React, { useState, useEffect, useMemo } from "react";

const UseMemo = () => {
  const [no1, setNo1] = useState(0);
  const [no2, setNo2] = useState(0);
  const [name, setName] = useState("");
  const [disp, setDisp] = useState(true);

  const handleChange = (e) => {
    setName(e.target.value);
    setDisp(false);
  };

  const ans = useMemo(() => {
    setDisp(true);
    return add(no1, no2);
  }, [no1, no2]);
  
  console.log("component re render");
  return (
    <>
      {disp ? (
        <h1> Render only when number is change (open Console) :)</h1>
      ) : (
        <h1>add function now not re render </h1>
      )}
      <input
        type="text"
        placeholder="Enter number one.."
        onChange={(e) => setNo1(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Enter number two.."
        onChange={(e) => setNo2(e.target.value)}
      />
      <br />
      <input type="text" placeholder="Enter Name" onChange={handleChange} />
      <br />
      {ans}k
    </>
  );
};

//this will rerender when name is change we not need to rerender when name change
// const add = (no1, no2) => {
//   console.log("render");
//   return Number(no1) + Number(no2);
// };

const add = (no1, no2) => {
  console.log("render");
  return Number(no1) + Number(no2);
};

export default UseMemo;

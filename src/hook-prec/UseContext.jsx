import React, { useContext, useEffect, useState, createContext } from "react";

// const UseContext = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       perante value : {count}
//       <br />
//       <UseContextChild setCount={setCount} />
//     </>
//   );
// };
// export const UseContextChild = ({ setCount }) => {
//   const [rendercount, setRenderCount] = useState(0);
//   useEffect(() => {
//     setRenderCount(rendercount + 1);
//   }, []);
//   return (
//     <>
//       Child render count : {rendercount}
//       <br />
//       <br />
//       <UseContextGrandChild setCount={setCount} />
//     </>
//   );
// };

// export const UseContextGrandChild = ({ setCount }) => {
//   return (
//     <div>
//       <button onClick={() => setCount(1)}>
//         Click to change from the grand child{" "}
//       </button>
//     </div>
//   );
// };
const AppContext = createContext(null);

const UseContext = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      perante value : {count}
      <br />
      <AppContext.Provider value={{ count, setCount }}>
        <UseContextChild />
      </AppContext.Provider>
    </>
  );
};

export const UseContextChild = () => {
  const [rendercount, setRenderCount] = useState(0);
  useEffect(() => {
    setRenderCount(rendercount + 1);
  }, []);
  console.log("re-render usecontext child");
  return (
    <>
      Child render count : {rendercount}
      <br />
      <br />
      <UseContextGrandChild />
    </>
  );
};

export const UseContextGrandChild = () => {
  const { setCount } = useContext(AppContext);
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Click to change from the grand child
      </button>
    </div>
  );
};

export default UseContext;

import React, { useState, useEffect } from "react";

const FunctionalLifecycleExample = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Component is mounted!");
      return () => {
      console.log("Component will unmount!");
    };
  }, []); 
  useEffect(() => {
    console.log("Component has been updated!");
     return () => {
      console.log("Component will unmount (update cleanup)!");
    };
  }, [count]); 
  console.log("Rendering...");

  return (
    <div>
      <h1>Functional Component Lifecycle Example</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default FunctionalLifecycleExample;
import { useState } from "react";
import classes from "./counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);

  return (
    <>
      <div>{count}</div>
      <button className={classes.btn} onClick={increment}>
        increment
      </button>
    </>
  );
};

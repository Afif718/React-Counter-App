import { useState } from "react";
import styles from "./Buttons.module.css";
import CountNumber from "./CountNumber";

const Buttons = () => {
  const [initialCount, setCount] = useState(0);

  const handelIncrement = () => {
    setCount(initialCount + 1);
  };

  const handelReset = () => {
    setCount(0);
  };

  const handelDecrement = () => {
    setCount(initialCount - 1);

    if (initialCount <= 0) {
      setCount(0);
    }
  };
  return (
    <>
      <CountNumber iniCountNum={initialCount} />

      <button onClick={handelIncrement} className={styles.buttons}>
        Increment
      </button>
      <button onClick={handelReset} className={styles.buttons}>
        Reset
      </button>
      <button onClick={handelDecrement} className={styles.buttons}>
        Decrement
      </button>
    </>
  );
};

export default Buttons;

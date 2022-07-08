import { useAppDispatch } from "../app/hooks";
import { decrement, increment } from "../features/counterSlice";
import styles from "./Counter.module.css";
import { RootState } from "../app/store";
import { useSelector } from "react-redux";
export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement(2))}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  );
}

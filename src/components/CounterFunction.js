import React, { useEffect, useState } from "react";
import { store } from "../store/store";
import { increment, decrement } from "../store/action/CounterAction";
function CounterFunction() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    updateState();
    store.subscribe(updateState);
  });

  function updateState() {
    const state = store.getState();
    setCounter(state.counter);
  }
  const onIncrement = () => {
    store.dispatch(increment());
  };

  const onDecrement = () => {
    store.dispatch(decrement());
  };
  return (
    <div>
      <div>CounterFunction component</div>
      <div>{counter}</div>
      <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
      </div>
    </div>
  );
}

export default CounterFunction;

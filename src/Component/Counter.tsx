import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './Counter.module.css';
import {
  increment, 
  decrement, 
  incrementAmount, 
  incrementAsyncThunk, 
  incrementAsyncSaga,
  incermentIfOdd
} from '../Redux/Actions/CounterAction';

export function Counter() {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState('2');
  const {counter} = useSelector((state: any) => state);
  const incrementValue = Number(amount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{counter}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          type='number'
          value={amount}
          onChange={(e) => {setAmount(e.target.value)}}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incermentIfOdd(counter))}
        >
          Add If Odd
        </button>
      </div>
      <div className={styles.row}>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsyncThunk())}
        >
          Add Async Thunk
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsyncSaga())}
        >
          Add Async Saga
        </button>
      </div>
    </div>
  );
}

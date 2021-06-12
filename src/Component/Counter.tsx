import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './Counter.module.css';
import {
  INCREMENT,
  DECREMENT,
  ASYNC_INCREMENT,
  ASYNC_INCREMENT_AMOUNT,
  INCREMENT_AMOUNT
} from '../Redux/ActionTypes'

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
          onClick={() => dispatch({type: DECREMENT})}
        >
          -
        </button>
        <span className={styles.value}>{counter}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch({type: INCREMENT})}
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
          onChange={(e) => {console.log(e); setAmount(e.target.value)}}
        />
        <button
          className={styles.button}
          onClick={() => dispatch({
            type: INCREMENT_AMOUNT,
            payload: incrementValue
          })}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          //onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          //onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}

import React, { useState, FC } from 'react';
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
import {AppDispatch} from '../Redux/Store';

interface State {
  counter: number
} 

const Counter: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [amount, setAmount] = useState('2');
  const {counter} = useSelector((state: State) => state);
  const incrementValue = Number(amount) || 0;
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          data-testid='decrement'
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value} data-testid='counterValue'>{counter}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          data-testid='increment'
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
          data-testid='amount'
          onChange={(e) => {setAmount(e.target.value)}}
        />
        <button
          className={styles.button}
          data-testid='incrementAmount'
          onClick={() => dispatch(incrementAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.button}
          data-testid='incrementOdd'
          onClick={() => dispatch(incermentIfOdd(counter))}
        >
          Add If Odd
        </button>
      </div>
      <div className={styles.row}>
        <button
          className={styles.asyncButton}
          data-testid='incrementAsyncThunk'
          onClick={() => dispatch(incrementAsyncThunk())}
        >
          Add Async Thunk
        </button>
        <button
          className={styles.asyncButton}
          data-testid='incrementAsyncSaga'
          onClick={() => dispatch(incrementAsyncSaga())}
        >
          Add Async Saga
        </button>
      </div>
    </div>
  );
}

export default Counter;

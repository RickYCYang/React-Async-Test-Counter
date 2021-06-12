/* eslint-disable no-constant-condition */
import { put } from 'redux-saga/effects'
import { INCREMENT_AMOUNT } from '../Actions/ActionTypes';
import { getRandomNumber } from '../../Service/CounterAPI';

export function* IncrementAmountAsyncSaga(action: any) {
  let randomNumber = yield getRandomNumber();
  yield put({ 
    type: INCREMENT_AMOUNT,
    payload: randomNumber
  });
}
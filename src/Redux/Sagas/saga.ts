/* eslint-disable no-constant-condition */

import { takeEvery } from 'redux-saga/effects'
import {
  INCREMENT_AMOUNT_ASYNC_SAGA
} from '../Actions/ActionTypes';
import {IncrementAmountAsyncSaga} from './CounterSaga';

export default function* rootSaga() {
  yield takeEvery(INCREMENT_AMOUNT_ASYNC_SAGA, IncrementAmountAsyncSaga);
}

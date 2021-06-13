import {
    INCREMENT,
    DECREMENT,
    INCREMENT_AMOUNT,
    INCREMENT_AMOUNT_ASYNC_SAGA
} from './ActionTypes'
import {getRandomNumber} from '../../Service/CounterAPI';
import {AppDispatch} from '../Store'

type SyncFunc = {
    type: string,
    payload?: number
};

export const increment = (): SyncFunc => {
    return ({type: INCREMENT });
}

export const decrement = (): SyncFunc => {
    return ({type: DECREMENT });
}

export const incrementAmount = (amount: number): SyncFunc => {
    return ({type: INCREMENT_AMOUNT, payload: amount});
}

export const incrementAsyncThunk = () => async(dispatch: AppDispatch) => {
    const randomNumber = await getRandomNumber();
    dispatch({
        type: INCREMENT_AMOUNT,
        payload: randomNumber
    });
}

export const incrementAsyncSaga = () => {
    return({ type: INCREMENT_AMOUNT_ASYNC_SAGA });
}


export const incermentIfOdd = (number: number): SyncFunc => {
    if(number % 2 === 1) {
        return ({type: INCREMENT});
    } 
    else {
        return ({type: ""});
    }
}
import {
    INCREMENT,
    DECREMENT,
    INCREMENT_AMOUNT,
    INCREMENT_AMOUNT_ASYNC_SAGA
} from './ActionTypes'

import {getRandomNumber} from '../../Service/CounterAPI';

export const increment = () => {
    return ({type: INCREMENT });
}

export const decrement = () => {
    return ({type: DECREMENT });
}

export const incrementAmount = (amount: number) => {
    return ({type: INCREMENT_AMOUNT, payload: amount});
}

export const incrementAsyncThunk = () => async(dispatch: any) => {
    const randomNumber = await getRandomNumber();
    dispatch({
        type: INCREMENT_AMOUNT,
        payload: randomNumber
    });
}

export const incrementAsyncSaga = () => async(dispatch: any) => {
    dispatch({ type: INCREMENT_AMOUNT_ASYNC_SAGA });
}


export const incermentIfOdd = (number: number) => {
    if(number % 2 === 1) {
        return ({type: INCREMENT});
    } 
    else {
        return ({type: ""});
    }
}
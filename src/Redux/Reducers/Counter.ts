import {
    INCREMENT,
    DECREMENT,
    ASYNC_INCREMENT,
    INCREMENT_AMOUNT,
    ASYNC_INCREMENT_AMOUNT
} from '../ActionTypes'

const initState: any = {
    counter: 0
}

const Counter = (state = initState, action: any) => {
    switch (action.type) {
        case INCREMENT: {
            return {...state, counter: state.counter + 1}
        }
        case DECREMENT: {
            return {...state, counter: state.counter - 1}
        }
        case INCREMENT_AMOUNT: {
            return {...state, counter: state.counter + action.payload}
        }
        case ASYNC_INCREMENT: {
            return {...state, counter: state.counter + action.payload}
        }
        case ASYNC_INCREMENT_AMOUNT: {
            return {...state, counter: state.counter - 1}
        }
        default: {
            return state
        }
    }
}

export default Counter;
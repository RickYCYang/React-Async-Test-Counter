import {
    INCREMENT,
    DECREMENT,
    INCREMENT_AMOUNT
} from '../Actions/ActionTypes';

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
        default: {
            return state
        }
    }
}

export default Counter;
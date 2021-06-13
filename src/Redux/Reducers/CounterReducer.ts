import {
    INCREMENT,
    DECREMENT,
    INCREMENT_AMOUNT
} from '../Actions/ActionTypes';

interface State {
    counter: number
}

const initState: State = {
    counter: 0
}

const Counter = (state: State = initState, action: any) => {
    switch (action.type) {
        case INCREMENT: {
            return {...state, counter: state.counter + 1}
        }
        case DECREMENT: {
            return {...state, counter: state.counter - 1}
        }
        case INCREMENT_AMOUNT: {
            if(action.payload){
                return {...state, counter: state.counter + action.payload}
            }
            else {
                return state;
            }
        }
        default: {
            return state
        }
    }
}

export default Counter;
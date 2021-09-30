import * as types from '../../../Redux/Actions/ActionTypes'
import CounterReducer from '../../../Redux/Reducers/CounterReducer'

describe('Counter Reducer', () => { 
    test('Initial Reducer', () => {
        expect(CounterReducer(undefined, {})).toEqual({counter: 0})
    });

    test('should handle INCREMENT', () => {
        expect(
            CounterReducer(undefined, 
            {type: types.INCREMENT,}
        )).toEqual({counter: 1});
    });

    test('should handle DECREMENT', () => {
        expect(
            CounterReducer(undefined, 
            {type: types.DECREMENT,}
        )).toEqual({counter: -1});
    });

    test('should handle INCREMENT_AMOUNT', () => {
        expect(
            CounterReducer(undefined, 
            {
                type: types.INCREMENT_AMOUNT,
                payload: 5
            }
        )).toEqual({counter: 5});
    });
})
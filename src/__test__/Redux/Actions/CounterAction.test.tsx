import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as types from '../../../Redux/Actions/ActionTypes'
import * as actions from '../../../Redux/Actions/CounterAction';
import {getRandomNumber} from '../../../Service/CounterAPI';
jest.mock('../../../Service/CounterAPI');

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Redux/CounterAction', () => {
    test('increment', () => {
        const expectedAction = {
            type: types.INCREMENT
        }
        expect(actions.increment()).toEqual(expectedAction)
    });

    test('decrement', () => {
        const expectedAction = {
            type: types.DECREMENT
        }
        expect(actions.decrement()).toEqual(expectedAction)
    });

    test('incermentIfOdd', () => {
        const expectedActionIfOdd = {
            type: types.INCREMENT
        }
        const expectedActionIfEven = {
            type: ""
        }
        expect(actions.incermentIfOdd(1)).toEqual(expectedActionIfOdd);
        expect(actions.incermentIfOdd(0)).toEqual(expectedActionIfEven)
    });

    test('incrementAmount', () => {
        const expectedAction = {
            type: types.INCREMENT_AMOUNT,
            payload: 5
        }
        expect(actions.incrementAmount(5)).toEqual(expectedAction)
    });

    test('incrementAsyncSaga', () => {
        const expectedAction = {
            type: types.INCREMENT_AMOUNT_ASYNC_SAGA
        }
        expect(actions.incrementAsyncSaga()).toEqual(expectedAction)
    });

    test('incrementAsyncThunk', () => {
        (getRandomNumber as jest.Mock).mockImplementation(() => 10);
        const expectedActions = [{ 
            type: types.INCREMENT_AMOUNT,
            payload: 10
        }];
        const store = mockStore({counter: 0})
        return store.dispatch(actions.incrementAsyncThunk()).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        });
    });
})

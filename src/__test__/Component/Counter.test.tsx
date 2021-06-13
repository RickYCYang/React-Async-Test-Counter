import React from 'react';
import {Provider} from 'react-redux';
import Store from '../../Redux/Store';
import {createStore} from 'redux';
import CounterReducer from '../../Redux/Reducers/CounterReducer'
import { render, fireEvent, cleanup, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Counter from '../../Component/Counter';

describe('Test <Counter> Sync Button', () => {
    let store: any;
    let wrapper: any;
    beforeEach(() => {
        store = createStore(CounterReducer, {counter: 0})
        cleanup();
        wrapper = render(
            <Provider store={store}>
                <Counter/>
            </Provider>
        );
    });

    test('Initial Counter', () => {
        const counterValue = wrapper.getByTestId('counterValue')
        expect(counterValue.textContent).toBe("0");
    });

    test('Increase Counter', () => {
        const counterValue = wrapper.getByTestId('counterValue')
        const IncrementButton = wrapper.getByTestId('increment');
        fireEvent.click(IncrementButton);
        expect(counterValue.textContent).toBe("1");
    });
    
    test('Decrease Counter', () => {
        const counterValue = wrapper.getByTestId('counterValue')
        const decrementButton = wrapper.getByTestId('decrement');
        fireEvent.click(decrementButton);
        expect(counterValue.textContent).toBe("-1");
    });

    test('Type Amount', () => {
        const amount = wrapper.getByTestId('amount');
        userEvent.type(amount, '5');
        expect(amount).toHaveValue(5);
    });

    test('Increase Amount Counter', async() => {
        const amount = wrapper.getByTestId('amount');
        const amountIncrementButton = wrapper.getByTestId('incrementAmount');
        const counterValue = wrapper.getByTestId('counterValue');
        userEvent.type(amount, '5');
        fireEvent.click(amountIncrementButton);
        expect(counterValue.textContent).toBe('5');
    });

    test('Increase Counter If Odd', async() => {
        cleanup();
        store = createStore(CounterReducer, {counter: 1})
        const wrapper = render(
            <Provider store={store}>
                <Counter/>
            </Provider>
        );
        const oddButton = wrapper.getByTestId('incrementOdd');
        const counterValue = wrapper.getByTestId('counterValue');
        fireEvent.click(oddButton);
        expect(counterValue.textContent).toBe('2');
    });
});


describe('Test <Counter> Async Button', () => {
    let store: any;
    let wrapper: any;
    beforeEach(() => {
        cleanup();
        wrapper = render(
            <Provider store={Store}>
                <Counter/>
            </Provider>
        );
    });

    test('Increase by thunk', async() => {
        const thunkButton = wrapper.getByTestId('incrementAsyncThunk');
        fireEvent.click(thunkButton);
        let counterValue = await Number(screen.getByTestId('counterValue').textContent);
        expect(counterValue).toBeGreaterThanOrEqual(0);
    });

    test('Increase by saga', async() => {
        const sagaButton = wrapper.getByTestId('incrementAsyncSaga');
        fireEvent.click(sagaButton);
        let counterValue = await Number(screen.getByTestId('counterValue').textContent);
        expect(counterValue).toBeGreaterThanOrEqual(0);
    });
    
});
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Counter from './Reducers/CounterReducer';
import thunk from 'redux-thunk';
import saga from './Sagas/saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(Counter, applyMiddleware(thunk, sagaMiddleware));
sagaMiddleware.run(saga);

export default store;

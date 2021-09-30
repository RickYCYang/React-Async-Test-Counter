import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import Counter from "./Reducers/CounterReducer";
import thunk from "redux-thunk";
import saga from "./Sagas/saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, Counter);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  persistedReducer,
  applyMiddleware(thunk, sagaMiddleware)
);
sagaMiddleware.run(saga);

export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
export default store;

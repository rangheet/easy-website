import { createStore, applyMiddleware } from "redux";
import { reducer } from "./ducks";
import createSagaMiddleware from "redux-saga";
import { ParentWatcherSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(ParentWatcherSaga);

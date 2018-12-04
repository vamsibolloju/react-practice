import { createStore, applyMiddleware } from "redux";
import todosReducer from "./reducers/todosReducer";
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";

const sagaMidleware = createSagaMiddleware();
const store = createStore(todosReducer, applyMiddleware(sagaMidleware));

//action sagaa
const actionSaga = function*() {
  yield put({ type: "ADD_TODO", todo: { name: Date.now().toString() } });
};

// watcher saga
const sampleSaga = function*() {
  yield takeEvery("HELLO", actionSaga);
};
sagaMidleware.run(sampleSaga);

store.dispatch({ type: "HELLO" });
store.dispatch({ type: "HELLO" });

export default store;

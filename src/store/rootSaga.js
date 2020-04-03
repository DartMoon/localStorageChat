import {all, fork} from "redux-saga/effects";

import messageWatcher from "./Chat/saga";

const sagaArr = [
  messageWatcher
];

function* rootSaga() {
  yield all(sagaArr.map(saga => fork(saga)))
}

export default rootSaga;
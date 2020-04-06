import {all, fork} from "redux-saga/effects";

import messageWatcher from "./Chat/saga";
import authWatcher from "./Auth/saga";

const sagaArr = [
  authWatcher,
  messageWatcher
];

function* rootSaga() {
  yield all(sagaArr.map(saga => fork(saga)))
}

export default rootSaga;
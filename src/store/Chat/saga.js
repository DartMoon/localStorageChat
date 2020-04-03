import {takeEvery, put, select, call} from "redux-saga/effects";

import {api} from "../../api";
import {MESSAGE} from "./constants";
import {messageSelector} from "./selector";
import randomId from "../../utils/randomId";
import {addMessage, addMessageState} from "./actions";

function* setMessageWorker() {
  const {message} = yield select(messageSelector);

  yield put(addMessage({
    id: randomId(),
    message,
    date: new Date ()}))
}

function* fetchData() {
  const data = yield call(api.getChatData);

  yield put(addMessageState(data))
}

function* messageWatcher() {
  yield takeEvery(MESSAGE.LOAD, fetchData);
  yield takeEvery(MESSAGE.SET, setMessageWorker);
}

export default messageWatcher;
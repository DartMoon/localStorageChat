import {takeEvery, put, select, call, delay} from "redux-saga/effects";

import {api} from "../../api";
import {MESSAGE} from "./constants";
import {messageSelector} from "./selector";
import randomId from "../../utils/randomId";
import {addMessage, addMessageState} from "./actions";
import {userSelector} from "../Auth/selector";

function* setMessageWorker() {
  const {message} = yield select(messageSelector);
  const userInfo = yield select(userSelector);

  yield call(api.newMessagePost, {
    name: userInfo,
    id: randomId(),
    message,
    date: new Date ()});
}

function* fetchData() {
  while(true) {
    const data = yield call(api.getChatData);

    yield delay(1000);
    yield put(addMessageState(data))
  }
}

function* messageWatcher() {
  yield takeEvery(MESSAGE.LOAD, fetchData);
  yield takeEvery(MESSAGE.SET, setMessageWorker);
}

export default messageWatcher;
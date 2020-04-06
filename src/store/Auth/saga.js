import {takeLatest, takeEvery, put, select, call, fork, take, delay} from "redux-saga/effects";
import {AUTH} from "./constants";
import {authSelector} from "./selector";
import {api} from "../../api";
import randomId from "../../utils/randomId";
import {setAuthUser} from "./actions";

function* login() {
    const user =  yield call(api.userGet);

    yield put(setAuthUser(user))
}

function* setNewUser() {
  const authData = yield select(authSelector);

  yield call(api.newUserPost, {...authData, id: randomId()});
}

function* authWatcher() {
  yield takeLatest([AUTH.LOG_IN], login);
  yield take([AUTH.SIGN_IN]);
  yield call(setNewUser);
}

export default authWatcher;
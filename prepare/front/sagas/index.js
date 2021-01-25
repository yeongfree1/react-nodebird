import { all, call, fork, put, take } from 'redux-saga/effects';
import axios from 'axios';

function logInApi() {
  return axios.post('/api/login');
}

function* login() {
  try {
    const result = yield call(logInApi);
    yield put({
      type: 'LOGIN_IN_SUCCESS',
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: 'LOGIN_IN_FALURE',
      data: err.response.data,
    });
  }
}

function* watchLogin() {
  yield take('LOG_IN_REQUEST', login);
}

// 로그아웃
function logOutApi() {
  return axios.post('/api/logOut');
}

function* logOut() {
  try {
    const result = yield call(logOutApi);
    yield put({
      type: 'LOGIN_OUT_SUCCESS',
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: 'LOGIN_OUT_FALURE',
      data: err.response.data,
    });
  }
}

function* watchlogOut() {
  yield take('LOGIN_OUT_REQUEST', logOut);
}

export default function* rootSaga() {
  yield all([fork(watchLogin), fork(watchlogOut)]);
}

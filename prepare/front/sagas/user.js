/* eslint-disable no-unused-vars */
import { all, call, delay, fork, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function logInApi() {
  return axios.post('/api/login');
}

function* login() {
  try {
    yield delay(1000);
    // const result = yield call(logInApi);
    yield put({
      type: 'LOGIN_IN_SUCCESS',
      //   data: result.data,
    });
  } catch (err) {
    yield put({
      type: 'LOGIN_IN_FALURE',
      //   data: err.response.data,
    });
  }
}

// 로그아웃
function logOutApi() {
  return axios.post('/api/logOut');
}

function* logOut() {
  try {
    yield delay(1000);
    // const result = yield call(logOutApi);
    yield put({
      type: 'LOGIN_OUT_SUCCESS',
      //   data: result.data,
    });
  } catch (err) {
    yield put({
      type: 'LOGIN_OUT_FALURE',
      //   data: err.response.data,
    });
  }
}

function* watchLogin() {
  yield takeLatest('LOG_IN_REQUEST', login);
}

function* watchlogOut() {
  yield takeLatest('LOGIN_OUT_REQUEST', logOut);
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchlogOut)]);
}

import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_USERS_REQUEST } from '../constants/actionTypes';
import { fetchUsersSuccess, fetchUsersFailure } from '../actions/userActions';
import api from '../../api';

// Saga for fetching users
function* fetchUsersSaga() {
  try {
    const users = yield call(api.fetchUsers);
    yield put(fetchUsersSuccess(users));
  } catch (e) {
    yield put(fetchUsersFailure(e.message));
  }
}

// Watcher saga
function* userSagas() {
  yield takeLatest(FETCH_USERS_REQUEST, fetchUsersSaga);
}

export default userSagas;

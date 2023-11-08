import { all } from 'redux-saga/effects';
import userSagas from './userSagas';
import reportSagas from './reportSagas';

export default function* rootSaga() {
  yield all([
    userSagas(),
    reportSagas(),
  ]);
}

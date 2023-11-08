import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  CREATE_REPORT_REQUEST,
  FETCH_REPORTS_REQUEST,
  UPDATE_REPORT_REQUEST,
  DELETE_REPORT_REQUEST,
} from '../constants/actionTypes';
import api from '../../api';
import {
  fetchReportsFailure,
  fetchReportsSuccess,
  createReportSuccess,
  createReportFailure,
  updateReportSuccess,
  updateReportFailure,
  deleteReportSuccess,
  deleteReportFailure,
} from '../actions/reportActions';

// Saga for fetching reports
function* fetchReportsSaga() {
  try {
    const reports = yield call(api.fetchReports);
    yield put(fetchReportsSuccess(reports));
  } catch (e) {
    yield put(fetchReportsFailure(e.message));
  }
}

// Saga for creating a new report
function* createReportSaga(action) {
  try {
    // Prepare new report data
    const newReportData = {
      ...action.payload,
    };
    console.log('newReportData', newReportData);
    const newReport = yield call(api.createReport, newReportData);
    yield put(createReportSuccess(newReport));
  } catch (e) {
    yield put(createReportFailure(e.message));
  }
}

function* updateReportSaga(action) {
  try {
    const updatedReport = yield call(api.updateReport, action.payload);
    yield put(updateReportSuccess(updatedReport.data));
  } catch (e) {
    yield put(updateReportFailure(e.message));
  }
}

// Saga for deleting a report
function* deleteReportSaga(action) {
  try {
    yield call(api.deleteReport, action.payload);
    yield put(deleteReportSuccess(action.payload));
  } catch (e) {
    yield put(deleteReportFailure(e.message));
  }
}

// Watcher saga
function* reportSagas() {
  yield takeEvery(FETCH_REPORTS_REQUEST, fetchReportsSaga);
  yield takeLatest(CREATE_REPORT_REQUEST, createReportSaga);
  yield takeLatest(UPDATE_REPORT_REQUEST, updateReportSaga);
  yield takeEvery(DELETE_REPORT_REQUEST, deleteReportSaga);
}

export default reportSagas;
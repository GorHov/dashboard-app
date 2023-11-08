import {
  FETCH_REPORTS_REQUEST,
  FETCH_REPORTS_SUCCESS,
  FETCH_REPORTS_FAILURE,
  CREATE_REPORT_REQUEST,
  CREATE_REPORT_SUCCESS,
  CREATE_REPORT_FAILURE,
  DELETE_REPORT_SUCCESS,
  DELETE_REPORT_REQUEST,
  UPDATE_REPORT_FAILURE,
  DELETE_REPORT_FAILURE,
  UPDATE_REPORT_SUCCESS,
  UPDATE_REPORT_REQUEST,
} from "../constants/actionTypes";

export const fetchReportsRequest = () => ({
  type: FETCH_REPORTS_REQUEST,
});

export const fetchReportsSuccess = (reports) => ({
  type: FETCH_REPORTS_SUCCESS,
  payload: reports,
});

export const fetchReportsFailure = (error) => ({
  type: FETCH_REPORTS_FAILURE,
  payload: error,
});

export const createReportRequest = (reportData) => ({
  type: CREATE_REPORT_REQUEST,
  payload: reportData,
});

export const createReportSuccess = (newReport) => ({
  type: CREATE_REPORT_SUCCESS,
  payload: newReport,
});

export const createReportFailure = (error) => ({
  type: CREATE_REPORT_FAILURE,
  payload: error,
});

export const updateReportRequest = (reportData) => ({
  type: UPDATE_REPORT_REQUEST,
  payload: reportData,
});

export const updateReportSuccess = (updatedReport) => ({
  type: UPDATE_REPORT_SUCCESS,
  payload: updatedReport,
});

export const updateReportFailure = (error) => ({
  type: UPDATE_REPORT_FAILURE,
  payload: error,
});

export const deleteReportRequest = (reportId) => ({
  type: DELETE_REPORT_REQUEST,
  payload: reportId,
});

export const deleteReportSuccess = (reportId) => ({
  type: DELETE_REPORT_SUCCESS,
  payload: reportId,
});

export const deleteReportFailure = (error) => ({
  type: DELETE_REPORT_FAILURE,
  payload: error,
});
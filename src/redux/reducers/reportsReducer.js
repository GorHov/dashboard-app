import {
  FETCH_REPORTS_REQUEST,
  FETCH_REPORTS_SUCCESS,
  FETCH_REPORTS_FAILURE,
  CREATE_REPORT_REQUEST,
  DELETE_REPORT_FAILURE,
  DELETE_REPORT_SUCCESS,
  DELETE_REPORT_REQUEST,
  UPDATE_REPORT_FAILURE,
  UPDATE_REPORT_SUCCESS,
  UPDATE_REPORT_REQUEST,
} from "../constants/actionTypes";

const initialState = {
  reports: [],
  loading: false,
  error: null,
};

const reportsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REPORTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_REPORTS_SUCCESS:
      return {
        ...state,
        loading: false,
        reports: action.payload.data,
      };
    case FETCH_REPORTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_REPORT_REQUEST:
      return {
        ...state,
        reports: [...state.reports, action.payload],
      };
    case UPDATE_REPORT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UPDATE_REPORT_SUCCESS:
      return {
        ...state,
        loading: false,
        reports: state.reports.map((report) =>
          report.id === action.payload.id ? action.payload : report
        ),
      };
    case UPDATE_REPORT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_REPORT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DELETE_REPORT_SUCCESS:
      return {
        ...state,
        loading: false,
        reports: state.reports.filter((report) => report.id !== action.payload),
      };
    case DELETE_REPORT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reportsReducer;

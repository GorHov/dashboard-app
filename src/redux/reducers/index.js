import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import reportsReducer from './reportsReducer';

export default combineReducers({
  users: usersReducer,
  reports: reportsReducer,
});

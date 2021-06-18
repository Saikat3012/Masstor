//import here all Redux file 
import { combineReducers } from 'redux';
import user from './user';
import activityIndicator from './activityIndicator';

export default combineReducers({
    user,
    activityIndicator
});
import { combineReducers } from 'redux';
import auth from './auth'
import users from './users'
import classes from './class'
import courses from './courses';


const rootReducer = combineReducers({
    auth,
    users,
    classes,
    courses
});
export default rootReducer;
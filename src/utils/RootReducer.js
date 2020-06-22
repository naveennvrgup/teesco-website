import { combineReducers } from 'redux';
import LoginReducer from '../actions/LoginActions'
import ScaffoldReducer from '../actions/ScaffoldActions'


export default combineReducers({
    login: LoginReducer,
    scaffold: ScaffoldReducer,
})
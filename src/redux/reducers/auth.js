import {LOGIN,LOGIN_FAILED,LOGIN_SUCCESS,SIGNUP_SUCCESS,AUTH_LOADING} from '../action-types'
const user = (state = {status:'',isLoading:false}, {type,payload}) => {
    switch (type) {
        case AUTH_LOADING:
            return{...state,isLoading:true}
        case LOGIN:
            return {status:'loading',isLoading:true};
        case LOGIN_FAILED :
            return {status:'failed',isLoading:false};
        case LOGIN_SUCCESS :
            return {...state,status:'loggedIn',...payload}
        case SIGNUP_SUCCESS :
            return {...state,newUser:true,...payload}
        case 'LOGOUT':
            return {status:''}
        default:
            return state;
    }
}

export default user;
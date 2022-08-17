import {GET_ALL_USERS,GET_ALL_USERS_Failed,ADDING_USER,ADDING_USER_FAILED,ADD_USER} from '../action-types'
const staff = (state ={loading:false}, {type,payload}) => {
    switch (type) {
        case ADDING_USER:
            return {...state,loading:true}
        case GET_ALL_USERS:
            return {loading:false,data:payload}
        case GET_ALL_USERS_Failed:
            return {loading:false}
        case ADD_USER:
            return {...state,loading:false}
        case ADDING_USER_FAILED:
            return {...state,loading:false}
        default:
            return state;
    }
}
export default staff;
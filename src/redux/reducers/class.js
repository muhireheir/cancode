import {GET_ALL_CLASSES,GET_ALL_CLASSES_FAILED,ADD_CLASS,ADD_CLASS_FAILED,ADDING_CLASS} from '../action-types'
const classes = (state ={loading:false}, {type,payload}) => {
    switch (type) {
        case GET_ALL_CLASSES:
            return {loading:false,data:payload}
        case GET_ALL_CLASSES_FAILED:
            return {loading:false}
        case ADD_CLASS:
            return {...state,loading:false}
        case ADD_CLASS_FAILED:
            return {...state,loading:false}
        case ADDING_CLASS:
        return {...state,loading:true}
        default:
            return state;
    }
}
export default classes;
import {GET_ALL_CLASS_COURSES,GET_ALL_CLASS_COURSES_FAILED} from '../action-types'
const classes = (state ={loading:false}, {type,payload}) => {
    switch (type) {
        case GET_ALL_CLASS_COURSES:
            return {loading:false,data:payload}
        case GET_ALL_CLASS_COURSES_FAILED:
            return {loading:false}
        default:
            return state;
    }
}
export default classes;
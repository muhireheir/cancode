import { GET_ALL_CLASS_COURSES,ADD_COURSE } from '../action-types/index'
import axios from '../../config/axios'
import { toast } from 'react-toastify';


export const getClassCoursesAction = (id) => async(dispatch) => {
    const { data } = await axios.get(`class/${id}/courses`);
    dispatch({ type: GET_ALL_CLASS_COURSES, payload: data.data });
}

export const addClassCoursesAction = (props) => async(dispatch) => {
try {
    const { data } = await axios.post('courses/',props);
    dispatch({ type: ADD_COURSE, payload: data.data });
    toast.success(data.message);
    setTimeout(() =>{
        window.location.reload();
    },100)
} catch (error) {
    return error;
}
}
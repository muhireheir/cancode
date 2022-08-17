import { GET_ALL_CLASSES,ADD_CLASS,ADD_CLASS_FAILED,ADDING_CLASS } from '../action-types/index'
import axios from '../../config/axios'
import { toast } from 'react-toastify';


export const getClassesAction = () => async(dispatch) => {
    const { data } = await axios.get('class/');
    dispatch({ type: GET_ALL_CLASSES, payload: data.data });
}

export const AddClassAction = (props) => async(dispatch) => {
try {
    dispatch({ type: ADDING_CLASS, payload: "" });
    const { data } = await axios.post('class/',props);
    dispatch({ type: ADD_CLASS, payload: data.data });
    toast.success(data.message);
} catch (error) {
    dispatch({ type: ADD_CLASS_FAILED, payload:error.message });
    return error;
}
}
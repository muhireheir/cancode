import { GET_ALL_USERS,ADD_USER,ADDING_USER,ADDING_USER_FAILED } from '../action-types/index'
import axios from '../../config/axios'
import { toast } from 'react-toastify';


export const getUsersAction = () => async(dispatch) => {
    const { data } = await axios.get('users/');
    dispatch({ type: GET_ALL_USERS, payload: data.data });
}

export const AddUsersAction = (props) => async(dispatch) => {
try {
    
    dispatch({ type: ADDING_USER, payload:'' });
    const { data } = await axios.post('users/',props);
    dispatch({ type: ADD_USER, payload: data.data });
    toast.success(data.message);
} catch (error) {
    dispatch({ type: ADDING_USER_FAILED, payload: "" });
    return error;
}
}
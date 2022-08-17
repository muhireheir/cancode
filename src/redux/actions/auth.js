import { LOGIN_FAILED, LOGIN_SUCCESS, LOGIN,AUTH_LOADING } from '../action-types/index'
import { toast } from 'react-toastify';
import axios from '../../config/axios'

export const logInAction = (props) => async(dispatch) => {
    try {

        dispatch({ type: LOGIN, payload: "WAITING" });
        const { data } = await axios.post('users/login', props);
        dispatch({ type: LOGIN_SUCCESS, payload: data.data });
        const userInfo = JSON.stringify(data.data);
        localStorage.setItem('userInfo', userInfo)
        toast.success(data.message);
        window.location.href="/";
    } catch (error) {
        dispatch({ type: LOGIN_FAILED, payload: { message:"FAILED", error } });
        throw error;
    }
}
export const signUpAction = (props) => async(dispatch) => {
    try {
        dispatch({ type: AUTH_LOADING, payload: "WAITING" });
        const { data } = await axios.post('users/register',props);
        dispatch({ type: LOGIN_SUCCESS, payload: data.data });
        const userInfo = JSON.stringify(data.data);
        localStorage.setItem('userInfo', userInfo)
        toast.success(data.message);
        window.location.href="/";
        toast.success(data.message);
    } catch (error) {
        dispatch({ type: LOGIN_FAILED, payload: "WAITING" });
        return error;
    }
}
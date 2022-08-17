import axios from 'axios'
import { toast } from 'react-toastify';

const instance = axios.create({
    baseURL:process.env.REACT_APP_API_URL
});

instance.interceptors.request.use(config => {
    const userInfo = localStorage.getItem('userInfo');
    if(userInfo){
        var {token} = JSON.parse(userInfo);
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    const badrequestMessage = error.response?.data?.message?.details;
    if(badrequestMessage){
        toast.error(badrequestMessage[0].message);
    }else{
        const message = error.response?.data?.message || badrequestMessage || error.message;
        toast.error(message);
    }
    return Promise.reject(error);
  });

export default instance;
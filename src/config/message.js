import { toast } from 'react-toastify';
export const getMessage = (error)=>{

    const errrsObjec =  error.response?.data?.errors;


    if(errrsObjec){
        var message;
        Object.keys(errrsObjec).forEach(key => {
            console.log(errrsObjec[key][0]);
            message = errrsObjec[key][0]+'\n';
        });
        toast.error(message);
        return message;
    }else{
        const message = error.response?.data?.message || error.message;
        toast.error(message);
        return message;
    }
   
   
}


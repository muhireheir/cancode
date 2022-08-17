import React from 'react'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { useForm } from "react-hook-form";
import { logInAction } from '../redux/actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';



function Login() {
  const dispatch = useDispatch();
  const {auth} = useSelector(state=>state);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => logInAction(data)(dispatch);
  return (
    <>
    <LoadingSpinner open={auth.isLoading} />
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">  
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" method="POST" onSubmit={handleSubmit(onSubmit)}>
            <TextInput register={register} required errors={errors} name="email" label={"Email"} placeholder="email@domain.com" />
            <TextInput register={register}  type="password" name="password" label={"Password"} />
            <Button text={"Login"} />
        </form>
        <div className='mt-1'>
          <NavLink to={'/signup'} className='text-sm'>Create new account</NavLink>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Login
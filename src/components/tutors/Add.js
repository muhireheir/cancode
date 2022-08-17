import React from 'react'
import Button from '../Button'
import TextInput from '../TextInput'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { AddUsersAction } from '../../redux/actions/users';
import LoadingSpinner from '../LoadingSpinner';




const Add = () => {
    const dispatch = useDispatch();
    const {users} = useSelector(state=>state);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => AddUsersAction(data)(dispatch)
  return (
    <>
    <LoadingSpinner open={users.loading} />
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">  
   <div className="bg-white mt-5 w-full md:w-2/3">
        <form className="space-y-6" method="POST" onSubmit={handleSubmit(onSubmit)}>
             <TextInput register={register} required errors={errors} name="firstName" label={"First name"} />
             <TextInput register={register} required errors={errors} name="lastName" label={"Last name"} />
            <TextInput register={register} required errors={errors} name="email" label={"Email"} placeholder="email@domain.com" />
            <Button text={"Save"} />
        </form>
      </div>
  </div>
  </>
  )
}

export default Add
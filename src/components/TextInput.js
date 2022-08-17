import React from 'react'

const TextInput = ({ label, name,register,required,errors, ...props }) => {
    return (
        <div className='w-full'>
            <label className="block text-sm font-medium text-gray-700"> {label}</label>
            <div className="mt-1">
                <input {...props} {...register(name, { required })}  className="form-control" />
            </div>
        </div>
    )
}
export default TextInput
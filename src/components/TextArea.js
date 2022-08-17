import React from 'react'

const TextArea = ({ label, name,register,required,errors, ...props }) => {
    return (
        <div className='w-full'>
            <label className="block text-sm font-medium text-gray-700"> {label}</label>
            <div className="mt-1">
                <textarea cols={10} {...props} {...register(name, { required })}  className="form-control"></textarea>
            </div>
        </div>
    )
}
export default TextArea
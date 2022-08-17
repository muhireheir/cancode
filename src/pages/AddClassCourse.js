import React, { useState } from 'react'
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import TextArea from '../components/TextArea';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { v4 } from 'uuid';
import LoadingSpinner from '../components/LoadingSpinner';
import {useParams} from 'react-router-dom'
import { addClassCoursesAction } from '../redux/actions/courses';






const AddClassCourse = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const [image, setImage] = useState(null);
    const [attachment, setAttachment] = useState(null);
    const [thumbnail, setThumbnail] = useState(null);
    const [open,setOpen] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        setOpen();
        const course = { ...data, thumbnail: image, content: value, attachment,classId:id };
        await addClassCoursesAction(course)(dispatch);
        setOpen(false);
    }

    const uploadImage = async (e) => {
        const file = e.target.files[0];

        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = (th) => {
            setThumbnail(th.target.result)
        }

        const imagesForm = new FormData();
        const url = "https://api.cloudinary.com/v1_1/umuhire-heritier/auto/upload";
        imagesForm.append('file', file);
        imagesForm.append('public_id', v4());
        imagesForm.append('upload_preset', 'ml_default');
        const { data } = await axios.post(url, imagesForm);
        const urlSecure = data.secure_url;
        setImage(urlSecure);
    }

    const uploadAttachment = async (e) => {
        setOpen(true);
        const file = e.target.files[0];
        const imagesForm = new FormData();
        const url = "https://api.cloudinary.com/v1_1/umuhire-heritier/auto/upload";
        imagesForm.append('file', file);
        imagesForm.append('public_id', v4());
        imagesForm.append('upload_preset', 'ml_default');
        const { data } = await axios.post(url, imagesForm);
        const urlSecure = data.secure_url;
        setAttachment(urlSecure);
        setOpen(false);
    }
    return (
        <>
        <LoadingSpinner open={open} />
            <div className='w-full'>
                <div className='mt-2 mb-2'>
                    {thumbnail && (<img className='h-40 w-auto' src={thumbnail} alt='altr' />)}
                </div>
                <div className='w-full mb-3'>
                    <label className="block text-sm font-medium text-gray-700">Thumbnail</label>
                    <div className="mt-1">
                        <input onChange={uploadImage} type={'file'} name='thumbnail' className="form-control" />
                    </div>
                </div>
                <form className="space-y-6" method="POST" onSubmit={handleSubmit(onSubmit)}>
                    <TextInput register={register} required errors={errors} name="name" label={"Course Title"} />
                    <TextArea register={register} required errors={errors} name="description" label={"Course Description"} />
                    <ReactQuill modules={{
                        toolbar: {
                            container: [
                                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                                ['bold', 'italic', 'underline'],
                                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                [{ 'align': [] }],
                                ['link', 'image'],
                                ['clean'],
                                [{ 'color': [] }]
                            ]
                        }
                    }} theme="snow" value={value} onChange={setValue} />


                    <div className='w-full mb-3'>
                        <label className="block text-sm font-medium text-gray-700">attachment</label>
                        <div className="mt-1">
                            <input onChange={uploadAttachment} type={'file'} name='thumbnail' className="form-control" />
                        </div>
                    </div>

                    <Button text={"Save"} />
                </form>
            </div>
        </>
    )
}

export default AddClassCourse;
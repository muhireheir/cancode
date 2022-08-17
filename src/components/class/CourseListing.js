import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getClassCoursesAction } from '../../redux/actions/courses';
import LoadingSpinner from '../LoadingSpinner';




const CourseListing = () => {


    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const { courses } = useSelector(state => state);
    const dispatch = useDispatch();
    useEffect(() => {
        setIsLoading(courses.isLoading);
        getClassCoursesAction(id)(dispatch);
    }, [dispatch]);

    return (
        <>
            <LoadingSpinner open={isLoading} />
            {!isLoading && (
                <div className='pt-5'>
                    <div className='w-40'>
                    <Link to={`/class/${id}/course/add`} className='btn bg-yellow-300'>Add course</Link>
                    </div>
                    <div className="flex flex-wrap w-">
                        {courses?.data?.map(singleClass=>{
                        return (<Link key={singleClass.id} to={'/'} className="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5 mb-4">
                            <div className="relative flex flex-col min-w-0 break-words bg-gray-300 rounded mb-3 xl:mb-0 shadow-lg">
                                <div className="flex-auto p-4">
                                    <div className="flex flex-wrap">
                                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                            <h5 className="text-blueGray-400 uppercase font-bold text-md">{singleClass.name}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>)
                        })}
                    </div>
                </div>)}
        </>
    )
}

export default CourseListing
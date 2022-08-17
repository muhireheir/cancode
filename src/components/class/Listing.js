import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getClassesAction } from '../../redux/actions/class';
import LoadingSpinner from '../LoadingSpinner';





function Listing(props) {
    const [isLoading, setIsLoading] = useState(true);
    const { classes } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        setIsLoading(classes.loading);
        getClassesAction()(dispatch);
    }, [dispatch]);
    return (
        <>
            <LoadingSpinner open={isLoading} />
            {!isLoading && (
                <div className='pt-5'>
                    <div className="flex flex-wrap">
                        {classes?.data?.map(singleClass=>{
                        return (<Link key={singleClass.id} to={`class/${singleClass.id}/view`} className="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5 mb-4">
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

export default Listing
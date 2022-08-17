import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersAction } from '../../redux/actions/users';
import LoadingSpinner from '../LoadingSpinner';
import DataTable from 'react-data-table-component';



const customStyles = {
    rows: {
        style: {
            minHeight: '50px',
        },
    },
    headCells: {
        style: {
            paddingLeft: '8px',
            paddingRight: '8px',
            backgroundColor: '#3678a3',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '1rem',


        },
    },
    cells: {
        style: {
            paddingLeft: '8px',
            paddingRight: '8px',

        },
    },
};


function Listing() {
    const [isLoading, setIsLoading] = useState(true);
    const { users } = useSelector(state => state);
    const [tutors,setTutors] = useState([]);
    const dispatch = useDispatch();
    const columns = [
        {
            name: 'First Name',
            selector: row => row.firstName,
            sortable: true,
        },
        {
            name: 'First Name',
            selector: row => row.lastName,
            sortable: true,
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
        },

    ];

    useEffect(() => {
        setIsLoading(users.isLoading);
        getUsersAction()(dispatch);
        if(users.data){
            setTutors(users.data.filter(tutor=>tutor.role==="TUTOR"));
        }
    }, [dispatch, users]);
    return (
        <>
            <LoadingSpinner open={isLoading} />
            {!isLoading && (<div className='pt-5'>
                <DataTable
                columns={columns}
                data={tutors}
                customStyles={customStyles}
                responsive={true}
            />
            </div>)}
        </>
    )
}

export default Listing
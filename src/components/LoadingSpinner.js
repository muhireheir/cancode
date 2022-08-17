import React from 'react';
import LoadingOverlay from 'react-loading-overlay'

export default function LoadingSpinner({ open }) {
    return (

        <>
            {open && (<div className='blackBg'>
                <LoadingOverlay
                    active={open}
                    spinner
                    text=''
                >
                </LoadingOverlay>
            </div>)}</>

    )
}
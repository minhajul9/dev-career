import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error)
    return (
        <div className='text-center pt-16 space-y-5'>
            <h2 className='font-bold text-4xl mt-12'>Oops!!</h2>
            <p>Sorry an unexpected error occured</p>
            <p className='text-red-500'>
                <i>
                    {error.message || error.statusText}
                </i>
            </p>
        </div>
    );
};

export default ErrorPage;
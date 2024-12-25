import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen gap-3'>
            <h1 className='text-3xl font-medium'>Page Not Found 404..!</h1>
            <Link to='/'><button className='btn'>Go Back To Home</button></Link>
        </div>
    );
};

export default Error;
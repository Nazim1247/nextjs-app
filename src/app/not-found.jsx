import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='text-center mt-8'>
            <h2 className='mb-6 text-3xl text-red-600'>404 Not Found Data</h2>
            <Link className='p-4 bg-blue-500 rounded-xl' href="/">Back to Home</Link>
        </div>
    );
};

export default NotFoundPage;
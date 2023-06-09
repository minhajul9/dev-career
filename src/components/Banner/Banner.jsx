import React from 'react';

const Banner = () => {
    return (
        <div className='banner flex flex-col md:flex-row items-center justify-between pt-8 px-8 pb-0 custom-background'>

                <div className='flex flex-col md:px-8 md:ms-12 space-y-4'>
                    
                    <h1 className='text-7xl font-bold'>One Step Closer To Your <br /><span className='text-indigo-400'>Dream Job</span></h1>

                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>

                    <button className='btn-background w-40 py-5 rounded text-white font-bold text-sm'>Get Started</button>
                </div>
                <img className='w-4/5 md:w-3/5 mt-8 md:px-8 pb-0' src="All Images\P3OLGJ1 copy 1.png" alt="" />
            </div>
    );
};

export default Banner;
import React from 'react';

const Job = ({ job }) => {
    let i = 0;
    const { job_title, location, job_type, company, salary, image_url } = job;
    return (
        <div className='p-10 rounded-md border'>
            <img src={image_url} className='h-10 mb-8' alt="" />
            <h2 className='text-2xl font-bold'>{job_title}</h2>
            <h3 className='text-xl text-gray-500 my-2'>{company}</h3>
            <div className='flex space-x-4 my-6'>
                {
                    job_type.map(tp => <h2
                        className='font-bold text-violet-500 py-2 px-4 rounded border border-violet-400'
                        key={i++}>
                        {tp}
                    </h2>)
                }
            </div>

            <div className='flex space-x-16 my-6'>
                <p className='flex'>
                    <img className='mr-2' src='Icons/Location Icon.png' alt="" />
                    {location}
                </p>
                <p className='flex'>
                    <img className='mr-2' src='Icons/Frame.png' alt="" />
                    {salary}
                </p>
            </div>

            <button className='btn-background py-4 px-5 rounded text-white font-bold mx-auto text-lg'>View Details</button>
        </div>
    );
};

export default Job;
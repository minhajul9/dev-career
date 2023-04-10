import React, { useContext } from 'react';
import { FeaturedJobsContext } from '../Layout/Layout'
import Job from '../Job/Job';

const FeaturedJobs = ({ handleJobShow, showAllJobs }) => {

    let featuredJobs = useContext(FeaturedJobsContext)

    if (!showAllJobs) {
        featuredJobs = featuredJobs.slice(0, 4)
    }

    return (
        <div className='text-center mt-32'>

            <h1 className='text-5xl font-bold my-4'>Featured Jobs</h1>
            <p className='text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className='grid md:grid-cols-2 grid-cols-1 gap-4 my-10 text-left'>
                {
                    featuredJobs.map(job => <Job
                        key={job.id}
                        job={job}
                    ></Job>)
                }
            </div>
            <button onClick={handleJobShow} className='btn-background py-4 px-5 rounded text-white font-bold mx-auto text-lg'>{showAllJobs ? 'See Less' : 'See All Jobs'}</button>
        </div>
    );
};

export default FeaturedJobs;
import React, { useContext, useState } from 'react';
import { FeaturedJobsContext } from '../Layout/Layout';
import { getData } from '../../fakeDb';
import Job from '../Job/Job';

const AppliedJobs = () => {
    const featuredJobs = useContext(FeaturedJobsContext);
    const appliedIds = getData();

    const appliedJobs = [];
    for (const id of appliedIds) {
        const found = featuredJobs.find(job => job.id == id);
        appliedJobs.push(found)
    }

    const [filteredJobs, setFilteredJobs] = useState([...appliedJobs])

    const handleFilter = (value) => {
        if (value) {
            const found = appliedJobs.filter(job => {
                const type = job.job_type;
                if (type.includes(value)) {
                    return job;
                }
            })
            setFilteredJobs([...found])
        }
        else{
            setFilteredJobs([...appliedJobs])
        }

    }


    return (
        <div>
            <h2 className='custom-background py-32 text-3xl text-center font-bold mb-32'>Applied Jobs</h2>

            <div className='flex justify-end my-10 p-8 '>
                <p className='font-bold bg-slate-200 p-4 rounded'>Filter By :
                    <button className='btn-background text-white p-2 rounded mx-4' onClick={() => handleFilter('')}>Show All</button>
                    <button className='btn-background text-white p-2 rounded mx-4' onClick={() => handleFilter('Remote')}>Remote</button>
                    <button onClick={() => handleFilter('On-Site')} className='btn-background text-white p-2 rounded mx-4'>On-Site</button></p>
            </div>

            <div className='space-y-10 mb-10'>

                {
                   filteredJobs && filteredJobs.map(
                        job => <Job
                            key={job.id}
                            job={job}
                        >flex-row items-center space-x-8</Job>
                    )
                }
            </div>
        </div>
    );
};

export default AppliedJobs;
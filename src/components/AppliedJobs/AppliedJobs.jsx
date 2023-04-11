import React, { useContext } from 'react';
import { FeaturedJobsContext } from '../Layout/Layout';
import { getData } from '../../fakeDb';
import Job from '../Job/Job';

const AppliedJobs = () => {
    const featuredJobs = useContext(FeaturedJobsContext);
    const appliedIds = getData();
    
    const appliedJobs = [];
    for(const id of appliedIds){
        const found = featuredJobs.find( job => job.id == id);
        appliedJobs.push(found)
    }
    
    console.log(appliedJobs);

    return (
        <div className='space-y-10'>
            {
                appliedJobs.map(
                    job => <Job
                        key={job.id}
                        job={job}
                    >flex-row items-center</Job>
                )
            }
        </div>
    );
};

export default AppliedJobs;
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const jobId = useLoaderData()
    console.log(jobId);
    return (
        <div>
            Job details
        </div>
    );
};

export default JobDetails;
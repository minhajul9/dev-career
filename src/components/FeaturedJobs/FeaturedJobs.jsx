import React, { useContext } from 'react';
import {FeaturedJobsContext} from '../Layout/Layout'

const FeaturedJobs = () => {

    const featuredJobs = useContext(FeaturedJobsContext)
    console.log(featuredJobs);
    return (
        <div>
            featured jobs
        </div>
    );
};

export default FeaturedJobs;
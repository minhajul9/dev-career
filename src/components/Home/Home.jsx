import React, { useState } from 'react';
import JobCategories from '../JobCategories/JobCategories';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {

    const categories = useLoaderData()

    const [showAllJobs, setShowAllJobs] = useState(false);
    
    const handleJobShow = () => setShowAllJobs(!showAllJobs)

    return (
        <div>
            <Banner></Banner>
            <JobCategories
                categories={categories}
            ></JobCategories>
            <FeaturedJobs 
                handleJobShow = {handleJobShow}
                showAllJobs={showAllJobs}
            ></FeaturedJobs>
        </div>
    );
};

export default Home;
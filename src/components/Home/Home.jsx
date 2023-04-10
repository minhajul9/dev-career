import React, { useEffect, useState } from 'react';
import JobCategories from '../JobCategories/JobCategories';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {

    const tempcategories = useLoaderData();

    const [categories, setCategories] = useState([]);
    console.log(categories);

    useEffect(() =>{
        tempcategories && setCategories(tempcategories)
    }, [tempcategories])

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
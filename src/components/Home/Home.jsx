import React, { useEffect, useState } from 'react';
import JobCategories from '../JobCategories/JobCategories';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {

    const tempCategories = useLoaderData();
    console.log(tempCategories);

    const [categories, setCategories] = useState([]);
    

    useEffect(() =>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    console.log(categories);
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
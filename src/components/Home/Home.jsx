import React from 'react';
import JobCategories from '../JobCategories/JobCategories';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const categories = useLoaderData()
    

    return (
        <div>
            <Banner></Banner>
            <JobCategories
                categories={categories}
            ></JobCategories>
        </div>
    );
};

export default Home;
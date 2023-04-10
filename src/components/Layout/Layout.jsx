import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';


export const FeaturedJobsContext = createContext([])

const Layout = () => {

    const featuredJobs = useLoaderData();
    

    return (
        <FeaturedJobsContext.Provider value={featuredJobs}>
            <div className='md:w-4/5 mx-auto'>
                <Header></Header>
                <Outlet></Outlet>
            </div>
        </FeaturedJobsContext.Provider>
    );
};

export default Layout;
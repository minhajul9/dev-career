import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';


const Layout = () => {
    return (
        <div className='md:w-4/5 mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;
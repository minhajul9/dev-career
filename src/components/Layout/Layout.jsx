import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Layout = () => {
    return (
        <div className='md:w-4/5 mx-auto'>
            <Header></Header>
            <h2>Layout</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;
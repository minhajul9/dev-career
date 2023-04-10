import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='custom-background mx-auto flex justify-between items-center p-4'>
            <h2 className='text-3xl font-extrabold' title='Depelopers-career'>Deveer</h2>

            <div className='space-x-4'>
                <Link to='/'>Home</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/applied'>Applied Jobs</Link>
                <Link to='/blog'>Blog</Link>
            </div>

            <button className='btn-background text-white text-xl font-extrabold p-4 rounded'>Start Applying</button>

        </div>
    );
};

export default Header;
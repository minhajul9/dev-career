import React from 'react';

const Category = ({category}) => {
    return (
        <div className='p-8 bg-violet-50 w-80 rounded-md h-60'>
            <img className='bg-violet-100 p-4 rounded' src={category.icon} alt="" />
            <h2 className='font-bold text-xl mt-6'>{category.name}</h2>
            <p className='text-gray-400 font-medium'>{category.jobs}+ Jobs Available</p>
        </div>
    );
};

export default Category;
import React from 'react';
import Category from '../Category/Category';

const JobCategories = ({ categories }) => {
    console.log(categories);
    return (
        <div className='mt-24'>
            <h2 className='text-center text-5xl font-bold my-4'>Job Category List</h2>

            <p className='text-center text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className='flex justify-center md:justify-between md:flex-nowrap flex-wrap md:space-x-4 space-y-4 md:space-y-0 my-8'>

                {
                    categories.map(category => <Category
                        key={category.id}
                        category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default JobCategories;
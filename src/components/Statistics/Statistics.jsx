import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const data = [
        {
            serial: 'Assignment-1',
            mark: 60
        },
        {
            serial: 'Assignment-2',
            mark: 50
        },
        {
            serial: 'Assignment-3',
            mark: 58
        },
        {
            serial: 'Assignment-4',
            mark: 60
        },
        {
            serial: 'Assignment-5',
            mark: 60
        },
        {
            serial: 'Assignment-6',
            mark: 60
        },
        {
            serial: 'Assignment-7',
            mark: 60
        }
    ]
    return (
        <div>
            <h2 className='text-3xl font-bold py-20 custom-background text-center'>Statistics</h2>
            <div className='my-20 flex justify-center flex-col items-center'>
                <h2 className='text-2xl font-bold mb-16'>Assignment Marks Chart</h2>
                <AreaChart
                    width={1100}
                    height={400}
                    data={data}
                >
                    <CartesianGrid strokeDasharray="3 4" />
                    <XAxis dataKey="serial" />
                    <YAxis />
                    <Tooltip />
                    <Area type='monotone' dataKey="mark" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </div>
        </div>
    );
};

export default Statistics;
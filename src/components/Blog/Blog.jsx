import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='bg-slate-300 p-4 text-xl my-8 rounded-lg'>
                <h2 className='text-2xl font-bold my-4'>What is custom hook?</h2>
                <p className='bg-white rounded-md p-8'>
                    A custom hook in React is a JavaScript function with the word "use" at the beginning that enables to reuse stateful functionality across several components. We can convert component logic into reusable functions using custom hooks. <br />

                    When we need to use the same code multiple times, custom hooks can be helpful. We can extract the code into a custom hook and then reuse that hook in all of the components that require it rather than duplicating it in each component. <br />

                    Custom hooks can also be used to abstract away complex logic and make it easier to test and maintain your code.
                </p>
            </div>

            <div className='bg-slate-300 p-4 text-xl my-8 rounded-lg'>
                <h2 className='text-2xl font-bold my-4'>When we should use context api?</h2>
                <p className='bg-white rounded-md p-8'>
                    Suppose we created a React app using multiple layer of components. And we need to pass a data from the parent to last layer component. In regular system we have pass the data to each layers using props we need receive the data and pass to the next level in each component. But context api make this work easier for us. In context api first we need to create a context and use it with provider that all for passing the data. Now in any layer we can receive the data using useContext hook with the context name from any component of the tree. So, whenever we need to pass data to deep down any node or component we need to use context api to make it simple.
                </p>
            </div>

            <div className='bg-slate-300 p-4 text-xl my-8 rounded-lg'>
                <h2 className='text-2xl font-bold my-4'>
                    What is useRef?
                </h2>
                <p className='bg-white rounded-md p-8'>
                    "useRef" is a React hook which allows to create mutable references that can be used to store a value or reference to a DOM element, and this reference persists across re-renders. That means we can use useRef to store value that does not occur re-render. It also can be used to access a DOM element directly.
                </p>
            </div>

            <div className='bg-slate-300 p-4 text-xl my-8 rounded-lg'>
                <h2 className='text-2xl font-bold my-4'>
                    What is useMemo?
                </h2>
                <p className='bg-white rounded-md p-8'>
                "useMemo" is a function that returns a memoized value of a passed in resource-intensive function. It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations.
                </p>
            </div>
        </div>
    );
};

export default Blog;
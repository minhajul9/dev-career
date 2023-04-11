import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black text-white  py-20'>
            <div className='md:w-4/5 mx-auto flex flex-wrap md:flex-nowrap gap-32 p-8'>
                <div className='space-y-8 w-80'>
                    <h2 className='text-3xl font-bold'>Dev-Calling</h2>
                    <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <img src="Icons/Group 9969.png" alt="" />
                </div>

                <div className='col-auto'>
                    <h3 className='text-xl font-semibold mb-6'>Company</h3>
                    <p>
                        About us <br /><br />
                        Work <br /><br />
                        Latest News <br /><br />
                        Careers
                    </p>
                </div>

                <div className='col-auto'>
                    <h3 className='text-xl font-semibold mb-6'>Products</h3>
                    <p>
                        Prototype <br /><br />
                        Plans & Pricing<br /><br />
                        Customers <br /><br />
                        Integration
                    </p>
                </div>

                <div className='col-auto'>
                    <h3 className='text-xl font-semibold mb-6'>Support</h3>
                    <p>
                        Help Desk <br /><br />
                        Sales <br /><br />
                        Become a Partner <br /><br />
                        Developers
                    </p>
                </div>

                <div className='col-auto'>
                    <h3 className='text-xl font-semibold mb-6'>Contact</h3>
                    <p>
                        524 Broadway, NYC <br /><br />
                        +1777-978-5570 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
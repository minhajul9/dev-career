import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FeaturedJobsContext } from '../Layout/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar,  faCircleDollarToSlot,   faEnvelope, faLocationDot,  faPhone } from '@fortawesome/free-solid-svg-icons'
import { getData, setData } from '../../fakeDb';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const JobDetails = () => {
    const jobId = useLoaderData()
    const featuredJobs = useContext(FeaturedJobsContext);

    const job = featuredJobs.find(jb => jb.id == jobId);

    const handleApplyJob = id => {
        const previous = getData();
        let newdata = []
        if(previous){
            previous.includes(id)? toast("Already applied", {
                position: toast.POSITION.TOP_CENTER
            }): setData([...previous, id])
        }
        else{
            newdata.push(id)
            setData(newdata)
        }
        
    }


    return (
        <div>
            <h2 className='custom-background py-32 text-3xl text-center font-bold mb-32'>Job details</h2>

            <div className='grid grid-cols-3 p-12 pr-14 gap-4'>
                <div className='col-span-2'>
                    <p className='text-gray-500'><span className='text-black font-bold'>Job Description:</span> {job.description}</p> <br />

                    <p className='text-gray-500'><span className='text-black font-bold'>Job Responsibility:</span> {job.responsibilities}</p> <br />

                    <p className='text-gray-500'><span className='text-black font-bold'>
                        Requirements: <br />
                    </span> {job.requirements}
                    </p> <br />
                    <p className='text-gray-500'><span className='text-black font-bold'>
                        Experience: <br />
                    </span> {job.experience}
                    </p> <br />

                </div>

                <div >
                    <div className='custom-background p-8 rounded space-y-4 text-gray-500'>
                        <h3 className='font-bold my-4 text-black'>Job Details</h3>
                        <hr />

                        <p>
                            <FontAwesomeIcon className='text-violet-400' icon={faCircleDollarToSlot} />
                            <span className='text-black font-bold mx-2'>Salary:</span>
                            {job.salary}
                        </p>

                        <p>
                            <FontAwesomeIcon className='text-violet-400' icon={faCalendar} />
                            <span className='text-black font-bold mx-2'>Job Title:</span>
                            {job.job_title}
                        </p>
                        <br />

                        <h3 className='text-black font-bold'>Contact Information</h3>
                        <hr />

                        <p>
                            <FontAwesomeIcon className='text-violet-400' icon={faPhone} />
                            <span className='text-black font-bold mx-2'>Phone:</span>
                            {job.contact_phone}
                        </p>

                        <p>
                            <FontAwesomeIcon className='text-violet-400' icon={faEnvelope} />
                            <span className='text-black font-bold mx-2'>Email:</span>
                            {job.contact_email}
                        </p>

                        <p>
                            <FontAwesomeIcon className='text-violet-400' icon={faLocationDot} />
                            <span className='text-black font-bold mx-2'>
                                Address:
                            </span>
                            {job.location}
                        </p>

                    </div>

                    <button onClick={() => handleApplyJob(jobId)} className='btn-background text-white font-bold text-center w-full py-3 rounded-lg my-4'>Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;
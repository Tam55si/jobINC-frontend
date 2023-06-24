import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import View from './View';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function JobDash() {
    const { id } = useParams();
    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                await axios.get("http://jobincbackend-env.eba-e5fk3z74.us-east-1.elasticbeanstalk.com/jobpost").then((res) => res.data).then((data) => setJobs(data.jobs))

                console.log(jobs);
            } catch (error) {
                console.error(error);
            }
        };



        fetchJobs();

        // if (cookies.access_token) {
        //     fetchSavedRecipe();
        // }

    }, []);


    const deleteHandler = (id) => {
        axios.delete(`http://jobincbackend-env.eba-e5fk3z74.us-east-1.elasticbeanstalk.com/jobpost/${id}`)

            .then((res) => {
                console.log(id);
                // alert("Job got deleted")
                toast.success(`Job deleted Successfully`);
                // window.location.reload();
                navigate("/admin");
            }).catch((err) => {
                toast.error(`Unable to delete Job`);
                console.error(err);
            })
    };





    return (
        <div className='container mb-[4rem] mt-[8rem] bg-[#1E293B] rounded-[10px]'>
            <div className='m-4 py-5'>
                <h1 className='text-center text-3xl font-semibold text-white'>Jobs Edit</h1>
                <p className='text-center text-xl text-white m-4'>Here you can Edit and Delete the Jobs Posted</p>
            </div>
            <div className="flex flex-col ">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-center text-sm font-light mb-8">
                                <thead
                                    className="border-b bg-neutral-900 font-medium text-white ">
                                    <tr>
                                        <th scope="col" className=" px-6 py-4">Title</th>
                                        <th scope="col" className=" px-6 py-4">Company</th>
                                        <th scope="col" className=" px-6 py-4">Post date</th>
                                        <th scope="col" className=" px-6 py-4">Action</th>
                                    </tr>
                                </thead>
                                <tbody className='bg-white'>

                                    {/* {
                                jobs.length > 0 && jobs.map(job => (
                                    <View {...job} />
                                ))
                            } */}
                                    {
                                        jobs && jobs.map((job) => {
                                            return (
                                                <tr className="border-b border-neutral-500" key={job._id}>
                                                    <td className="whitespace-nowrap  px-6 py-4 font-medium">{job.title}</td>
                                                    <td className="whitespace-nowrap  px-6 py-4">{job.company}</td>
                                                    <td className="whitespace-nowrap  px-6 py-4">{job.postDate}</td>
                                                    <td className="whitespace-nowrap  px-6 py-4">
                                                        <button className='px-4 bg-yellow-300 m-1 p-1' ><Link to={`/editjobs/${job._id}`}>Edit</Link></button>
                                                        <button className='px-4 bg-red-400 m-1 p-1' onClick={() => { deleteHandler(job._id) }}>Delete</button>

                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-2'>
                <button className='m-6 p-2 bg-lime-500 rounded-lg text-black hover:scale-110 duration-300'><Link to='/admin'>Back</Link></button>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    )
}

export default JobDash

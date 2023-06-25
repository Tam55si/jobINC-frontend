import React, { useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
import { useNavigate, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import JobAdd from "./JobAdd";
import JobAdd2 from "./JobAdd2";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Jobpost3() {
    const userID = useGetUserID();
    const [cookies, _] = useCookies(["access_token"]);
    const [jobs, setJobs] = useState({

        imageUrl: "",
        title: "",
        postDate: "",
        location: "",
        description: "",
        company: "",
        level: "",
        type: "",
        work: "",
        userOwner: userID,

    });

    const navigate = useNavigate();


    const handleChange = (event) => {
        const { name, value } = event.target;
        setJobs({ ...jobs, [name]: value });
        // event.taget.value(setJobs(jobs));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post(
                "https://jobinc-backend.onrender.com/jobpost",
                { ...jobs },
                {
                    headers: { authorization: cookies.access_token },
                }
            );

            // alert("Job Posted");
            toast.success(`Job Posted Successfully`);
            navigate("/admin");
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className=' mt-20' >
            <JobAdd />
            <JobAdd2 />
            <div className='antialiased'>
                <div className='flex w-full min-h-screen justify-center items-center'>
                    <div className='bg-[#C7D2FE] flex flex-col space-y-6 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white md:flex-row md:space-x-6 md:space-y-0 mb-14'>
                        {/* <div className='flex flex-col justify-between space-y-8'> */}

                        {/* <div>
                                <h1 className='font-bold text-4xl tracking-wide text-center text-black'>Welcome</h1>
                                <p className='tracking-wide text-center flex text-black p-4 text-2xl'>Create your account. It's free and only takes a minute.</p>
                                <img src={registerpic} alt='registerpic' className='lg:w-[80%] md:p-4' />

                            </div> */}

                        {/* </div> */}
                        <div className='py-9 min-w-full'>
                            <div className='bg-[#C4B5FD] rounded-xl shadow-lg p-8 text-gray-600  mb-4'>
                                <h2 className='text-3xl mb-4 text-center'>Get started in minutes!</h2>
                                <p className='text-xl py-3 text-black text-center'>Quick & Easy Job Posting - Get Quality Applies</p>
                                <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>


                                    <div>

                                        <input type="text"
                                            id="title"
                                            name="title"
                                            value={jobs.title}
                                            onChange={handleChange}
                                            placeholder="Enter Job Title..." className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2' />
                                    </div>
                                    <div>

                                        <input type="text"
                                            id="location"
                                            name="location"
                                            value={jobs.location}
                                            onChange={handleChange}
                                            placeholder="Enter location details..." className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2' />
                                    </div>
                                    <div>

                                        <input type="text"
                                            id="company"
                                            name="company"
                                            value={jobs.company}
                                            onChange={handleChange}
                                            placeholder="Enter company name..." className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2' />
                                    </div>
                                    <div>


                                        <input
                                            type="text"
                                            id="imageUrl"
                                            name="imageUrl"
                                            value={jobs.imageUrl}
                                            onChange={handleChange}
                                            placeholder="Enter company image URL..." className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2' />
                                    </div>
                                    <div>


                                        {/* <input type="text"
                                            id="level"
                                            name="level"
                                            value={jobs.level}
                                            onChange={handleChange}
                                            placeholder="Fresher, Intermediate, Senior, Advanced..." className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2' /> */}

                                        <label for="level">Choose a Level:</label>
                                        <select name="level" id="level" value={jobs.level} onChange={handleChange} className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2'>
                                            <option value=""></option>
                                            <option value="Fresher">Fresher</option>
                                            <option value="Intermediate">Intermediate</option>
                                            <option value="Senior">Senior</option>
                                            <option value="Advanced">Advanced</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label for="work">Choose a work type:</label>
                                        <select name="work" id="work" value={jobs.work} onChange={handleChange} className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2'>
                                            <option value=""></option>
                                            <option value="Work From Office">Work From Office</option>
                                            <option value="Hybrid">Hybrid</option>
                                            <option value="Work From Home">Work From Home</option>

                                        </select>
                                        {/* <input type="text"
                                            id="work"
                                            name="work"
                                            value={jobs.work}
                                            onChange={handleChange}
                                            placeholder="Work From Office, Hybrid, Work From Home... " className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2" /> */}
                                    </div>
                                    <div>
                                        {/* <input
                                            type="text"
                                            id="type"
                                            name="type"
                                            value={jobs.type}
                                            onChange={handleChange}
                                            placeholder="Full-Time, Part-Time, Contract... " className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2" /> */}
                                        <label for="type">Choose a work duration:</label>
                                        <select name="type" id="type" value={jobs.type} onChange={handleChange} className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2'>
                                            <option value=""></option>
                                            <option value="Full-Time">Full-Time</option>
                                            <option value="Part-Time">Part-Time</option>
                                            <option value="Contract">Contract</option>

                                        </select>
                                    </div>
                                    <div>
                                        <textarea
                                            name="description"
                                            id="description"
                                            placeholder="Enter job description..."
                                            rows="3"
                                            onChange={handleChange}
                                            value={jobs.description}
                                            className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2'
                                        ></textarea>
                                    </div>
                                    <div>
                                        <input
                                            type="month"
                                            id="postDate"
                                            name="postDate"
                                            value={jobs.postDate}
                                            onChange={handleChange}
                                            className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2'
                                        />
                                    </div>

                                    <div>
                                        <input type='checkbox' className='border border-gray-400' />
                                        <span> I accept the <a href="/" className='text-blue-500 font-semibold'>Terms of Use </a>and <a href="/" className='text-blue-500 font-semibold'>Privacy Policy</a></span>
                                    </div>

                                    <button className='inline-block self-center bg-blue-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm hover:scale-110 duration-300'>Start Posting</button>


                                </form>

                            </div>
                            <div >
                                <button className='m-2 p-3 bg-lime-500 rounded-lg text-black hover:scale-110 duration-300'><Link to='/admin'>Back</Link></button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                theme="dark"
            />
        </div>
    )
}

export default Jobpost3

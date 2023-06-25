import React, { useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import postjob from '../../assets/postjob.jpg';
import JobAdd from "./JobAdd";
import JobAdd2 from "./JobAdd2";


function Jobpost2() {
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

            alert("Job Posted");
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <><JobAdd />

            <div className='mb-[10rem]'>
                <div className='container mx-auto '>
                    <div className='flex w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden '>
                        <div className='w-2/5 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-red-300' >

                            <h1 className='text-3xl mb-4 flex flex-col'>Save time and effort in your hiring journey.</h1>
                            <div>
                                {/* <img src={postjob} className='' alt='' /> */}
                                <p className='flex flex-col'>Finding the best fit for the job shouldn’t be a full-time job. jobINC’s simple and powerful tools let you source, screen, and hire faster.</p>
                            </div>
                        </div>
                        <div className='text-center w-3/5 py-16 px-12'>
                            <h2 className='text-3xl mb-4'>Get started in minutes!</h2>
                            <p className='mb-4'>Quick & Easy Job Posting - Get Quality Applies.</p>
                            <form onSubmit={handleSubmit}>
                                <div className='mt-5'>
                                    <input type="text"
                                        id="title"
                                        name="title"
                                        value={jobs.title}
                                        onChange={handleChange}
                                        placeholder="Enter Job Title" className='border border-gray-400 py-1 px-2 w-full' />
                                </div>
                                <div className='mt-5'>
                                    <input type="text"
                                        id="location"
                                        name="location"
                                        value={jobs.location}
                                        onChange={handleChange}
                                        placeholder="Enter location deatils" className='border border-gray-400 py-1 px-2 w-full' />
                                </div>
                                <div className='mt-5'>
                                    <input type="text"
                                        id="company"
                                        name="company"
                                        value={jobs.company}
                                        onChange={handleChange}
                                        placeholder="Enter company name..."
                                        className='border border-gray-400 py-1 px-2 w-full' />
                                </div>
                                <div className='mt-5'>
                                    <input
                                        type="text"
                                        id="imageUrl"
                                        name="imageUrl"
                                        value={jobs.imageUrl}
                                        onChange={handleChange}
                                        placeholder="Enter company image URL..."
                                        className='border border-gray-400 py-1 px-2 w-full'
                                    />
                                </div>
                                <div className='mt-5'>
                                    <input type="text"
                                        id="level"
                                        name="level"
                                        value={jobs.level}
                                        onChange={handleChange}
                                        placeholder="Fresher, Intermediate, Senior, Advanced..."
                                        className='border border-gray-400 py-1 px-2 w-full' />
                                </div>
                                <div className='mt-5'>
                                    <input type="text"
                                        id="work"
                                        name="work"
                                        value={jobs.work}
                                        onChange={handleChange}
                                        placeholder="Work From Office, Hybrid, Work From Home... "
                                        className='border border-gray-400 py-1 px-2 w-full' />
                                </div>
                                <div className='mt-5'>
                                    <input
                                        type="text"
                                        id="type"
                                        name="type"
                                        value={jobs.type}
                                        onChange={handleChange}
                                        placeholder="Full-Time, Part-Time, Contract... "
                                        className='border border-gray-400 py-1 px-2 w-full'
                                    />
                                </div>
                                <div className='mt-5'>
                                    <textarea
                                        name="description"
                                        id="description"
                                        placeholder="Enter job description..."
                                        rows="5"
                                        onChange={handleChange}
                                        value={jobs.description}
                                        className='border border-gray-400 py-1 px-2 w-full'
                                    ></textarea>
                                </div>
                                <div className='mt-5'>
                                    <input
                                        type="month"
                                        id="postDate"
                                        name="postDate"
                                        value={jobs.postDate}
                                        onChange={handleChange}
                                        className='border border-gray-400 py-1 px-2 w-full'
                                    />
                                </div>

                                <div className='mt-5'>
                                    <input type='checkbox' className='border border-gray-400' />
                                    <span> I accept the <a href="/" className='text-blue-500 font-semibold'>Terms of Use </a>and <a href="/" className='text-blue-500 font-semibold'>Privacy Policy</a></span>
                                </div>
                                <div className='mt-5'>
                                    <button className='w-full bg-blue-500 py-3 text-center text-white hover:text-blue-500 hover:bg-white hover:border-sky-400 border-2'>Start Posting</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Jobpost2

import React, { useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function Jobpost() {

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
                "http://jobincbackend-env.eba-e5fk3z74.us-east-1.elasticbeanstalk.com/jobpost",
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
        <div>
            <div className="p-[1rem]  rounded-[10px] gap-2  m-auto flex justify-center flex-wrap items-center py-5 mb-[20rem] mt-[8rem]">
                <h1 className='text-center text-gray-400 p-1 text-2xl py-4'>Post a Job</h1>
                <div
                    name="jobpost"
                    className="w-full h-screen bg-[#C7D2FE] rounded-[10px] mb-11 pb-10">

                    <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                        <div className="pt-4 text-center">
                            <p className="py-8">Quick & Easy Job Posting - Get Quality Applies</p>
                        </div>

                        <div className=" flex justify-center items-center">
                            <form
                                onSubmit={handleSubmit}
                                className=" flex flex-col w-full md:w-1/2 bg-white"
                            >
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={jobs.title}
                                    onChange={handleChange}
                                    placeholder="Enter Job Title"
                                    className="p-2 bg-[#C4B5FD] border-2 rounded-md focus:outline-none"
                                />
                                <input
                                    type="month"
                                    id="postDate"
                                    name="postDate"
                                    value={jobs.postDate}
                                    onChange={handleChange}
                                    className="my-2 p-2 bg-[#C4B5FD] border-2 rounded-md  focus:outline-none"
                                />
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    value={jobs.location}
                                    onChange={handleChange}
                                    placeholder="Enter location deatils"
                                    className="my-2 p-2 bg-[#C4B5FD] border-2 rounded-md  focus:outline-none"
                                />

                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={jobs.company}
                                    onChange={handleChange}
                                    placeholder="Enter company name..."
                                    className="my-2 p-2 bg-[#C4B5FD] border-2 rounded-md  focus:outline-none"
                                />
                                <input
                                    type="text"
                                    id="imageUrl"
                                    name="imageUrl"
                                    value={jobs.imageUrl}
                                    onChange={handleChange}
                                    placeholder="Enter company image URL..."
                                    className="my-2 p-2 bg-[#C4B5FD] border-2 rounded-md  focus:outline-none"
                                />
                                <input
                                    type="text"
                                    id="level"
                                    name="level"
                                    value={jobs.level}
                                    onChange={handleChange}
                                    placeholder="Fresher, Intermediate, Senior, Advanced..."
                                    className="my-2 p-2 bg-[#C4B5FD] border-2 rounded-md  focus:outline-none"
                                />
                                <input
                                    type="text"
                                    id="type"
                                    name="type"
                                    value={jobs.type}
                                    onChange={handleChange}
                                    placeholder="Full-Time, Part-Time, Contract... "
                                    className="my-2 p-2 bg-[#C4B5FD] border-2 rounded-md  focus:outline-none"
                                />
                                <input
                                    type="text"
                                    id="work"
                                    name="work"
                                    value={jobs.work}
                                    onChange={handleChange}
                                    placeholder="Work From Office, Hybrid, Work From Home... "
                                    className="my-2 p-2 bg-[#C4B5FD] border-2 rounded-md  focus:outline-none"
                                />

                                <textarea
                                    name="description"
                                    id="description"
                                    placeholder="Enter job description..."
                                    rows="5"
                                    onChange={handleChange}
                                    value={jobs.description}
                                    className="p-2 bg-[#C4B5FD] border-2 rounded-md  focus:outline-none"
                                ></textarea>

                                <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-1 my-4 mx-auto flex items-center rounded-md hover:scale-110 duration-300" type="submit">
                                    Post
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jobpost

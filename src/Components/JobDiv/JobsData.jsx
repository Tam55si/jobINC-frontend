import { BiTimeFive } from 'react-icons/bi';
import { MdWorkOutline, MdOutlineLocationOn } from "react-icons/md";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useGetUserID } from "../hooks/useGetUserID";
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import SingleJob from './SingleJob';



function JobsData() {
    const userID = useGetUserID();
    const [jobs, setJobs] = useState();
    // const [savedRecipes, setSavedRecipes] = useState([]);
    const [cookies, _] = useCookies(["access_token"]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                await axios.get("https://jobinc-backend.onrender.com/jobpost").then((res) => res.data).then((data) => setJobs(data.jobs))


            } catch (error) {
                console.error(error);
            }
        };



        fetchJobs();

        // if (cookies.access_token) {
        //     fetchSavedRecipe();
        // }

    }, []);

    return (

        <div>
            <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
                {
                    jobs && jobs.map((job, i) => {
                        return (
                            <div key={i} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blue-300 shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
                                <SingleJob job={job} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default JobsData

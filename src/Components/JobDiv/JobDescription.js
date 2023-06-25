import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { UserContext } from "../../UserContext";
import { Link } from 'react-router-dom';

export default function JobDescription() {
    const [jobInfo, setJobInfo] = useState(null);
    const { userInfo } = useContext(UserContext);
    const { id } = useParams();


    useEffect(() => {
        const fetchJobs = async () => {
            try {
                await axios.get(`https://jobinc-backend.onrender.com/jobpost/${id}`)
                    .then((res) => res.data).then((data) => setJobInfo(data.jobInfo))
                // .then(response => {
                //     response.json().then(jobInfo => {
                //         setJobInfo(jobInfo);
                //     });
                // });

            } catch (error) {
                console.log(error);
            }
        }
    }, [])

    // useEffect(() => {
    //     fetch(`http://localhost:3002/jobpost/${id}`)
    //         .then(response => {
    //             response.json().then(jobInfo => {
    //                 setJobInfo(jobInfo);
    //             });
    //         });
    // }, []);

    if (!jobInfo) return '';

    return (
        <div className="mt-[20rem] text-white">

            <h1>{jobInfo.title}</h1>


        </div>
    );
}
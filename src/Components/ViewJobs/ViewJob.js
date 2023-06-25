import React from 'react';
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

function ViewJob() {
    const { userid } = useParams();

    const [jobData, setJobData] = useState({});

    useEffect(() => {

        const fetchJobs = async (id) => {
            try {
                const response = await axios.get(`https://jobinc-backend.onrender.com/jobpost/${id}`);
                setJobData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchJobs();

    }, []);

    return (
        <div>
            <h1>{jobData.id}</h1>
            <h1>{jobData.title}</h1>
        </div>
    )
}

export default ViewJob

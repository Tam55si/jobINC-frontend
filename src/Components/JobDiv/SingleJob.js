import React, { useState, useEffect } from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { MdWorkOutline, MdOutlineLocationOn } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import { useCookies } from "react-cookie";
import axios from 'axios';
import { useGetUserID } from "../hooks/useGetUserID";
import Modal from './Modal';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SingleJob = (props) => {
    const [cookies, setCookies] = useCookies(["access_token"]);
    const [jobs, setJobs] = useState([]);
    // const [apliedJobs, setAppliedJobs] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const userID = useGetUserID();
    // console.log(userID)

    // const onClickBtn = (id) => {
    //     if (apliedJobs.includes(id)) {
    //         alert("Job allready applied")
    //     } else {
    //         applyJob(id);
    //     }
    // }

    // const isjobApplied = (id) => apliedJobs.includes(id);

    const applyJob = async (jobID) => {
        console.log(jobID)
        try {
            const response = await axios.put("https://jobinc-backend.onrender.com/jobpost", {
                jobID,
                userID,
            });
            setJobs(response.data.jobs);
            toast.success(`Job Applied`);
            // alert("Job Applied");
        } catch (err) {
            console.log(err);
        }
    };

    // useEffect(() => {

    //     const fetchSavedJob = async () => {
    //         try {
    //             const response = await axios.get(`http://localhost:3002/jobpost/appliedjobs/ids/${userID}`,
    //                 { userID }
    //             );
    //             setAppliedJobs(response.data);
    //             console.log(response.data);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     };


    //     fetchSavedJob();
    // }, [])



    const { _id, title, postDate, location, description, imageUrl, level, type, company, work, } = props.job
    return (
        <>

            <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold text-textColor">{title}</h1>
                <span className='flex items-center text-[#48466e] gap-1 group-hover:text-blueColor'><BiTimeFive />{postDate}</span>
            </span>
            <h6 className=' text-blueColor group-hover:text-slate-800 font-semibold'>{level}</h6>
            <p className='text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white pb-3'>{description}</p>
            <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold  text-textColor hover:bg-[#987ffc] group-hover:text-white bg-[#C4B5FD]' onClick={handleOpenModal}>Know More</button>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>

                <div className="max-w-md mx-auto bg-[#C7D2FE] rounded-xl shadow-md overflow-hidden md:max-w-md">
                    <div className="md:flex">
                        <div className="w-full p-2 py-10">

                            <div className="flex justify-center">
                                <div className="relative">

                                    <img src={imageUrl} alt='Company Logo' width="80" />



                                </div>

                            </div>

                            <div className="flex flex-col text-center mt-3 mb-4">

                                <span className="text-2xl font-medium">{title}</span>
                                <span className="text-xl font-medium">{company}</span>
                                <span className="text-md text-gray-400">{postDate}</span>

                            </div>

                            <p className="px-16 text-center text-md text-gray-800">{description}</p>

                            <div className="px-16 mt-3 text-center">

                                <span className="bg-gray-100 h-5 p-1 px-3 rounded cursor-pointer hover:shadow hover:bg-gray-200 m-1">{work}</span>
                                <span className="bg-gray-100 h-5 p-1 px-3 rounded cursor-pointer hover:shadow hover:bg-gray-200 m-1">{type}</span>
                                <span className="bg-gray-100 h-5 p-1 px-3 rounded cursor-pointer hover:shadow hover:bg-gray-200 m-1">{location}</span>

                            </div>










                        </div>

                    </div>
                </div>


            </Modal>
            <p className='text-[15px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-black text-[#48466e] flex items-center gap-x-1 py-2'><MdOutlineLocationOn />{location}</p>
            <span className="flex justify-between items-center gap-4">
                <h1 className="text-[13px] font-semibold text-textColor">{type}</h1>
                <span className='flex items-center text-[#48466e] gap-1 group-hover:text-blueColor'><MdWorkOutline />{work}</span>
            </span>
            {/* <p className='text-[13px] text-[#95959]  group-hover:text-white '>, </p> */}
            <div className='company flex items-center gap-2'>
                <img src={imageUrl} alt='Company Logo' className='w-[10%]' />
                <span className='text-[14px] py-[1rem] block'>{company}</span>
            </div>
            <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold  text-textColor hover:bg-blueColor group-hover:text-white bg-yellow-200' >
                {/* disabled={isjobApplied(_id)} {isjobApplied(_id) ? "Applied" : "Apply"} */}
                {!cookies.access_token ? (
                    <NavLink to="/login">Please login to Apply</NavLink>
                ) : (
                    <button onClick={() => applyJob(_id)}>Apply</button>
                )}

            </button >
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
        </>
    )
}

export default SingleJob

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useGetUserID } from "../hooks/useGetUserID";
import { Link } from 'react-router-dom';
import ProfilePage from './ProfilePage'
import { NavLink } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function Profile() {
    const userID = useGetUserID();
    const [users, setUsers] = useState({});
    console.log(userID);
    const [cookies, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();

    const logout = () => {
        setCookies("access_token", "");
        window.localStorage.clear();
        // alert("Logged out Successfully")
        // navigate("/");
        toast.success(`Logged out Successfully`);
        navigate("/");
    };

    useEffect(() => {
        const fetchUser = async () => {
            try {
                await axios.get(`https://jobinc-backend.onrender.com/auth/${userID}`)
                    .then((res) => res.data)
                    // .then((data) => console.log(data))
                    .then((data) => setUsers(data.user))



                // console.log([users]);
            } catch (error) {
                console.error(error);
            }
        };



        fetchUser();



    }, []);

    const { _id, firstname, lastname, emailid, username, accounttype, appliedJobs } = users

    return (
        <>
            <div>



                <div className="py-12 mb-[4rem] mt-[8rem]">
                    <div className="max-w-md mx-auto bg-[#C4B5FD] rounded-xl shadow-md overflow-hidden md:max-w-md">
                        <div className="md:flex">
                            <div className="w-full p-2 py-10">

                                <div className="flex justify-center">
                                    <div className="relative">

                                        <img src="https://www.pinclipart.com/picdir/big/221-2217551_computer-user-clip-art.png" alt='CUser logo' width="80" />
                                        <span className="absolute border-white border-4 h-5 w-5 top-12 left-16 bg-green-700 rounded-full"></span>


                                    </div>

                                </div>

                                <div className="flex flex-col text-center mt-3 mb-4">

                                    <span className="text-2xl font-medium">{firstname} {lastname}</span>
                                    <span className="text-md text-gray-500">{accounttype}</span>

                                </div>

                                <p className="px-16 text-center text-md text-gray-800">Email id: {emailid}</p>
                                <p className="px-16 text-center text-md text-gray-800">User id: {username}</p>

                                <div className='p-6 items-center align-middle text-center'>
                                    <button onClick={logout} className='align-center p-2 bg-lime-500 rounded-lg text-black hover:scale-110 duration-300'>Logout</button>
                                </div>










                            </div>

                        </div>
                    </div>

                </div>


            </div>

        </>
    )
}

export default Profile

import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import reg from '../../assets/registerbg.jpg';
import log from '../../assets/loginbg-removebg-preview.png';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Auth = () => {

    return (
        <div className='auth'>
            <Login />

        </div>
    )
}

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [_, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("https://jobinc-backend.onrender.com/auth/login", { username, password });

            // alert(`Welcome Back ${username}`);
            setCookies("access_token", response.data.token);
            window.localStorage.setItem("userID", response.data.userID);
            toast.success(`Welcome Back ${username}`)
            navigate("/");



        } catch (err) {
            toast.error(`Incorrect Username or Password`);
            console.error(err);
        }
    }

    // setTimeout(() => {
    //     toast.success(`Welcome Back ${username}`);

    // }, 10);
    return (

        <div className=' mt-24' >
            <div className='antialiased' >
                <div className='flex w-full min-h-screen justify-center items-center'>
                    <div className='bg-[#C7D2FE] flex flex-col space-y-6 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white md:flex-row md:space-x-6 md:space-y-0 mb-10'>
                        <div className='flex flex-col justify-between space-y-4'>

                            <div>
                                <h1 className='font-bold text-4xl tracking-wide text-black text-center'>Welcome Back</h1>
                                <img src={log} alt='login' className='pt-7' />

                            </div>
                            {/* <div className='flex flex-col space-y-6'>


                            </div>
                            <div className='flex space-x-4 text-lg'>


                            </div> */}
                        </div>
                        <div>
                            <div className='bg-[#C4B5FD] rounded-xl shadow-lg p-8 text-gray-600 md:w-[80] mb-4'>
                                <h1 className='text-xl py-3 text-black'>Please Login to continue...</h1>
                                <form onSubmit={onSubmit} className='flex flex-col space-y-4'>
                                    <div>
                                        <label htmlFor='' className='text-sm'>User Name</label>

                                        <input type='text' placeholder='Enter User ID' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2' value={username} id='username' onChange={(e) => setUsername(e.target.value)} />
                                    </div>
                                    <div>
                                        <label htmlFor='' className='text-sm'>Your Password</label>

                                        <input type='password' placeholder='Enter Password' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2' value={password} id='password' onChange={(e) => setPassword(e.target.value)} />
                                    </div>

                                    <div>
                                        <input type='checkbox' className='border border-gray-400' />
                                        <span> Keep me logged in </span>
                                    </div>

                                    <button className='inline-block self-center bg-blue-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm'>Login</button>


                                </form>
                            </div>
                            <div className='bg-[#3f358a6b] rounded-xl shadow-lg p-8 text-white'>
                                <div className='py-4'>
                                    <label htmlFor='' className=' text-xl'>Don't have <span className='text-blue-600'><strong >job</strong>INC</span> account?</label>

                                </div>

                                <div className='self-center'>
                                    <button className='inline-block self-center items-center bg-blue-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm  hover:text-blue-500 hover:bg-white'><Link to="/register">Register Now</Link></button>
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
            </div >

        </div >
    );
};




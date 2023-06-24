import React, { useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
import { useNavigate, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function AddBlogs() {
    const userID = useGetUserID();
    const [cookies, _] = useCookies(["access_token"]);
    const [blogs, setBlogs] = useState({

        cover: "",
        title: "",
        summary: "",
        content: "",
        date: "",
        userOwner: userID,

    });

    const navigate = useNavigate();


    const handleChange = (event) => {
        const { name, value } = event.target;
        setBlogs({ ...blogs, [name]: value });
        // event.taget.value(setBlogs(blogs));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post(
                "http://jobincbackend-env.eba-e5fk3z74.us-east-1.elasticbeanstalk.com/blogs",
                { ...blogs },
                {
                    headers: { authorization: cookies.access_token },
                }
            );

            // alert("Blog Posted");
            toast.success("Blog Posted Successfully")
            navigate("/blogs");
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className=' mt-20' >

            <div className='antialiased'>
                <div className='flex w-full min-h-screen justify-center items-center'>
                    <div className='bg-[#C7D2FE] flex flex-col space-y-6 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white md:flex-row md:space-x-6 md:space-y-0 mb-14'>

                        <div className='py-9 min-w-full'>
                            <div className='bg-[#C4B5FD] rounded-xl shadow-lg p-8 text-gray-600  mb-4'>
                                <h2 className='text-3xl mb-4 text-center'>Post a Blog</h2>
                                <p className='text-xl py-3 text-black text-center'>Posting a Blog help freshers</p>
                                <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>


                                    <div>

                                        <input type="text"
                                            id="title"
                                            name="title"
                                            value={blogs.title}
                                            onChange={handleChange}
                                            placeholder="Enter Title..." className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2' />
                                    </div>
                                    <div>

                                        <input type="text"
                                            id="summary"
                                            name="summary"
                                            value={blogs.summary}
                                            onChange={handleChange}
                                            placeholder="Enter blog summary..." className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2' />
                                    </div>

                                    <div>


                                        <input
                                            type="text"
                                            id="cover"
                                            name="cover"
                                            value={blogs.cover}
                                            onChange={handleChange}
                                            placeholder="Enter image URL..." className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2' />
                                    </div>

                                    <div>
                                        <textarea
                                            name="content"
                                            id="content"
                                            placeholder="Enter Blog content..."
                                            rows="3"
                                            onChange={handleChange}
                                            value={blogs.content}
                                            className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2'
                                        ></textarea>
                                    </div>
                                    <div>
                                        <input
                                            type="date"
                                            id="date"
                                            name="date"
                                            value={blogs.date}
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
                                <button className='m-2 p-3 bg-lime-500 rounded-lg text-black hover:scale-110 duration-300'><Link to='/blogs'>Back</Link></button>
                            </div>
                        </div>

                    </div>

                </div>
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

export default AddBlogs


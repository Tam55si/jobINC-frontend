import bg from '../../assets/add-bg.png';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useGetUserID } from "../hooks/useGetUserID";
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';

function Blog() {
    const userID = useGetUserID();
    const [blogs, setBlogs] = useState();

    const [cookies, _] = useCookies(["access_token"]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                await axios.get("http://jobincbackend-env.eba-e5fk3z74.us-east-1.elasticbeanstalk.com/blogs").then((res) => res.data).then((data) => setBlogs(data.blogs))

                console.log(blogs);
            } catch (error) {
                console.error(error);
            }
        };



        fetchBlogs();



    }, []);
    return (
        <>
            <div>
                <div className="container px-10 mx-auto">

                    <section className=" text-slate-300 text-center flex gap-10 justify-center flex-wrap items-center py-5 mb-[4rem] mt-[8rem] bg-[#1E293B] rounded-[10px] ">

                        <div>

                            <div className="grid md:grid-cols-1 gap-x-6 lg:gap-x-12 lg:p-8 md:p-4" >
                                <h2 className="text-3xl font-bold   py-[2rem]">Welcome to Blogs page</h2>

                            </div>

                            <div>
                                <div className="container px-10 mx-auto">

                                    {
                                        blogs && blogs.map((blog => {
                                            return (
                                                <section className=" text-slate-300 text-center flex gap-10 justify-center flex-wrap items-center py-5 mb-[4rem] mt-[4rem] bg-[#1E293B] rounded-[10px]" key={blog._id}>


                                                    <div className="grid md:grid-cols-2 gap-x-6 lg:gap-x-12 lg:p-8 md:p-4" >
                                                        <img src={blog.cover} alt='' className='sm:w-[50%] xl:w-full' />

                                                        <h2><span className="text-2xl font-thin py-[2rem]">{blog.title}<br /></span>
                                                            {blog.summary}
                                                            <br />
                                                            {blog.content}
                                                        </h2>



                                                    </div>
                                                </section>
                                            )
                                        }))
                                    }

                                </div>
                                <button className=' p-2 bg-lime-500 rounded-lg text-black hover:scale-110 duration-300'>
                                    {!cookies.access_token ? (
                                        <Link to="/login">Login to add Blogs</Link>
                                    ) : (
                                        <Link to='/addblog'>Add Blog</Link>
                                    )}
                                </button>
                            </div>
                        </div>
                    </section>

                </div>
            </div>

        </>
    )
}

export default Blog

import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useGetUserID } from "../hooks/useGetUserID";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function EditJobs() {
    const userID = useGetUserID();
    const id = useParams().id;
    const navigate = useNavigate();
    const [jobs, setJobs] = useState('');

    const [imageUrl, setImageUrl] = useState('');
    const [title, setTitle] = useState('');
    const [postDate, setPostDate] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [company, setCompany] = useState('');
    const [level, setLevel] = useState('');
    const [type, setType] = useState('');
    const [work, setWork] = useState('');

    // const [redirect, setRedirect] = useState(false);

    // useEffect(() => {
    //     fetch('http://localhost:3002/jobpost/' + id)
    //         .then(response => {
    //             response.json().then(postInfo => {
    //                 setTitle(postInfo.title);
    //                 setImageUrl(postInfo.imageUrl);
    //                 setPostDate(postInfo.postDate);
    //                 setLocation(postInfo.location);
    //                 setCompany(postInfo.company);
    //                 setLevel(postInfo.level);
    //                 setType(postInfo.type);
    //                 setWork(postInfo.work);
    //                 setDescription(postInfo.description);

    //             });
    //         });
    // }, []);

    // async function updatePost(ev) {
    //     ev.preventDefault();
    //     const data = new FormData();
    //     data.set('title', title);
    //     data.set('imageUrl', imageUrl);
    //     data.set('postDate', postDate);
    //     data.set('location', location);
    //     data.set('company', company);
    //     data.set('level', level);
    //     data.set('type', type);
    //     data.set('work', work);
    //     data.set('description', description);

    //     const response = await fetch('http://localhost:3002/jobpost', {
    //         method: 'PUT',
    //         body: data,
    //         credentials: 'include',
    //     });
    //     if (response.ok) {
    //         setRedirect(true);
    //     }
    // }

    // if (redirect) {
    //     return <Navigate to={'/post/' + id} />
    // }


    // console.log(id);
    useEffect(() => {
        axios.get(`http://jobincbackend-env.eba-e5fk3z74.us-east-1.elasticbeanstalk.com/jobpost/${id}`)
            .then(jobs => {
                console.log("jobs", jobs);
                setJobs(jobs.data.job);
            }).catch((error) => console.error(error));

    }, [id]);


    const sendRequest = async () => {
        console.log("sendReq");
        await axios.put(`http://jobincbackend-env.eba-e5fk3z74.us-east-1.elasticbeanstalk.com/jobpost/${id}`, {
            imageUrl: String(jobs.imageUrl),
            title: String(jobs.title),
            postDate: String(jobs.postDate),
            location: String(jobs.location),
            description: String(jobs.description),
            company: String(jobs.company),
            level: String(jobs.level),
            type: String(jobs.type),
            work: String(jobs.work)
        }).then(res => res.data)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(() =>
            toast.success(`Job updated Successfully`)).then(() =>
                navigate("/jobsdash"))

    }
    const handleChange = (e) => {
        setJobs((prevState) => ({
            ...prevState, [e.target.name]: e.target.value,
        }));
    }

    return (
        <div className=' mt-20' >

            <div className='antialiased'>
                <div className='flex w-full min-h-screen justify-center items-center'>
                    <div className='bg-[#C7D2FE] flex flex-col space-y-6 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white md:flex-row md:space-x-6 md:space-y-0 mb-14'>

                        <div className='py-9 min-w-full'>
                            <div className='bg-[#C4B5FD] rounded-xl shadow-lg p-8 text-gray-600  mb-4'>
                                <h2 className='text-3xl mb-4 text-center'>Edit your posts here</h2>
                                <p className='text-xl py-3 text-black text-center'>Quick & Easy Job Posting - Get Quality Applies</p>
                                <form className='flex flex-col space-y-4' onSubmit={handleSubmit}>


                                    <div>

                                        <input type="text"
                                            id="title"
                                            value={jobs.title}
                                            name="title"
                                            // onChange={ev => setTitle(ev.target.value)}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter Job Title" className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2' />
                                    </div>
                                    <div>

                                        <input type="text"
                                            id="location"
                                            value={jobs.location}
                                            name="location"
                                            // onChange={ev => setLocation(ev.target.value)}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter location deatils" className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2' />
                                    </div>
                                    <div>

                                        <input type="text"
                                            id="company"
                                            name="company"
                                            value={jobs.company}
                                            // onChange={ev => setCompany(ev.target.value)}
                                            onChange={handleChange}
                                            placeholder="Enter company name..." className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2' />
                                    </div>
                                    <div>


                                        <input
                                            type="text"
                                            id="imageUrl"
                                            value={jobs.imageUrl}
                                            name="imageUrl"
                                            // onChange={ev => setImageUrl(ev.target.value)}
                                            onChange={handleChange}
                                            placeholder="Enter company image URL..." className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2' />
                                    </div>
                                    <div>


                                        <label for="level">Choose a Level:</label>
                                        <select name="level" id="level" value={jobs.level} onChange={handleChange} className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2'>
                                            <option value=""></option>
                                            <option value="Fresher">Fresher</option>
                                            <option value="Intermediate">Intermediate</option>
                                            <option value="Senior">Senior</option>
                                            <option value="Advanced">Advanced</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label for="work">Choose a work type:</label>
                                        <select name="work" id="work" value={jobs.work} onChange={handleChange} className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2'>
                                            <option value=""></option>
                                            <option value="Work From Office">Work From Office</option>
                                            <option value="Hybrid">Hybrid</option>
                                            <option value="Work From Home">Work From Home</option>

                                        </select>
                                    </div>
                                    <div>
                                        <label for="type">Choose a work duration:</label>
                                        <select name="type" id="type" value={jobs.type} onChange={handleChange} className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2'>
                                            <option value=""></option>
                                            <option value="Full-Time">Full-Time</option>
                                            <option value="Part-Time">Part-Time</option>
                                            <option value="Contract">Contract</option>

                                        </select>
                                    </div>
                                    <div>
                                        <textarea
                                            name="description"
                                            id="description"
                                            value={jobs.description}
                                            placeholder="Enter job description..."
                                            rows="3"
                                            // onChange={ev => setDescription(ev.target.value)}
                                            onChange={handleChange}
                                            className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2'
                                        ></textarea>
                                    </div>
                                    <div>
                                        <input
                                            type="month"
                                            id="postDate"
                                            value={jobs.postDate}
                                            name="postDate"
                                            // onChange={ev => setPostDate(ev.target.value)}
                                            onChange={handleChange}
                                            className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2'
                                        />
                                    </div>

                                    <div>
                                        <input type='checkbox' className='border border-gray-400' />
                                        <span> I accept the <a href="/" className='text-blue-500 font-semibold'>Terms of Use </a>and <a href="/" className='text-blue-500 font-semibold'>Privacy Policy</a></span>
                                    </div>

                                    <button className='inline-block self-center bg-blue-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm'>Update Job</button>


                                </form>
                            </div>
                            <button className='m-2 p-3 bg-lime-500 rounded-lg text-black hover:scale-110 duration-300'><Link to='/admin'>Back</Link></button>
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
        // <>
        //     <h1>Title: {jobs.title}</h1>
        // </>

    );
}

export default EditJobs

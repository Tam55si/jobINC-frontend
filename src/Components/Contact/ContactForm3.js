import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

function ContactForm3() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className=' mt-20' >

            <div className='antialiased'>
                <div className='flex w-full min-h-screen justify-center items-center'>
                    <div className='bg-[#C7D2FE] flex flex-col space-y-6 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white md:flex-row md:space-x-6 md:space-y-0 mb-14'>

                        <div className='py-9 min-w-full'>
                            <div className='bg-[#C4B5FD] rounded-xl shadow-lg p-8 text-gray-600  mb-4'>
                                <h2 className='text-3xl mb-4 text-center'>Get started in minutes!</h2>
                                <p className='text-xl py-3 text-black text-center'>Quick & Easy Job Posting - Get Quality Applies</p>
                                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4'>


                                    <div>

                                        <input type="text"
                                            id="name"
                                            name="name"
                                            ref={register({ required: true })}
                                            placeholder="Enter Name..." className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2' />
                                        {/* {errors.name && <p>Enter valid name</p>} */}
                                    </div>
                                    <div>

                                        <input type="email"
                                            id="email"
                                            name="email"
                                            ref={register({ required: true })}
                                            placeholder="Enter Email id..." className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2' />
                                        {/* {errors.email && <p>Enter valid email id</p>} */}
                                    </div>


                                    <div>
                                        <textarea
                                            name="description"
                                            id="description"
                                            placeholder="Enter text..."
                                            rows="3"
                                            ref={register({ required: true })}
                                            className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2'
                                        ></textarea>
                                    </div>


                                    <button className='inline-block self-center bg-blue-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm hover:scale-110 duration-300'>Submit</button>


                                </form>

                            </div>
                            <div >
                                <button className='m-2 p-3 bg-lime-500 rounded-lg text-black hover:scale-110 duration-300'><Link to='/admin'>Back</Link></button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContactForm3

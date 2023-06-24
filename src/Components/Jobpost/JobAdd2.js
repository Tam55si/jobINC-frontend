import React from 'react';
import postjob from '../../assets/registerpic-removebg-preview.png';

function JobAdd2() {
    return (
        <div>
            <div className="container px-10 mx-auto">

                <section className=" text-slate-300 text-center flex gap-10 justify-center flex-wrap items-center py-5 mb-[10rem] mt-[2rem] bg-[#1E293B] rounded-[10px]">


                    <div className="grid md:grid-cols-2 gap-x-6 lg:gap-x-12 lg:p-8 md:p-4" >

                        <img src={postjob} alt='' className='sm:w-[50%] xl:w-full' />
                        <div className='md:pt-6'>
                            <h1 className='text-3xl mb-4 flex flex-col md:pb-9'>Save time and effort in your hiring journey.</h1>
                            <h2 className="text-3xl font-thin mb-12 py-[4rem]">Finding the best fit for the job shouldn’t be a full-time job. <span className='text-blueColor'><strong>job</strong>INC</span>’s simple and powerful tools let you source, screen, and hire faster.</h2>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default JobAdd2;
